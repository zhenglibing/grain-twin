# MillOS（grain-twin）运行手册

> 更新：2026-11-15 · 适用提交：`main`（中文本地化完结 + 测试修复 `00c9f5f` 之后）
> 本文是"从零跑起来到日常验证"的操作手册；架构与渲染规范见 `CLAUDE.md`，纪事设计见 `docs/CHRONICLE.md`。

---

## 1. 项目是什么

MillOS 是浏览器里的粮仓 SCADA 数字孪生（React 19 + TypeScript 5.9 + Vite 7 + R3F + Zustand），
仓库本地路径：`F:\00Projects\04SCADA\grain-twin`。界面三语：English / Português (Brasil) / 简体中文。

## 2. 环境要求

| 项 | 要求 |
|---|---|
| Node.js | ≥ 20.19（Vite 7 要求；本机验证于 v24） |
| 浏览器 | Chrome/Edge **有头**窗口（见 §8：无头跑不完场景加载） |
| GPU | 需真实 GPU 渲染；远程/虚拟机慎用 |
| AI 密钥 | **不需要**。云端 AI 是 BYOK（设置里自填，仅存页面内存）；WebGPU 本地模型无需密钥 |
| Windows 测试 | symlink 类测试需开发者模式或管理员（无权限会自动跳过，见 §7） |

## 3. 安装与启动

```bash
cd F:/00Projects/04SCADA/grain-twin
npm install
cp .env.local.example .env.local   # 可选：只影响云端 AI 配置说明
npm run dev                        # 固定 127.0.0.1:3000
```

打开 `http://127.0.0.1:3000/`。首次载入 30–45 秒（着色器/资产准备），载入页会自动过；
若设备被判为慢速，会出现"打开已加载的场景"按钮，点它即可进入。

## 4. 界面语言

- 直接访问 `?lang=zh`（或 `pt-BR`）；或不带参数走"已保存选择（`millos-locale`）→ 浏览器语言"顺序
- 界面内切换：dock `设置` 面板的语言项，或新手引导卡顶部的 EN / PT-BR / 中文 按钮
- zh 对个别未覆盖键回落英文；进度计量：`npm run i18n:zh-progress`
  （当前 99.76% = 5046/5058，余量 12 个为 GLOSSARY:935 登记的合法假象）
- 测试始终以英文运行（`Tests run in English`），不受界面语言影响

## 5. 快速上手（可玩流程）

1. **dock**（底部）：概览 / 生产 / 自治 / 纪事 / 安全 / SCADA 系统 / 设置
2. **新手引导**：跟随谷物（3 步）→ 最后一步 `开始运行` 启动产线与引导式交付
3. **节奏**：班次节奏下拉（暂停/½x/1x/2x/4x）。时钟、期限、卡车、叉车一起缩放；
   班次在 14:00 / 22:00 / 06:00 关闭并写班次报告
4. **磨坊纪事**（长弧战役层，签署宪章前完全惰性）：
   - dock `纪事` → 选难度（新手/史实/困难）与四项宪章条款 → `签署宪章`
   - 签署即解锁第一条传承笔记；此后 接收首车（来粮）、首次质检、首个班次报告 等事件各解锁一条
   - **测验**在 纪事 → 笔记 页底部，题目池随已解锁注记增长（≥4 道题可开卷；
     4 条注记 ≈ 8 题，答毕显示 `X / N 袋` 与 `再来一轮`）
5. **疏散演练**（可选）：安全面板 → 控制项 `START DRILL`；四区依游戏时序自动验证，
   全部完成或 `END DRILL` 结束。演练只做疏散通道验证，不触发警报

## 6. 冒烟验证（zh）

```bash
node scripts/zh-smoke.mjs   # exit 0 = 中文外壳渲染通过
```

- 脚本自带**渲染锁**（`.capture.lock`）——任何会渲染的脚本都必须先取锁（多实例并跑会互相拖慢一倍）
- 检查点：载入页消失、dock 五探针（概览/生产/安全/设置/简体中文）全中、无 pageErrors
- 截图落在 OS 临时目录，不入库

## 7. 测试与门禁

```bash
npx vitest run              # 全量（约 45–50 分钟；5493 项）
npm run typecheck           # tsc 双 tsconfig（源码 + 测试）
npm run lint                # eslint src scripts e2e（含项目专属 no-restricted-syntax 规则）
npm run format:check        # prettier 检查（npm run format 修复）
npm run build               # 生产构建
```

**当前基线（2026-11-15）**：5448 过 / 18 跳过 / **14 失败测试 + 1 失败套件 = 上游资产漂移**，
与中文工作无关（`git log origin/main..main` 证明从未触及那些测试文件与被测资产）：

- `scripts/glb-self-coplanar.test.mjs` ×13——交付的 world GLB 确有被标记的自共面
- `src/shaders/__tests__/civicLampShadows.test.ts` ×1、`scripts/reconcile-farm-models.test.mjs` ×1——资产 sha256 钉与交付字节不符

已修复三类历史红（提交 `00c9f5f`）：tripo 队列 fsync 只读句柄（Windows EPERM）、
symlink 特性探测（无开发者模式时只跳过依赖 symlink 的守卫）、weight-scale-face 的 SceneText
字体钉词对齐 zh 感知契约。**Windows 无 symlink 权限时看到 `1 skipped` 是预期行为。**

## 8. 常见问题（FAQ）

| 症状 | 原因与处置 |
|---|---|
| 载入页永远停在"正在预热磨辊" | 无头浏览器（SwiftShader）跑不完场景准备。改用**有头** Chrome；出现"打开已加载的场景"按钮就点它 |
| 玩到一半画面像旧版本 | `public/sw.js` 服务缓存。硬刷新，或 DevTools → Application 注销 Service Worker 并清站点数据 |
| 大量文件显示 `M` 但内容没变 | ~294 个 CRLF 幻影改动（Windows 行尾）。**永远点名 `git add <file>`，禁止 `-A`/`-u`** |
| `EPERM: symlink` / `EPERM: fsync` | 权限/平台问题，已在 `00c9f5f` 修复或探针跳过；若新增脚本请沿用"先探测再使用"模式 |
| puppeteer 脚本第二次启动丢状态 | 每次启动是全新临时 profile，localStorage 不跨实例——跨阶段流程（签宪章→玩班次→测验）必须**单会话**完成 |
| Tailwind 间距类"失灵" | Tailwind v4 级联层问题：检查是否有未分层 `* { margin:0; padding:0 }`（详见 CLAUDE.md 专节） |
| 界面个别词是英文 | 若 `i18n:zh-progress` 显示该文件 100%，多半是 12 个已登记假象之一（websocketUrl、kg 格式串、专名等），见 `src/i18n/GLOSSARY.md` 末尾注册表 |

## 9. 已知残留（截至 2026-11-15）

1. 上游资产漂移红测试：§7 所列 14 + 1（属上游修复范畴，需要资产手术或钉更新）
2. 计量假象 12 个：合法余量，GLOSSARY:935 有清单
3. 本地 main 领先 origin/main **58 个提交**，尚未推送
4. zh 的 3D 场景字体为整字 TTF（17MB NotoSansSC）；troika 在显式字体下无法逐字回退，
   混排英文走同一字体（已有字形覆盖）

## 10. 命令速查

| 命令 | 用途 |
|---|---|
| `npm run dev` | 开发服务器（127.0.0.1:3000） |
| `npm run build` / `npm run preview` | 生产构建 / 本地预览 |
| `npx vitest run [路径]` | 测试（可只跑目录/文件） |
| `npm run i18n:zh-progress` | 中文进度计量（`--fail-under=N` 门禁；空白参数退出码 2） |
| `node scripts/zh-smoke.mjs` | 中文冒烟门（有头浏览器 + 渲染锁） |
| `npm run validate:reachability` | 模块可达性门（改陌生文件前先跑，`--why=<path>` 看存活链） |
| `npm run validate:assets` / `validate:depth` | 资产校验 / 深度偏移策略门 |
| `npm run benchmark:runtime` | 性能基准（自动取渲染锁；FAIL 先看 `load` 字段再下结论） |
