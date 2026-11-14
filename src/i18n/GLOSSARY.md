# MillOS pt-BR glossary

One vocabulary for every translated file. Audience: Brazilian cooperative
leaders (WCM'26). Brazilian Portuguese only, never European Portuguese.

## Register and style

- Address the reader as **você**, never _tu_. Avoid _vós_, _contacto_, _ecrã_,
  _utilizador_, _registo_ (European forms). Use _contato_, _tela_, _usuário_,
  _registro_.
- Buttons and actions: imperative, sentence case, short. _Abrir_, _Fechar_,
  _Voltar_, _Avançar_, _Mostrar_, _Confirmar_, _Cancelar_, _Pular_.
- Keep the casing pattern of the English (an UPPERCASE English label stays
  uppercase in Portuguese).
- Keep the tone: plain, concrete, calm, no hype. MillOS copy is careful about
  what is measured versus advised; keep those distinctions exact.
- Gender: use _cooperados_ for members in general, _cada cooperado_ for one.
  Do not write _cooperado(a)_ in running copy.

## Numbers, units and time

- Every number in translated copy goes through `formatFixed(value, digits)`
  (replacement for `value.toFixed(digits)`) or `formatGrouped(value, opts)`
  (replacement for `toLocaleString`). pt-BR reads "6,000 kg" as six kilograms:
  it must render "6.000 kg"; decimals use a comma ("2,5 t/h").
- Units stay as symbols: kg, t, t/h, °C, mm/s, RPM, %, km/h.
- Durations: "3h 43m" becomes "3h 43min"; "minute 30" becomes "minuto 30".
- Clock times stay 24-hour ("14:04").

## Mill and operations

| English                     | pt-BR                                      |
| --------------------------- | ------------------------------------------ |
| mill (the site)             | moinho                                     |
| roller mill                 | moinho de rolos                            |
| plansifter                  | plansifter                                 |
| packer / packing line       | ensacadeira / linha de ensaque             |
| silo                        | silo                                       |
| conveyor                    | transportador / esteira                    |
| forklift                    | empilhadeira                               |
| truck                       | caminhão                                   |
| receiving (dock/truck)      | recebimento (doca/caminhão de recebimento) |
| shipping / dispatch         | expedição                                  |
| dock                        | doca                                       |
| departure / departed        | saída / saiu                               |
| manifest                    | romaneio                                   |
| order                       | pedido                                     |
| customer                    | cliente                                    |
| due / deadline              | prazo                                      |
| overdue                     | atrasado                                   |
| batch / lot                 | lote                                       |
| quality control (QC)        | controle de qualidade (CQ)                 |
| quality hold                | retenção de qualidade                      |
| release (a batch)           | liberar / liberação                        |
| recipe                      | receita                                    |
| setpoint                    | setpoint                                   |
| throughput                  | vazão                                      |
| bags/h                      | sacos/h                                    |
| bag / sack                  | saco                                       |
| target                      | meta                                       |
| buffer                      | estoque intermediário                      |
| bottleneck                  | gargalo                                    |
| shift                       | turno                                      |
| shift review                | revisão do turno                           |
| shift pace                  | ritmo do turno                             |
| paused / relaxed / standard | pausado / tranquilo / padrão               |
| maintenance                 | manutenção                                 |
| breakdown                   | pane                                       |
| wear                        | desgaste                                   |
| work order                  | ordem de serviço                           |
| spare parts                 | peças de reposição                         |
| alarm / acknowledge         | alarme / reconhecer                        |
| critical / warning          | crítico / alerta                           |
| safety                      | segurança                                  |
| emergency stop              | parada de emergência                       |
| fire drill / egress         | simulado de evacuação / rota de saída      |
| near miss                   | quase acidente                             |
| incident                    | ocorrência                                 |
| SCADA, tags, historian      | SCADA, tags, histórico                     |
| strong white bread flour    | farinha de trigo forte para pão            |
| semolina                    | semolina                                   |
| community flour             | farinha comunitária                        |
| wheat / corn                | trigo / milho                              |

## Cooperative and workplace

| English                   | pt-BR                                    |
| ------------------------- | ---------------------------------------- |
| cooperative / co-op       | cooperativa                              |
| member                    | cooperado                                |
| member review             | avaliação dos cooperados                 |
| surplus                   | sobras                                   |
| distribute surplus        | distribuir as sobras / rateio das sobras |
| retain (in cash)          | reter em caixa                           |
| allocate to the community | destinar à comunidade                    |
| ballot / vote             | votação / voto                           |
| meeting / assembly        | assembleia                               |
| chair                     | coordenação                              |
| charter                   | estatuto                                 |
| working agreement         | acordo de trabalho                       |
| role / role holder        | função / responsável pela função         |
| handover / handoff        | passagem de função / passagem de turno   |
| briefing                  | briefing                                 |
| consent                   | consentimento                            |
| pay / wages               | remuneração                              |
| rest / break              | descanso / pausa                         |
| recovery time             | tempo de recuperação                     |
| objection / challenge     | objeção / contestação                    |
| proposal                  | proposta                                 |
| decision                  | decisão                                  |
| fairness                  | equidade                                 |
| take over                 | assumir                                  |
| campaign / season         | campanha / temporada                     |
| learning review           | revisão de aprendizado                   |
| teach-back                | explicação de volta                      |

## AI and the interface

| English                                              | pt-BR                                                          |
| ---------------------------------------------------- | -------------------------------------------------------------- |
| Bilateral Autonomy System (BAS)                      | Sistema de Autonomia Bilateral (BAS)                           |
| autonomy                                             | autonomia                                                      |
| AI partner                                           | parceiro de IA                                                 |
| agent                                                | agente                                                         |
| advice / forecast / rehearsal / observed result      | recomendação / previsão / ensaio / resultado observado         |
| Getting started                                      | Primeiros passos                                               |
| Overview / Production / Autonomy / Safety / Settings | Visão geral / Produção / Autonomia / Segurança / Configurações |
| Now playing / playlist                               | Tocando agora / lista de reprodução                            |
| replay (decision, diagnostic, workplace)             | reprodução (never "replay")                                    |
| Notifications                                        | Notificações                                                   |
| graphics quality low / medium / high / ultra         | qualidade gráfica baixa / média / alta / ultra                 |
| Reset Simulation                                     | Reiniciar simulação                                            |
| credits (money)                                      | créditos                                                       |
| first-person view                                    | visão em primeira pessoa                                       |

## Never translate

SCADA tag IDs and engineering units; machine designations (R.M. 101,
Silo Alpha, Plansifter A, Line 1); proper names of people, places, brands and
customers (Riverside Bakers' Cooperative); soundtrack song titles and lyrics;
painted in-world signage; console, logger and developer-only error strings;
agent-protocol command names, schemas and machine-readable fields; test IDs,
CSS classes, keys and URLs.

## zh（简体中文）术语基线

来自介绍文章的用户验证译法。翻译批次必须逐条对齐；遇到表中没有的词，
先按工业自动化习惯拟定并补进本表再使用。

| English | zh |
|---|---|
| overview | 概览 |
| production | 生产 |
| autonomy | 自治 |
| central tick | 中心节拍 |
| Chronicle | 磨坊纪事 |
| safety | 安全 |
| SCADA (dock short label) | SCADA 系统 |
| settings | 设置 |
| language | 语言 |
| silo | 筒仓 |
| roller mill | 磨辊机 |
| plansifter | 平筛 |
| packer / packing line | 包装线 |
| forklift | 叉车 |
| truck | 卡车 |
| bags/h | 袋/时 |
| target | 目标 |
| running | 运行中 |
| idle | 空闲 |
| intake (plant) | 接收（运输腿 intake=进料） |
| maintenance | 维护 |
| Perform Maintenance | 执行维护 |
| wear | 磨损 |
| motor load | 电机负载 |
| temperature | 温度 |
| warning | 警告 |
| breakdown | 故障停机 |
| shift | 班次 |
| alarm | 报警 |
| acknowledge (ACK) | 确认 |
| shelved | 搁置 |
| suppressed | 抑制 |
| tag | 点位 |
| trend | 趋势 |
| historian | 历史库 |
| batch | 批次 |
| lineage | 谱系 |
| quality release | 质量放行 |
| dispatch | 发运 |
| material balance | 物料账 |
| waypoint | 航点 |
| fault injection | 故障注入 |
| sensor fail | 传感器失效 |
| spike | 尖峰 |
| drift | 漂移 |
| stuck value | 卡值 |
| noise | 噪声 |
| level (silo) | 料位 |
| getting started | 新手引导 |
| camera controls | 相机控制 |
| skip tour | 跳过引导 |
| zone (label) | 区域 |
| storage (zone) | 仓储 |
| milling (zone) | 制粉 |

批次①（外壳）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| Mill Overview | 磨坊概览 |
| Production floor | 生产车间 |
| Logistics planning | 物流规划 |
| Simulated SCADA / SCADA SIMULATED | SCADA 模拟 |
| AI Partner | AI 伙伴 |
| AI reflection | AI 反思 |
| Bilateral Autonomy System (BAS) | 双边自治系统（BAS） |
| Workplace & Autonomy | 工作与自治 |
| Safety & Emergency | 安全与应急 |
| Inspector | 检查器 |
| Datalinks | 数据链接 |
| first-person view | 第一人称视角 |
| Main Navigation | 主导航 |
| Start operating | 开始运行 |
| Shift pace | 班次节奏 |
| run window | 运行时段 |
| morning / afternoon / night (shift) | 清晨 / 下午 / 夜间 |
| throughput | 产量 |
| daily target | 日目标 |
| machine | 设备 |
| Machine Status | 设备状态 |
| critical | 危急 |
| feed rate | 喂料速率 |
| RPM | 转速 |
| vibration | 振动 |
| input buffer / output buffer | 进料缓冲 / 出料缓冲 |
| repair | 维修 |
| Restart Unit | 重启设备 |
| focus machine | 聚焦设备 |
| service unit | 维护单位 |
| dispatch (a crew) | 派遣 |
| spare parts | 备件 |
| filters / bearings / belts / sensors / motors | 滤芯 / 轴承 / 皮带 / 传感器 / 电机 |
| preventive / corrective / emergency | 预防性 / 纠正性 / 紧急 |
| material traceability / trace | 物料追溯 / 追溯 |
| manifest | 运单 |
| receiving | 接收 |
| source lot | 原料批 |
| batch genealogy / genealogy | 批次谱系 / 谱系 |
| quality hold / hold | 质量扣留 / 扣留 |
| released | 已放行 |
| recall | 召回 |
| retest | 复检 |
| written off as waste | 报废核销 |
| upstream provenance | 上游来源 |
| investigation | 调查 |
| weather clear / cloudy / rain / storm | 晴 / 多云 / 雨 / 风暴 |
| Site Mode | 厂区模式 |
| staffed | 有人值守 |
| autonomous logistics | 自主物流 |
| near miss | 未遂事件 |
| safety stops / safety score / days safe | 安全停机 / 安全评分 / 安全天数 |
| dock | 装卸区 |
| unloading | 卸货 |
| line idle / changeover | 产线空闲 / 换单 |
| cooperative | 合作社 |
| customer / order | 客户 / 订单 |
| wheat grain / corn grain / flour / bran / middlings / semolina | 小麦粒 / 玉米粒 / 面粉 / 麸皮 / 次粉 / 粗粒粉 |
| control room | 控制室 |
| simulation / simulated | 模拟 |
| graphics quality low / medium / high / ultra | 低 / 中 / 高 / 超高 |
| Reset Simulation | 重置模拟 |
| PA (public address) | 广播 |
| PA mode Focused / Characterful | 简洁 / 生动 |
| reduce motion / follow system | 减弱动态效果 / 跟随系统 |
| replay / diagnostic replay | 回放 / 诊断回放 |
| philosophy tooltips | 理念提示 |
| loading screen quotes | 加载界面引言 |

批次②（SCADA 工作区）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| SCADA workspace | SCADA 工作区 |
| SCADA runtime | SCADA 运行时 |
| Simulation Lab (tab name) | 故障注入 |
| telemetry | 遥测 |
| enable / disable | 启用 / 停用 |
| connection type | 连接类型 |
| poll interval | 轮询间隔 |
| pub/sub | 发布/订阅 |
| backend proxy | 后端代理 |
| base URL / topic prefix | 基础 URL / 主题前缀 |
| autonomous control layer | 自主控制层 |
| control identity | 控制身份 |
| process (tab) / process tags | 过程 / 过程点位 |
| raw grain | 原粮 |
| in process | 在制 |
| finished goods | 成品 |
| live material ledger | 实时物料台账 |
| opening inventory | 期初库存 |
| utility (plant) / tank farm | 公用工程 / 罐区 |
| asset (plant object) | 设施 |
| safety interlock | 安全联锁 |
| sifting | 筛理 |
| roll reduction | 磨辊研磨 |
| setpoint | 设定值 |
| recipe route / quality gate | 配方路线 / 质量门 |
| dispatchable | 可发运 |
| truck load | 卡车装载 |
| execution state / top constraint | 执行状态 / 首要约束 |
| campaign (operations) | 加工季 |
| incident | 事件 |
| work order / open work order | 工单 / 未结工单 |
| provenance (maintenance / quality) | 来源（维护来源 / 质量来源） |
| alarm states: Unacknowledged / Returned, awaiting ACK / Acknowledged / Cleared | 未确认 / 返回待确认 / 已确认 / 已清除 |
| out of service (OOS) | 停用（OOS） |
| restore to service | 恢复投用 |
| disposition (reason) | 处置（原因） |
| alarm flood / flood threshold | 报警风暴 / 风暴阈值 |
| alarm priority CRITICAL / HIGH / MEDIUM / LOW | 危急 / 高 / 中 / 低 |
| SCADA mode: simulation / live / hybrid / disconnected | 模拟 / 实时 / 混合 / 已断开 |
| incident phase: raised / acknowledged / mitigated / resolved | 已触发 / 已确认 / 已缓解 / 已解决 |
| alarm transition | 报警状态转换 |
| acknowledge all | 全部确认 |
| trend annotation / trend duration / gap (table) | 趋势标注 / 趋势时长 / 空缺 |
| interpolated | 插值 |
| event history | 事件历史 |
| operations logbook | 运行日志 |
| live (view) / return to live | 实时 / 回到实时 |
| unassigned | 未指派 |
| signal quality good / bad / stale / uncertain (spoken aria; codes GOOD/BAD/STALE/UNCERTAIN stay) | 良好 / 较差 / 过期 / 不确定 |
| asset level critical / low / normal (spoken aria) | 危急 / 偏低 / 正常 |
| work order phase: diagnosed / awaiting parts / repairing / verification / ready to restart / restart requested / returned to service | 已诊断 / 等待备件 / 维修中 / 验证中 / 待重启 / 已请求重启 / 已恢复运行 |
| quality action: hold / test / retest / release / recall | 扣留 / 检测 / 复检 / 放行 / 召回 |
| fulfillment stage: planning / milling / quality hold / ready to load / loading / ready to dispatch / dispatched / fulfilled | 规划 / 制粉 / 质量扣留 / 待装载 / 装载中 / 待发运 / 已发运 / 已完成 |
| dispatch status: away / loading / held / ready / departed | 已离开装卸区 / 装载中 / 被扣留 / 就绪 / 已离场 |
| fault type communication | 通信故障 |

批次②（SCADA 组件组：设定值/点位库/报警管理）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| operator setpoint | 操作员设定值 |
| reading / no reading yet | 读数 / 暂无读数 |
| alarm threshold | 报警阈值 |
| moisture | 水分 |
| feeder | 喂料器 |
| roll speed / speed setpoint (RPM) | 磨辊速度 / 转速设定值 |
| bearing / motor current | 轴承 / 电机电流 |
| sieve condition | 筛网状态 |
| bag count / bag weight | 装袋数 / 单袋重量 |
| air pressure | 气压 |
| ambient temperature / humidity | 环境温度 / 环境湿度 |
| outside temperature | 室外温度 |
| compressed air pressure | 压缩空气压力 |
| total power | 总功率 |
| dust collector / DP (differential pressure) | 除尘器 / 压差 |
| cooling water temperature / flow | 冷却水温度 / 冷却水流量 |
| nitrogen pressure | 氮气压力 |
| flow (rate) | 流量 |
| level (utility vessel, spoken) | 液位 |
| shipping truck / receiving truck | 发运卡车 / 接收卡车 |
| ground speed | 行驶速度 |
| articulation / steering | 铰接角度 / 转向 |
| motion phase | 运动阶段 |
| transfer interlock | 转运联锁 |
| stop reason (vehicle) | 停车原因 |
| inventory | 库存 |
| material in process | 在制物料 |
| material balance error | 物料账误差 |

批次②（布局规划组）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| layout planning | 布局规划 |
| layout | 布局 |
| current layout / proposed layout | 当前方案 / 提议方案 |
| proposal | 方案 |
| capture (current layout) | 采集 |
| active seconds | 作业秒数 |
| material seconds | 物料秒数 |
| before apply / after apply / current run | 应用前 / 应用后 / 当前运行 |
| operating controls | 运行控制参数 |
| observed operating results / observed comparison | 观测运行结果 / 观测对比 |
| authored layout | 原始布局 |
| material clock / production clock | 物料时钟 / 生产时钟 |
| staging / staging handling | 暂存区 / 暂存区搬运 |
| pallet space / return pallets | 托盘位 / 回空托盘 |
| shipping (dock label，id 本身不译) | 发运 |
| clearance (vehicle) / clearance conflict / clearance check | 净空 / 净空冲突 / 净空检查 |
| swept (-path) check | 扫掠检查 |
| clearance corridor / vehicle corridor | 净空走廊 / 车辆走廊 |
| pedestrian access / protected access | 人行通道 / 受保护通道 |
| operating floor | 作业地面 |
| apron (dock) | 场坪 |
| turning envelope | 转弯包络 |
| pose / pickup / dropoff / approach | 位姿 / 取货 / 放货 / 接近 |
| travel waypoint | 行驶航点 |
| forklift loop | 叉车环线 |
| slow zone / slow-zone delay | 慢速区 / 慢速区延误 |
| weighted cost | 加权成本 |
| trips/hr / visits/hr / m/hr | 趟/时 / 次/时 / 米/时 |
| queue / buffer use | 队列 / 缓冲占用 |
| intake / pneumatic / finished (transport legs) | 进料 / 气力输送 / 成品 |
| rendered / modeled / unresolved (path provenance) | 已渲染 / 已建模 / 未解析 |
| site safety hold | 厂区安全扣留 |
| evacuation certification | 疏散认证 |

批次③（生产流程组）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| shift review | 班次回顾 |
| pace (control) | 节奏（标准节奏 / 自定义节奏） |
| shift close / at close | 结班 |
| tour | 导览 |
| production / delivery programme | 生产计划 / 交付计划 |
| commitment (customer) | 承诺 |
| active (order / commitment / incident / constraint) | 活动（活动订单 / 活动承诺 / 活动事件 / 活动约束） |
| open (commitment / work order) | 未结 |
| rush (order / customer) | 加急（加急单 / 加急客户） |
| bulk order | 散装订单 |
| deadline / due | 期限 / 到期 |
| late penalty | 迟交罚金 |
| delivery / delivered on time / late | 交付 / 按时交付 / 迟交 |
| carry over (risk) into the next shift | 结转（至下一班次） |
| grade / cap the grade at | 等级 / 等级封顶为 |
| net contribution | 净贡献 |
| quality failure | 质量失败 |
| high-severity controls | 高严重度控制 |
| recovery challenge | 恢复挑战 |
| scheduler | 排程器 |
| incident / dispatch / challenge controller | 事件控制器 / 发运控制器 / 挑战控制器 |
| control layer | 控制层 |
| production execution | 生产执行 |
| mitigation (apply mitigation) | 缓解（实施缓解） |
| residual effects | 残余影响 |
| simulated minutes | 模拟分钟 |
| storage capacity | 仓储容量 |
| recipe feed / feedstock | 配方进料 / 原料 |
| shipping bay | 发运装卸区 |
| shipping manifest | 发运运单 |
| QC lab | 质检实验室 |
| trip point | 跳闸值 |
| power sag | 电压骤降 |
| strong white bread flour / fine corn semolina / community all-purpose flour | 高筋面包粉 / 细玉米粗粒粉 / 社区多用途面粉 |
| scheduled grain | 计划谷物 |
| operations workspace | 运行工作区 |
| layout planner | 布局规划器 |
| adviser | 顾问 |
| forecast | 预测 |
| handoff experiment | 交接实验 |
| member review | 成员评审 |
| cooperative workplace (step) | 工作场所协作（步骤） |

批次③（生产数据组）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| production target | 产量目标 |
| process efficiency | 工艺效率 |
| quality interlock | 质量联锁 |
| game hour | 游戏小时 |

批次③（Autonomy + Safety 组）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| e-stop / emergency stop | 紧急停机 |
| evacuation drill / fire drill | 疏散演练 |
| egress verification | 疏散验证 |
| egress verification drill | 疏散验证演练 |
| service egress | 疏散出口 |
| interlock（泛称；安全/转运/质量联锁见上） | 联锁 |
| crisis interlock / drill interlock | 危机联锁 / 演练联锁 |
| interlock active | 联锁生效中 |
| facility emergency stop / facility emergency interlock | 设施紧急停机 / 设施紧急联锁 |
| duct fire | 管道火灾 |
| to ground (forklifts) | 停运（叉车） |
| emergency response | 应急响应 |
| Safety panel / Safety workspace | 安全面板 / 安全工作区 |
| safety metrics / safety analytics / safety stats | 安全指标 / 安全分析 / 安全统计 |
| safety event stage: active / acknowledged / cleared | 活动中 / 已确认 / 已清除 |
| readiness index | 就绪指数 |
| closed-loop coordination | 闭环协同 |
| vehicle orchestration | 车辆编排 |
| route conflict | 路线冲突 |
| reservation (vehicle) | 预留 |
| route corner / route leg | 路线拐点 / 路段 |
| dock status: arriving / loading / departing / clear | 到达中 / 装载中 / 离开中 / 空闲 |
| look-ahead (distance) | 前瞻（前瞻距离） |
| vehicle detection | 车辆检测 |
| forklift spacing | 叉车间距 |
| speed zone (rate) | 慢速区（速率；沿用布局组 slow zone） |
| heat map / hotspot | 热力图 / 热点 |
| last hour / this session | 最近一小时 / 本次会话 |
| clean record | 无事故记录 |
| simulated hour | 模拟小时 |
| safety zones: Central Area / North Loading / South Loading / West Corridor / East Corridor / Packing Zone | 中心区 / 北装载区 / 南装载区 / 西走廊 / 东走廊 / 包装区 |

批次③（新手引导组）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| shift debrief（与 shift review 同指；结班消息引用同一术语） | 班次回顾 |
| guided delivery | 引导式交付（批次① GameInterface 已用，此处入表） |
| follow the grain | 跟随谷物 |
| working agreement | 工作协议 |
| handoff working agreement / handoff review | 交接工作协议 / 交接评审 |
| linked working agreement / linked cooperative campaign | 关联工作协议 / 关联合作社加工季 |
| full customer commitment | 全额客户承诺 |
| agreed deferral | 约定延期 |
| owed recovery / extra duty | 应补休息 / 额外勤务 |
| credits (illustrative workplace currency) | 点数 |
| leave this season | 离开本加工季 |
| receipt (delivery / shipping) | 回执 |
| loads (truck trip count) | 车 |
| inspect / inspection (guided delivery) | 检查 |
| AI agent | AI 代理 |
| orbit camera | 环绕相机 |
| first-person mode | 第一人称模式 |
| D-pad / W A S D / Q / E / ESC / V / P（键名） | 保持半角原文 |
| provisional grade | 暂定等级 |
| scheduled recipe | 计划配方 |
| controlled restart（MachineInspector 已用，此处补表） | 受控重启 |
| dispatch service (repair, MachineInspector 已用) | 派发维修 |
| QC（泛称） | 质检 |
| delivery status: blocked / met / shortfall / pending | 受阻 / 达成 / 未达目标 / 待定 |
| agreement status: honoured / incomplete / pending | 已履行 / 未完成 / 待定 |
| challenge status: active / completed / failed / abandoned | 进行中 / 已完成 / 未达成 / 已放弃 |
| workplace roles: Packing / Quality / Maintenance / Coordinator | 包装 / 质量 / 维护 / 协调 |

批次④（批次③终审交接）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| incoming grain | 来粮 |
| active assets | 在运设备 |
| contamination alert | 污染警报（环境/质量事件；报警管理alarm 另词） |
| outbound load | 外运货物（外运装载/外发货物 已统一为此形） |
| execution stage（MobilePanel stage* chips）: planning / milling / quality hold / ready to load / loading / ready to dispatch / dispatched / fulfilled | 规划 / 加工 / 质量扣留 / 待装载 / 装载中 / 待发运 / 已发运 / 已完成（执行阶段 milling=加工，别于批次② fulfillment stage 的制粉） |
| predictive maintenance | 预测性维护 |
| autonomy（名词，系统名）/ autonomous（形容词性修饰） | 自治（磨坊自治、双边自治系统）/ 自主（自主物流、自主控制层、自主执行） |

批次④（车间/工作场所组，Task 2 WorkplaceLab）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| workplace laboratory / workplace sections | 车间实验室 / 车间分区 |
| Living Cooperative（车间场景名） | 活力合作社 |
| workshop（模式）/ manual workshop | 工作坊 / 手动工作坊 |
| pilot / pilot preparation / pilot charter / pilot draft | 试点 / 试点准备 / 试点章程 / 试点草案 |
| playable shift / teaching pace | 可玩班次 / 教学节奏 |
| workplace 分区标签：Handoff / Shift / Practices / Agreement & Voices / Review / Experiment | 交接 / 班次 / 实践 / 协议/声音 / 回顾 / 实验 |
| experiment phase: idle / deliberating / active / review | 空闲 / 审议中 / 进行中 / 回顾中 |
| objection kind: rest / burden / privacy / authority | 休息 / 负担 / 隐私 / 职权 |
| objection status: open / resolved | 未决 / 已解决（未结 留给承诺/工单） |
| surplus destination: members / reserve / community | 成员 / 留存 / 社区 |
| pressure decision: keep-target / renegotiate / inspect / skip-inspection / protect-refusal / penalize-refusal | 维持目标 / 重新协商 / 检查 / 跳过检查 / 保护拒绝 / 惩罚拒绝 |
| workplace task: Packing / Pallet checks / Quality release / Sampling / Maintenance planning / Coordination | 包装 / 托盘检查 / 质量放行 / 取样 / 维护计划 / 协调 |
| BAS practice: open information / qualified work choice / protected rest / voice and remedy / team budget / shared surplus / member governance | 信息公开 / 合格工作选择 / 受保护休息 / 发言与补救 / 团队预算 / 盈余共享 / 成员治理 |
| cover / optional cover | 顶岗 / 可选顶岗 |
| recovery / delivered recovery / outstanding recovery | 补休 / 已交付补休 / 未完成的补休（应补休息 沿用批次③） |
| extra duty / extra work | 额外勤务 / 额外工作 |
| authored objection / objection author / raiser | 署名异议 / 异议提出人 / 提出人 |
| challenge（动词，质疑提案）/ challengeable | 质疑 / 可质疑（挑战状态名词 挑战 沿用批次③） |
| proposal（车间治理语境） | 提案（布局规划 proposal=方案 另词） |
| remedy / repair | 补救 / 修复 |
| understanding check / policy vote / policy yes / policy no | 理解检查 / 政策表决 / 政策赞成 / 政策反对 |
| preference sharing / shared preference | 偏好共享 / 已共享偏好 |
| work choice / individual work choice / team work choice | 工作选择 / 个人工作选择 / 团队工作选择 |
| worker decisions / directed assignments | 工人决策 / 指派任务 |
| shared governance / consultative / team consent / member vote | 共享治理 / 咨询式 / 团队同意 / 成员表决 |
| AI authority / advice only / bounded execution / bounded trials | AI 决策权 / 仅建议 / 有界执行 / 有界试验 |
| modular practices / adoption profile | 模块化实践 / 采纳方案 |
| earned pay / wages / compensation / budget / improvement (spend) | 已挣报酬 / 工资 / 补偿 / 预算 / 改善 |
| volunteer (qualified) | 志愿者 |
| plant capacity multiplier / active plant capacity multiplier | 工厂产能乘数 / 在运工厂产能乘数 |
| installment | 分期 |
| qualified dispatch credit | 合格发运计入 |
| causal receipt / execution receipt / relationship receipt | 因果回执 / 执行回执 / 关系回执 |
| relationship record / relationship moments / relationship evidence | 关系记录 / 关系时刻 / 关系证据 |
| learning review | 学习回顾 |
| member voter / chair candidate / chair ballot / not elected | 成员投票人 / 主持人候选人 / 主持人表决 / 未当选 |
| operating surplus / surplus destination | 运营盈余 / 盈余去向 |
| distribute / retain / allocate（盈余） | 均分 / 留存 / 拨给 |
| arm / counterfactual（预测对比） | 试验组 / 反事实 |
| permitted / prohibited | 允许 / 禁止 |
| scenario seed / experiment seed / same-seed comparison | 场景种子 / 实验种子 / 同种子对比 |
| rehearsal / modeled (minutes) | 预演 / 模拟 |
| synthetic（role / scenario） | 虚拟（角色/场景；simulated=模拟 另词） |
| local scenario | 本地场景 |
| charter（车间试点/章程） | 章程 |
| live plant（control） | 真实工厂（控制） |
| agent runtime | 智能体运行时 |
| AI mind | AI 心智 |
| grant（consent，expired） | 授权 |

批次③终审接受项与已知计量假象（check-zh-progress 读数口径）：

- 接受项：实验室 partial-carry（个别串作 实验室，全称 质检实验室，defensible）；报警阈值 soft-orphan（已入表，暂无渲染串沿用，钉后续批次）；千克 a11y（PlayableShift truckLoadValueText 无障碍朗读串拼 千克，与可见 kg 并存，defensible）。
- 计量假象：`i18n.test.ts` 两个 `@ts-expect-error` 残缺 fixture 目录是编译期测试本体，其键永久计入“未翻译”；`websocketUrl`（SCADA）等 zh===en 为合法同文键。ZoneLabels 补完后，全局“未翻译”仅剩 fixture 残缺键与 zh===en 合法同文键。

zh 风格规则（与计划 Global Constraints 一致）：
1. `{name}` 占位符原样保留；2. 函数消息签名不变；3. 全角标点、
半角占位符与单位；4. 中英之间加半角空格；5. 数字半角；6. 引号用 “”（GB/T 15834），不用「」。
永不翻译清单沿用上文（点位号、设备编号、专有名词、歌词、涂装文字、
agent 协议、日志），zh 侧同样遵守。
