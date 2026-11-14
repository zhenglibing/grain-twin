/**
 * zh translation progress: a key counts as translated when its zh property
 * source text differs from the en property's. Seeded placeholders (zh === en)
 * count as untranslated. --fail-under=P fails (exit 1) below P percent; an
 * invalid or blank --fail-under value is rejected up front with exit 2.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const failUnder = (() => {
  const flag = process.argv.find((a) => a.startsWith('--fail-under='));
  if (!flag) return null;
  const raw = flag.slice('--fail-under='.length);
  if (raw.trim() === '' || !Number.isFinite(Number(raw))) {
    console.error(`Invalid --fail-under value: ${raw}`);
    process.exit(2);
  }
  return Number(raw);
})();

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

const rows = [];
let total = 0;
let done = 0;

for (const file of listSourceFiles('src')) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('defineMessages')) continue;
  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
  let fileTotal = 0;
  let fileDone = 0;

  const visit = (node) => {
    if (
      ts.isCallExpression(node) &&
      node.expression.getText(sf) === 'defineMessages' &&
      node.arguments.length === 1 &&
      ts.isObjectLiteralExpression(node.arguments[0])
    ) {
      const props = node.arguments[0].properties;
      const en = props.find((p) => p.name && p.name.getText(sf) === 'en');
      const zh = props.find((p) => p.name && p.name.getText(sf) === 'zh');
      if (
        en &&
        zh &&
        ts.isPropertyAssignment(en) &&
        ts.isPropertyAssignment(zh) &&
        ts.isObjectLiteralExpression(en.initializer) &&
        ts.isObjectLiteralExpression(zh.initializer)
      ) {
        for (const enProp of en.initializer.properties) {
          const key = enProp.name && enProp.name.getText(sf);
          if (!key) continue;
          fileTotal += 1;
          const zhProp = zh.initializer.properties.find(
            (p) => p.name && p.name.getText(sf) === key
          );
          if (zhProp && zhProp.getText(sf) !== enProp.getText(sf)) fileDone += 1;
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  if (fileTotal > 0) rows.push({ file, total: fileTotal, done: fileDone });
  total += fileTotal;
  done += fileDone;
}

rows.sort((a, b) => a.done / a.total - b.done / b.total || b.total - a.total);
for (const row of rows) {
  const pct = ((row.done / row.total) * 100).toFixed(1).padStart(5);
  console.log(
    `${pct}%  ${String(row.done).padStart(4)}/${String(row.total).padEnd(4)}  ${row.file}`
  );
}
const percent = total === 0 ? 100 : (done / total) * 100;
console.log(`\nzh progress: ${done}/${total} (${percent.toFixed(2)}%)`);
if (failUnder !== null && percent < failUnder) {
  console.error(`FAIL: below --fail-under=${failUnder}`);
  process.exit(1);
}
