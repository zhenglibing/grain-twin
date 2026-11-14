/**
 * One-shot codemod: seed a `zh` block into every defineMessages catalog by
 * structurally copying its `en` block. Seeded zh renders as English, so this
 * changes no visible copy; translations then replace the placeholder per file.
 * Safe to re-run: catalogs that already declare zh are left untouched.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

function listSourceFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') continue;
      listSourceFiles(p, acc);
    } else if (/\.tsx?$/.test(entry.name)) {
      acc.push(p);
    }
  }
  return acc;
}

const files = listSourceFiles('src');
let touchedFiles = 0;
let seededCatalogs = 0;
const skipped = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('defineMessages')) continue;

  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
  const edits = [];

  const visit = (node) => {
    if (
      ts.isCallExpression(node) &&
      node.expression.getText(sf) === 'defineMessages' &&
      node.arguments.length === 1 &&
      ts.isObjectLiteralExpression(node.arguments[0])
    ) {
      const catalog = node.arguments[0];
      const props = catalog.properties;
      const en = props.find((p) => p.name && p.name.getText(sf) === 'en');
      const zh = props.find((p) => p.name && p.name.getText(sf) === 'zh');
      if (zh) return; // already seeded
      if (!en || !ts.isPropertyAssignment(en) || !ts.isObjectLiteralExpression(en.initializer)) {
        skipped.push(`${file}: defineMessages without an en object literal`);
        return;
      }
      // Insert after en's trailing comma; if en is the last property (no comma
      // before the catalog's closing brace), supply the comma ourselves.
      let insertPos = en.end;
      let needsComma = true;
      while (insertPos < content.length && /[\s,]/.test(content[insertPos])) {
        if (content[insertPos] === ',') {
          insertPos += 1;
          needsComma = false;
          break;
        }
        insertPos += 1;
      }
      edits.push({
        insertPos,
        text: `${needsComma ? ',' : ''}\n  zh: ${en.initializer.getText(sf)},`,
      });
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  if (edits.length === 0) continue;
  edits.sort((a, b) => b.insertPos - a.insertPos);
  let out = content;
  for (const edit of edits) {
    out = out.slice(0, edit.insertPos) + edit.text + out.slice(edit.insertPos);
  }
  fs.writeFileSync(file, out);
  touchedFiles += 1;
  seededCatalogs += edits.length;
}

console.log(`Seeded zh into ${seededCatalogs} catalog(s) across ${touchedFiles} file(s).`);
if (skipped.length > 0) {
  console.error('SKIPPED (need a manual zh block):');
  for (const s of skipped) console.error('  ' + s);
  process.exit(1);
}
