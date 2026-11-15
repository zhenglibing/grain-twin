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
| bounded authority (adviser decision power) | 有界决策权（职权 留给 objection-kind 异议轨道） |
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

批次④（车间仿真组，Task 3 bilateralWorkplace + workplaceCampaign）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| advisory mind | AI 心智（同 AI mind，WorkplaceLab 钉词） |
| arrangement（改善安排） | 安排 |
| canonical arrangement | 预设安排 |
| steady plan / steady pacing / steady fallback | 稳定方案 / 稳定节奏 / 回退到稳定方案 |
| resequence | 重新排序 |
| rush through rest | 挤占休息赶工（rush=加急 沿用批次③） |
| rest floor | 休息底线 |
| waive（rest / boundary） | 豁免 |
| close vs resolve（objection） | 了结 vs 解决（只有提出人能了结；resolve=解决 沿用钉词） |
| override（blind override） | 越权 |
| facilitated terms | 促成的条款 |
| whole-line pacing | 全线节奏 |
| released stock / held stock | 已放行库存 / 扣留库存 |
| conditional departure | 条件离场量 |
| earmark | 专用预留 |
| projection | 推演（区别于 forecast 预测） |
| replaceable ballot | 可更改的表决 |
| authored（responses / role-play） | 预先编写 |
| episode / planning episode | 剧情（WorkplaceLab 已用）/ 规划剧情 |
| withdrawal（人退出）/ withdraw（同意/顶岗撤回） | 退出 / 撤回 |
| repayment check | 偿还检查（理解检查组：拒绝/隐私/偿还） |
| qualification access | 资质准入 |
| settle / settled（义务与钱款） | 结清 / 已结清 |
| retained-record limit | 保留记录上限 |
| teaching campaign | 教学加工季 |
| disputed sample | 争议样品 |
| mission evidence: current / stale / quality-failed / missing | 当前 / 已过期 / 质量未通过 / 缺失 |
| pressure card | 压力卡（WorkplaceLab 已用，此处入表） |

批次④（车间 widgets A，Task 4 ImprovementPanel + PackingEvidence + ProcessInspectionCard）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| handoff experiment / handoff shift | 交接实验 / 交接班次 |
| handoff mode / handoff governance / handoff remedies / handoff learning review | 交接模式 / 交接治理 / 交接补救 / 交接学习回顾 |
| packing floor | 包装区 |
| plant clock（hold） | 工厂时钟（暂停） |
| funded / funding | 注资 |
| member review | 成员评审 |
| review verdict: adopt / amend / stop | 采纳 / 调整 / 停止 |
| challenge kind: forecast / cost / qualification | 预测 / 成本 / 资质 |
| challenge author / challenge subject | 质疑提出人 / 质疑主题 |
| proposal id（workplaceImprovement）: briefing / buffer | 简报 / 缓冲 |
| ballot status: pending / approved / declined | 待定 / 已批准 / 已拒绝 |
| pacing hold / paid briefing / briefing minutes | 节奏暂停 / 带薪简报 / 简报分钟 |
| capacity bonus | 产能加成 |
| conditional bound / departure bound / scenario bounds | 条件界限 / 离场界限 / 场景界限 |
| collection / collection receipt | 提货 / 提货回执（来粮=incoming grain 另词，见 incoming grain 行） |
| matched packing / matched input | 配对包装 / 配对输入 |
| isolated copies | 隔离副本 |
| flow engine | 物料流引擎 |
| pressure episode / ordinary handoff | 压力剧情 / 常规交接 |
| rehearsal response author | 预演回应提出人 |
| plant-grounded | 基于工厂的 |
| eligible dispatch | 符合条件的发运 |
| material clock / material session / input receipt | 物料时钟 / 物料会话 / 输入回执 |
| workplace minutes / plant seconds | 车间分钟 / 工厂秒 |
| quality boundary | 质量界限 |
| packing prediction / quality prediction | 包装预测 / 质量预测 |
| conduct debrief / public conduct receipts | 行为复盘 / 公开行为回执 |
| 打卡教学件（ProcessInspectionCard）: paired rollers / roller gap / particle size | 成对磨辊 / 辊隙 / 粒度 |
| sieve deck / sifter outlets | 筛格 / 平筛出料口 |
| buffer hopper / metering gate / weighing hopper | 缓冲料斗 / 计量闸门 / 称量斗 |
| filling station / filling spout / spout | 装袋工位 / 装袋出料嘴 / 出料嘴 |
| mill outlet / packer outlet / silo outlet / discharge | 磨辊机出料口 / 包装线出料口 / 筒仓出料口 / 卸料 |
| grain level | 谷物料位（level 料位 沿用批次①） |
| nesting box / perch / gentle collection | 产蛋箱 / 栖架 / 轻柔拾蛋 |
| grain（泛称，教学件）/ milled material | 谷物 / 研磨后的物料 |

批次④（车间 widgets B，Task 5 Participation + PressureChapter + Replay + Negotiation + Companion + CampaignArchive）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| decision ownership | 决策归属 |
| facilitator（设备传递/分别回合语境）/ facilitated separate turns / facilitator handover | 促成人 / 促成的分别回合 / 促成交接（主持人 留给 chair） |
| solo role-play / participant turn / role turn / turn check | 单人角色扮演 / 参与者回合 / 角色回合 / 回合检查 |
| interaction mode / mandate check | 交互模式 / 授权检查 |
| synthetic rehearsal（共用设备） | 虚拟预演（synthetic=虚拟 沿用 Task 2） |
| season adoption route / adoption degree | 加工季采纳路线 / 采纳程度 |
| individual fairness receipts / fairness: {role} | 个人公平回执 / 公平：{role} |
| member distribution / wages reserved / compensation reserved | 成员分配 / 已预留工资 / 已预留补偿 |
| optional duty / volunteered / declined / no decision（勤务状态） | 可选勤务 / 已志愿 / 已拒绝 / 未决策 |
| guided bilateral demonstration / automatic fictional demonstration | 引导式双边演示 / 自动虚构演示 |
| ten-minute guide / skip guide | 十分钟指南 / 跳过指南 |
| evidence present / available to explore（指南步骤状态） | 证据已具备 / 可前往探索 |
| public cooperative receipt | 公开合作社回执 |
| autonomous cooperative season / take over | 自主合作社加工季 / 接管（autonomous 形容词=自主 沿用钉词） |
| pressure chapter / a working agreement under pressure | 压力章节 / 压力之下的工作协议 |
| offer（周四协商的条款报价）/ revised offers / revised terms / fresh offer | 报价 / 修订后的报价 / 修订条款 / 新报价 |
| acknowledged / awaiting current answers（顾问边界） | 已确认 / 待答当前问题 |
| open（objection 陈述行前缀） | 未决：{statement}（open=未决 沿用钉词） |
| protected inspection（five-minute inspection） | 受保护检查（质量启动五分钟检查） |
| restate the terms / restate protected terms | 重申条款 / 重申受保护条款（沿用 Task 2） |
| account for what was kept / settle remaining obligations | 交代保留的内容 / 结清剩余义务（settle=结清 沿用 Task 3） |
| deliver the agreement / earn a fresh agreement | 履行协议 / 挣得新协议 |
| governance rule / member majority | 治理规则 / 成员多数 |
| closing charter / charter axes: work-choice autonomy（directed/individual/team）、governance（consultative/team-consent/member-vote）、AI authority（advice/bounded） | 收尾章程 / 指派、个人、团队；咨询式、团队同意、成员表决；仅建议、有界执行（值沿用 Task 2 钉词） |
| matched plant replay / actual run | 配对工厂回放（matched=配对 沿用 Task 4）/ 实际运行 |
| replay checkpoint / rewind / capture（plant） | 回放检查点 / 倒回 / 捕获 |
| horizon / unequal horizons | 时间跨度 / 时间跨度不等 |
| plant accounts, pounds sterling | 工厂账目（英镑） |
| conservation / genealogy（回放对账）/ material error | 守恒 / 谱系 / 物料误差 |
| dispatch manifest | 发运运单（manifest=运单 沿用基线） |
| redacted（report / review） | 脱敏 |
| guided replay / replay learning review | 引导式回放 / 回放学习回顾 |
| refusal respected / not recorded as respected | 受到尊重 / 未记录为受到尊重 |
| frame-driven vehicle trajectories | 帧驱动的车辆轨迹 |
| Thursday negotiation / negotiation sequence | 周四协商 / 协商顺序 |
| adviser proposal / adviser holds execution | 顾问提案 / 顾问建议暂缓执行 |
| reused consent / adviser correction | 被复用的同意 / 顾问更正 |
| physical work / repayment（negotiation stage） | 实际工作 / 偿还（repayment=偿还 沿用 Task 3） |
| reversible practice proposal / rollback | 可逆的实践提案 / 回滚 |
| planning draft / planning-only | 规划草案 / 仅规划 |
| stop on | 停止条件 |
| not offered（word* 展示词） | 未提供（wordOpen/wordResolved 等沿用钉词） |
| working agreement companion | 工作协议伙伴 |
| frozen conditional departure bound | 冻结的条件离场界限（条件离场界限 沿用 Task 3/4 词根） |
| future authority / bounded agreement（companion） | 未来的授权 / 有界协议 |
| retained compensation paid / retained recovery | 已付保留补偿 / 保留补休 |
| teaching output | 教学产出 |
| completed workplace campaigns | 已完成的加工季 |
| archive review / retained campaign reviews | 归档回顾 / 保留的加工季回顾 |
| leave season / seasons left early / left early at shift {n} of 3 | 离开加工季 / 提前离开的加工季 / 在第 {n}/3 个班次提前离开 |
| follow-on credit stopped | 计入已停止（follow-on 沿用 Task 2 后续计入语境） |
| evidence reason：quality threshold not met / record no longer matches the plant / cancelled or off the books | 未通过其质量阈值 / 记录不再与工厂相符 / 已被取消或不在订单簿上 |

批次④（车间仿真 B，Task 6 workplaceImprovement + workplaceAdvice + workplaceFairness + workplaceStore）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| quality review（合格评审语境） | 质量评审 |
| conveyor | 输送机 |
| resume pace / resume speed（9 至 3600x） | 恢复节奏 / 恢复速度 |
| arrivals / dock movements（advice 假设） | 来车 / 装卸区移动 |
| ordinary pacing / ordinary work / ordinary pay | 常规节奏 / 常规工作 / 常规报酬 |
| worker proposal / carried cash / wage reserve / purchase | 工人提案 / 结转现金 / 工资预留 / 采购 |
| staging arrangement / packing buffer / handoff sequence | 暂存安排 / 包装缓冲 / 交接顺序 |
| defer / deferral（试验与交付延期） | 延期 |
| smaller delivery | 更小的交付 |
| qualifying dispatch / credited / still owed | 符合条件的发运 / 已计入 / 仍欠 |
| teaching counter / customer receipt / prior forecast / causal effect | 教学计数 / 客户回执 / 事前预测 / 因果效应 |
| matched comparison | 配对比较（matched=配对 沿用 Task 4） |
| dispatch release（状态：open / held / unknown） | 发运放行（开放 / 扣留 / 未知） |
| loaded / load capacity / collection timing（卡车） | 已装载 / 装载能力 / 提货时间 |
| shared limit / supply / quality dispositions | 共同限制 / 供给 / 质量处置 |
| mandate / bounded mandate（fairness beats；mandate check 授权检查 沿用 Task 5） | 授权 / 有界授权（grant 亦译 授权，按上下文区分） |
| protected no | 受保护的拒绝 |
| defensible shared plan | 站得住脚的共同方案 |
| disclosure（optional）/ scripted adviser dialogue / Thursday refusal | 披露 / 预先编写的顾问对话 / 周四的拒绝 |
| bounded work / agreed work time | 有界工作 / 约定的工时 |
| money reserves / model time / recovery debt | 钱款预留 / 模型时间 / 补休债务 |
| safe reload / reload rehearsal | 安全重新加载 / 重新加载预演 |
| turn ownership / identity security | 回合归属 / 身份安全 |
| closing field / burden receipts / public role receipts | 收尾字段 / 负担回执 / 公开角色回执 |
| elapsed / agreement horizon | 流逝时长 / 协议时间跨度（horizon=时间跨度 沿用 Task 5） |
| balance fact（fairness caveat） | 物料账事实 |
| facilitator setup / settlement / activation | 促成人设置 / 促成人结清 / 促成人激活 |
| participant dispatch（store 指令分发语境） | 参与者指令分发 |
| untouched scenario / open scenario | 未动过的场景 / 已开启的场景 |
| quality-qualified（commitment / dispatch evidence） | 质量合格的（承诺 / 发运证据） |
| fresh role decisions（nextConfirm 引用 ImprovementPanel 既有标签） | 新的角色决定（沿用 Task 4） |
| evidenceEndedAfter / evidenceCompleted（evidenceHorizon 前缀） | 结束于 / 已完成 |
| fictional | 虚构（synthetic=虚拟、simulated=模拟 另词） |

批次④（知识库/AI 组，Task 7 knowledgeStore + AISettingsModal + AICommandCenter + AgentCockpit）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| knowledge base（Datalinks 藏书；Datalinks=数据链接 沿用批次①） | 知识库（Task 1 预钉，此处落表） |
| agent cockpit（组件；Task 1 预钉，此处落表） | 智能体座舱 |
| autonomous operations library | 自主运行资料库 |
| operating principles / world and process lineage / control systems / operational cases（知识库分类） | 运行原则 / 世界与过程谱系 / 控制系统 / 运行案例 |
| loading-screen principle authors（MillOS control/visual/architecture/autonomy/SCADA/logistics principle） | MillOS 控制/视觉/架构/自治/SCADA/物流原则 |
| unified digital twin / one continuous site | 统一数字孪生 / 连续统一的厂区 |
| autonomous material flow / causal material flow | 自主物料流 / 因果物料流 |
| SCADA alarm lifecycle / alarm state is evidence | SCADA 报警生命周期 / 报警状态即证据 |
| predictive maintenance loop / predictive alert | 预测性维护循环 / 预测性警报（alert=警报，alarm=报警 分立） |
| batch quality and recall / plant-wide dispatch check | 批次质量与召回 / 厂级发运检查 |
| autonomous logistics choreography / legible yard motion | 自主物流编排 / 清晰可读的场院运动 |
| environment and celestial cycle / coherent backdrop | 环境与天体循环 / 协调一致的背景 |
| bottlenecks and buffers / limiting stage | 瓶颈与缓冲 / 制约工段 |
| energy, waste and useful output / make the tradeoff visible | 能耗、浪费与有效产出 / 让权衡可见 |
| the mill and its neighbours / a delivery has a destination | 磨坊与邻里 / 交付自有去向 |
| depth and material policy / stable surfaces | 深度与材质策略 / 稳定的表面 |
| autonomous evidence and replay / legible autonomy | 自主证据与回放 / 清晰可读的自治 |
| genealogy balance | 谱系账（material balance=物料账 沿用批次①） |
| grist（已在产线内的在磨物料） | 在磨物料 |
| culvert / stream banks | 涵洞 / 溪流沿岸 |
| village bakery / village residents / school-meals / pasta commitments | 乡村面包店 / 村庄居民 / 学生餐 / 意面承诺 |
| cobblestone / albedo / decal / polygon offset | 鹅卵石 / 反照率 / 贴花 / 多边形偏移（首次出现附英文原词） |
| see-in-action 指引（Overview workspace / SCADA Process workspace / SCADA utilities / Safety egress verification / Shipping yard） | 概览工作区 / SCADA 过程工作区 / SCADA 公用工程 / 安全疏散验证 / 发运堆场 |
| AI Command Centre（面板显示名 AI 伙伴，见 Dock/ContextSidebar） | AI 伙伴面板 |
| decision replay | 决策回放（Task 9 DecisionReplay 沿用） |
| AI settings / AI backend / AI operating mode | AI 设置 / AI 后端 / AI 运行模式 |
| BYOK (bring your own key) | 用户自备密钥（行文可简作 自备密钥；cost cap 标签作 自备密钥（BYOK）） |
| local neural core | 本地神经核心 |
| local companion（本地 ChatGPT 登录伴跑程序） | 本地伴侣程序 |
| lights-out（端侧 AI 自处置模式） | 黑灯模式 |
| fast routing lane | 快速路由通道 |
| ChatGPT plan / plan model / ChatGPT account | ChatGPT 计划 / 计划模型 / ChatGPT 账户 |
| strategic requests / strategic insights / tactical | 战略请求 / 战略洞察 / 战术 |
| fast rules / fast rules layer | 快速规则 / 快速规则层 |
| heuristic / hybrid / local only / LLM only（AI 模式） | 启发式 / 混合 / 仅本地 / 仅 LLM |
| cost cap / session cost cap / spending limit / inference key / key vault | 费用上限 / 会话费用上限 / 消费限额 / 推理密钥 / 密钥保管库 |
| AI visualization overlays: cascade / strategic overlay / production target / energy dashboard / multi-objective / API cost tracker / VCL context | 级联可视化 / 战略覆盖层 / 产量目标 / 能源仪表盘 / 多目标 / API 费用跟踪器 / VCL 上下文 |
| AI Partner（AICommandCenter 标题，沿用批次① AI 伙伴） | AI 伙伴 |
| decision type: coordination / optimization / prediction / maintenance / safety | 协调 / 优化 / 预测 / 维护 / 安全 |
| decision response: accepted / modified / rejected / deferred / automatic | 已接受 / 已修改 / 已拒绝 / 已推迟 / 自动 |
| agent cockpit 用词：revision / authority / scoped commands / grant | 修订版 / 决策权（AI 决策权 沿用 Task 2）/ 限定范围指令 / 授权（沿用 Task 2） |
| situation brief / state observed / causal workspace | 态势简报 / 已观测状态 / 因果工作区 |
| exception queue / operational exception | 异常队列 / 运行异常 |
| preview effects and authority / approve exact preview and commit / commit preview | 预览影响与决策权 / 批准完全一致的预览并执行 / 执行预览 |
| execution receipt（沿用 Task 2）/ receipt issued | 执行回执 / 回执已签发 |
| resource cost class: trivial / bounded / intensive / local / interactive / long-running | 轻量 / 有界 / 密集 / 本地 / 交互式 / 长时 |
| precondition / invariant / changed domain | 前置条件 / 不变量 / 已变更域 |

批次④（Task 8 AI 客户端 + VCL 调试 + 维护/能源面板）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| Jev advisory / Jev incident routing / incident text | Jev 建议 / Jev 事件路由 / 事件文本（Jev 专名不译） |
| decision model / suggested queue | 决策模型 / 建议队列 |
| on-device model（沿用 Task 7 端侧用法） | 端侧模型 |
| provider（AI 服务商）/ direct provider keys | 提供商 / 直连提供商密钥 |
| usage data / charges / verifiable charge | 用量数据 / 扣费 / 可核实扣费 |
| rate limit / rate limiting | 限流（已触发限流 / 正在限流） |
| lifetime spend-limited inference key（Task 7 已用，此处落表） | 终身消费限额推理密钥（把自备密钥用量计入终身消费限额） |
| VCL / VCP（线协议名；编码串与字形永不翻译） | 保持原文（VCL 编码出错 可译说明文字；token 半角保留） |
| size reduction / tokens saved / emoji dictionary | 体积缩减 / 已节省 token / Emoji 字典 |
| load levels（VCL 字形档位） | 负载档位 |
| predictive alert（Task 7 已钉预测性警报，此处沿用） | 预测性警报 |
| parts inventory / active faults | 备件库存 / 活动故障 |
| scheduled maintenance / schedule（维护语境动词） | 计划维护 / 安排（排程器 留给生产排程） |
| model confidence / estimated window | 模型置信度 / 预计时间窗 |
| failure type: mechanical / electrical / overheating / vibration | 机械故障 / 电气故障 / 过热 / 振动故障 |
| downtime / verify repair | 停机时长 / 验证维修 |
| service minimum（磨损维护下限） | 维护下限 |
| energy dashboard（Task 7 已钉能源仪表盘，此处沿用） | 能源仪表盘 |
| peak / off-peak（电价时段） | 峰时 / 谷时 |
| demand（电力需量）/ load factor / HVAC | 需量 / 负载率 / 暖通空调 |
| emergency mode / base systems / facility base load | 紧急模式 / 基础系统 / 设施基础负荷 |
| energy modifiers / penalty | 能耗修正项 / 罚值（+10%（3） 括号全角） |
| simulation factor / scenario carbon / simulation cost | 模拟系数 / 场景碳排放 / 模拟成本（kg CO₂/kWh 半角） |

批次④（Task 9 ui 杂项 + 键盘 + 移动端）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| keyboard shortcuts | 键盘快捷键 |
| camera movement / camera presets / reset camera view / rotate camera | 相机移动 / 相机预设 / 重置相机视角 / 旋转相机 |
| orbit view / showcase orbit | 环绕视角 / 展示环绕（环绕相机 沿用批次③） |
| blueprint mode | 蓝图模式（墙体透视） |
| strafe left / strafe right | 向左平移 / 向右平移 |
| sprint | 疾跑（FirstPersonController 沿用；加速移动 / 疾跑 为完整提示） |
| safety zones (overlay toggle) | 安全区域（批次③ safety zones 区域名另指具体分区） |
| heat map (toggle) | 热力图（安全分析 事件热力图 沿用） |
| multi-objective dashboard | 多目标仪表盘（Task 7 多目标 + 能源仪表盘 词根） |
| cost estimation overlay | 费用估算覆盖层（Task 7 API 费用跟踪器 的开关指向同一面板） |
| GPS mini-map | GPS 小地图 |
| forklift emergency stop / release | 叉车紧急停机 / 解除 |
| line rate | 产线速率 |
| decision status: pending / in_progress / completed / superseded | 待定 / 进行中 / 已完成 / 已取代 |
| decision evidence source: simulation / scada / control / schedule / prediction | 模拟 / SCADA / 控制 / 排程 / 预测 |
| decision evidence quality: good / uncertain / stale / bad | 良好 / 不确定 / 过期 / 较差（批次② spoken aria 同词） |
| decision measurements: throughput / efficiency / uptime / quality / totalBagsProduced | 产量 / 效率 / 运行率 / 质量 / 生产总袋数（运行率 沿用 OverviewPanel） |
| affected machine / affected systems / affected equipment | 受影响设备 / 受影响系统 / 受影响设施（设备=machine、设施=asset 沿用批次②） |
| evidence snapshot / observation / measured outcome | 证据快照 / 观测项 / 实测结果 |
| BYOK API usage | BYOK API 用量 |
| USD amounts（覆盖层计费文案） | USD {amount}（行文作 美元上限） |
| input / output tokens | 输入 token / 输出 token（token 半角保留） |
| on-device inference / on-device AI record | 端侧推理 / 端侧 AI 记录 |
| no route / belongs with {expected}（Jev 队列路由） | 无路由 / 应归入 {expected}（队列名英文保留，冻结评分项） |
| left raised / held at a safety boundary | 保持已触发 / 因安全边界停手（incident phase raised=已触发 沿用批次②） |
| weather warning: storm / rain / wind / snow / clear | 风暴警报 / 降雨警报 / 大风警报 / 降雪警报 / 天气警报（alert=警报，alarm=报警 分立） |
| severity: low / medium / high | 严重程度：低 / 中 / 高 |
| replay mode / playback timeline / playback speed | 回放模式 / 回放时间线 / 回放速度 |
| speed zones (ZoneCustomizationPanel) | 慢速区（批次③ speed zone 同词） |
| utility vessels | 公用工程储罐 |
| execution route / route {source} to {product} | 执行路线 / {source} 至 {product} |
| operations campaign (MobilePanel) | 运行加工季（operations=运行 沿用批次③；campaign=加工季 沿用批次②） |
| autonomous readiness | 自主就绪度（autonomous 形容词=自主；就绪指数 沿用批次③） |
| open incidents / outbound (chip) / active assets | 未结事件 / 外运 / 在运设备（批次④钉词） |
| rotate to landscape | 旋转到横屏 |
| walk mode / look mode（DPad/移动控制） | 行走模式 / 环视模式（环视 沿用 FirstPersonController） |
| overall objective score / trade-off | 目标总分 / 权衡（让权衡可见 沿用 Task 7） |
| AI insight / AI confidence / priority {number} | AI 洞察 / AI 置信度 / 优先级 {number} |

批次④（Task 10 短尾扫尾：game/* + achievements + breakdownStore + HolographicDisplays + BuildCacheDiagnostics + MillOSMusicPlayer + knowledge/* + utils/* + App/store/About/ErrorBoundary + 小组件）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| PA system / PA tag / (+{count} queued) | 广播系统 / 广播 / （+{count} 条待播）（PA=广播 沿用批次①） |
| fleet map / mini-map | 车队地图 / 小地图（GPS 小地图 沿用 Task 9） |
| checkweigher / reject gate | 检重秤 / 剔除闸 |
| extraction load | 提取负荷（辊隙 沿用 Task 4） |
| geofence | 电子围栏 |
| dust extraction | 除尘（除尘器 沿用批次②） |
| solar loading | 太阳得热 |
| daylight control / night profile | 昼光控制 / 夜间模式 |
| housekeeping (cycle) | 现场清理 |
| dock truck status: incoming / loading / unloading / departing / clear | 到达中 / 装载中 / 卸货中 / 离开中 / 空闲（批次③ dock status 同根；unloading=卸货 沿用批次①） |
| on approach / bay clearing / awaiting truck | 正在驶近 / 装卸区清空中 / 等待卡车 |
| bags/min | 袋/分（bags/h=袋/时 沿用批次①） |
| holographic zone titles: ZONE 1-4 | 区域 1：仓储 / 区域 2：制粉 / 区域 3：筛理 / 区域 4：包装（沿用 ZoneLabels） |
| {label} VERIFIED (egress) | {label} 已验证（疏散验证 沿用批次③） |
| achievements / achievement unlocked | 成就 / 成就已解锁（成就 沿用 OverviewPanel） |
| service window (achievement) | 维护窗口 |
| breakdown findings: bearing wear / belt slippage / gear misalignment / chain tension / motor winding / control board / power supply / thermal threshold / cooling strain / friction heat / ventilation / imbalance / foundation settling / shaft alignment | 轴承磨损 / 皮带打滑 / 齿轮错位 / 传动链张紧 / 电机绕组 / 控制板 / 电源不稳定 / 温度阈值 / 冷却系统高负荷 / 摩擦热 / 通风受阻 / 不平衡 / 基础沉降 / 轴对中（备件名 滤芯/轴承/皮带/传感器/电机 沿用批次①；工单阶段 沿用批次②） |
| build (diagnostics) / cache / waiting build | 版本 / 缓存 / 等待中的版本（Service Worker 半角保留） |
| music player chrome: playlist / lyrics / shuffle / now playing / soundtrack / play order | 播放列表 / 歌词 / 随机播放 / 正在播放 / 原声带 / 播放顺序（歌名/歌词/专辑名永不翻译） |
| mill field guide / field notes / entry / NEW (badge) | 磨坊实地指南 / 实地笔记 / 词条 / 新（Datalinks=数据链接 沿用批次①） |
| in brief / related topics / learn more / read more / read now | 简述 / 相关主题 / 了解更多 / 阅读更多 / 立即阅读 |
| AI Reflection（批次①已钉） | AI 反思 |
| physical shift / autosave / scene continuation / last good save | 物理班次 / 自动保存 / 场景续接 / 上次有效保存（重置模拟 菜单路径 设置 > 模拟 > 重置模拟） |
| on-device AI / stand-down reasons (emergency / drill / control / replay) | 端侧 AI / 紧急停机激活期间 / 疏散验证演练期间 / 控制层未模拟期间 / 回放期间（端侧 沿用 Task 7；left raised=保持已触发 沿用 Task 9） |
| lighting periods: day / dawn / dusk / night | 白天（自然光）/ 黎明过渡 / 黄昏过渡 / 夜间（全人工照明） |
| HVAC periods: afternoon peak cooling / morning ramp-up / evening cool-down / night maintenance | 午后制冷高峰 / 早晨负荷爬升 / 傍晚负荷回落 / 夜间维护（暖通空调 沿用 Task 8；时段拼接分隔符用全角 ｜） |
| utility vessel contents: low sulphur fuel oil / food-grade process oil / standby generator diesel / LPG | 低硫燃料油 / 食品级工艺用油 / 备用发电机柴油 / 液化石油气（罐名涂装 FUEL OIL 01 等不译） |
| alarm types: BAD QUALITY / RATE OF CHANGE / returned to normal | 质量差 / 变化率 / 已恢复正常（信号质量代码 BAD/STALE 等半角保留） |
| bool alarm on / off; at or below / at or above | 开 / 关；低于或等于 / 高于或等于 |
| site safety stop (community life) | 厂区安全停机（厂区安全扣留 沿用批次②；设施紧急停机 沿用批次③） |
| camera preset names: Overview / Silos / Milling / Sifting / Packing / Shipping / Receiving | 概览 / 筒仓 / 制粉 / 筛理 / 包装 / 发运 / 接收（相机预设 沿用 Task 9；CAMERA_PRESETS 英文名为查找键，不译） |
| strategic priority (3D overlay) | 战略优先级（战略覆盖层 沿用 Task 9；战略 词根沿用 Task 7） |
| digital twin (about dialog) | 数字孪生（统一数字孪生 沿用 Task 7） |
| skip to main content / skip to navigation | 跳到主内容 / 跳到导航（键名 W/A/S/D/Q/E/V/1-7/空格/问号键 半角保留） |
| optional feature / retry feature / reload application | 可选功能 / 重试功能 / 重新加载应用 |

批次⑤（磨坊纪事展示适配器，Task 1 presentation.messages）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| upkeep | 维护费 |
| the fund（纪事共同基金） | 基金 |
| conserving resources | 节约资源 |
| lack of material | 物料短缺 |
| know-how | 技术诀窍 |
| extraction duct(ing) | 除尘管道 |
| fail-safe | 故障保护 |
| smouldering dust | 粉尘阴燃 |
| suppression / suppress（管道火灾扑救） | 扑救 |
| interlock（已释放） | 联锁（已解除） |
| grain blended / conditioned（作物年处理） | 谷物已掺混 / 谷物已调理 |
| quality penalty / quality points / grade points（试验口径） | 质量扣分 / 质量分 / 等级分 |
| clean shift close | 合格结班 |
| training mode | 训练模式 |
| delegation（AI 委托等级 0-3） | 委托（委托：等级 0-3） |
| initiative（AI 主动行动记录） | 主动行动 |
| within its grant | 在其授权范围内 |
| ruled by the AI partner | 由 AI 伙伴裁定 |
| the moment passed | 时机已过 |
| trial（沿用批次④ bounded trials 有界试验） | 试验 |
| trial victory / trial failed | ……牌胜利（金/银/铜牌）/ 试验失败 |
| the window closed | 时间窗已关闭 |
| commissioning / rework | 调试 / 返工 |
| retain (a contractor) | 留用 |
| forecast struck / passed | 已应验 / 未应验 |
| mitigate / mitigated（沿用批次③缓解） | 缓解 |
| crop year | 作物年 |
| era / a new era | 时代 / 新时代 |
| bonus（时代奖励列表，顿号连接） | 奖励 |
| reinvestment / wear / energy / production / quality（时代奖励项） | 再投资 / 磨损 / 能耗 / 生产 / 质量 |
| the long night / front / preparation | 长夜 / 战线 / 准备度 |
| (a front) held / fell | 守住了 / 失守 |
| intake and grain stores / roller floor | 接收区与谷仓 / 磨辊层 |
| operations card | 运行工作区的事件卡 |
| Incidents raised by the chronicle | 磨坊纪事触发的事件 |
| millstream | 磨坊水道 |
| ranks: a sack-carrier / an apprentice miller / a journeyman miller / a master miller / a millwright of renown / a steward of the cooperative / a founder of the federation / the keeper of the millstream / the spirit of the millstream | 运袋工 / 磨坊学徒 / 出师磨工 / 磨坊师傅 / 享有盛名的磨坊机匠 / 合作社的管家 / 联合会的创立者 / 磨坊水道的守护者 / 磨坊水道之灵 |
| The chronicle begins / is complete | 磨坊纪事开始 / 磨坊纪事完结 |
| 模板拼接注意：{label} 等占位符承接其他表的 zh 标签时，模板内不加空格（终态为中文标签）；retained 的 {label} 为承包商行号（拉丁专名，永不翻译），模板两侧留半角空格 | — |

批次⑤（磨坊纪事事件卡组，Task 2 eventDeck + longNight + ChronicleEventHost）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| weighbridge / first come, first served | 地磅 / 先到先得 |
| travelling millwrights / millwrights’ guild / workshop（行会讲习） | 巡回的磨坊机匠 / 磨坊机匠行会 / 讲习 |
| roll fluting / reflute / the flutes have dulled | 磨辊拉丝 / 重新拉丝 / 拉丝钝了 |
| break rolls / break release | 皮磨磨辊 / 剥刮率 |
| proving test / the loaves stood tall | 醒发测试 / 面包烤得挺拔饱满 |
| falling-number test / falling number | 降落数值检验 / 降落数值 |
| sprouted in the ear / sprouted grain | 穗上发芽 / 穗发芽谷物 |
| sound (stored) grain | 完好的库存谷物 |
| bridges (in the bins) / the sifters blind | 架桥结拱 / 平筛糊网 |
| moisture meter / storage moisture / mobile dryer | 水分仪 / 储存水分 / 移动烘干机 |
| wet-year penalty lifts | 湿年的罚值解除（罚值 沿用批次④） |
| paper-sack supplier / bales | 纸袋供应商 / 袋捆 |
| rush freight / rush freight surcharge | 加急货运 / 加急运费（rush=加急 沿用批次③） |
| lot notification / rapid test / formal hold procedure | 批次通报 / 快检 / 正式扣留程序（质量扣留 沿用批次①） |
| caught (spray) drift | 沾了飘移的药雾 |
| haulier / relief lorry / the bypass | 承运方 / 替班卡车 / 绕城公路 |
| collection slot / booking order | 提货时段 / 预订顺序 |
| durum | 杜兰麦 |
| specks / sieve analysis / sifter covers / closer mesh | 斑点 / 筛析 / 平筛筛网 / 更密的目数 |
| pest walk / pest-control firm / proof (a store) | 虫害巡查 / 虫害防治公司 / 封堵 |
| food-safety inspector / sign off / actions（检查整改） | 食品安全检查员 / 签字结案 / 整改项 |
| deep clean / cleaning schedule | 深度清洁 / 清洁计划表 |
| hill farms / valley farms | 山上农场 / 谷地农场 |
| members’ meeting / motion / table the motion / the chair | 成员大会 / 动议 / 搁置动议 / 主持人（主持人 沿用批次④） |
| reinvestment share | 再投资份额（再投资 沿用 Task 1） |
| demand response / shed load / grid operator | 需求响应 / 削减负荷 / 电网运营商 |
| off-peak tariff / load-shift timer / distribution network | 谷时电价 / 负荷转移定时器 / 配电网络（峰时/谷时 沿用批次④） |
| modernisation grant / energy and yield return | 现代化补助金 / 能耗与产量申报表 |
| test milling / laboratory mill / variety trials | 试磨 / 实验磨 / 品种试验 |
| village harvest committee / work party / culvert / millstream | 村庄收割委员会 / 帮工队 / 涵洞 / 磨坊水道（涵洞、磨坊水道 沿用既有钉词） |
| agricultural college | 农学院 |
| growers / growers’ cooperative | 种植户 / 种植户合作社 |
| cooperative fund / the saving can stay in the fund | 合作社基金 / 留在基金里（基金 沿用 Task 1） |
| warm（关系档位，{party} warm） | 关系亲善（{party}关系亲善） |
| Think it over（事件卡“再想”按钮） | 从长计议 |
| Goes in the record（书签 aria） | 将载入纪事 |
| Forced maintenance: pay in full | 强制维护：全额支付 |
| {plans} installed / or（longNight 战线准备来源拼接） | {plans}已建成 / 或 |
| holds {front} / hold / fall（终夜战线按钮片段） | 守住{front} / 守住 / 失守（守住/失守 沿用 Task 1 钉词） |
| Upkeep of {due} is due / decrepit plant | 应缴维护费 {due} / 年久失修的厂房 |

批次⑤（磨坊纪事管家卡组，Task 3 stewardDeck）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| standby cover / standby service firm / fitters | 待命保障 / 待命维修公司 / 维修工 |
| switch room | 配电室 |
| dispatch yard | 发运场院 |
| contract committee / arbitrator / at arbitration | 合约委员会 / 仲裁人 / 在仲裁中 |
| ticketed weight / short-weighted lots / dock (a payment) | 磅单重量 / 缺重的批次 / 扣减（货款） |
| crop year’s notice (on a … notice) | 一个作物年的解约预告 |
| granary（与 grain stores 谷仓 相区分） | 粮仓 |
| community bakery / village bakery | 社区面包房 / 村里的面包房 |
| deeds / east bin / seed merchant | 地契 / 东仓 / 种子商 |
| short-counted bales / counted at the gate | 缺数的袋捆 / 在大门口清点 |
| County Food Standards / approval / suspended / reinstatement | 县食品标准局 / 认证 / 被暂停 / 复牌（复牌审计） |
| cleaning log / cleaning sheets / night cleaning log | 清洁记录 / 清洁记录表 / 夜班清洁记录 |
| backdate (the sheets) | 倒填（记录表） |
| stonemason / dressed stone / bore（涵洞孔径） | 石匠 / 琢石 / 孔径 |
| switchgear / busbar (joints) / contactor / shutdown | 开关设备 / 母排（接头） / 接触器 / 停产 |
| quarry / quarry road / flood wall / reservoir works | 采石场 / 采石场的路 / 防洪墙 / 水库工程 |
| valley meeting / village hall | 谷地大会 / 村礼堂 |
| Rochdale principles | 罗奇代尔原则 |
| the reserve / rebate（谷地让利） | 储备金 / 让利 |
| mobile sifter / plant-hire firm / certified unit / low-loader | 移动平筛 / 设备租赁公司 / 认证机组 / 低板拖车 |
| city wholesaler / premium / first call | 城里的批发商 / 溢价 / 优先购买权 |
| storm front / grid emergency | 风暴锋面 / 电网紧急状况（沿用 longNight nightBody） |
| put its own hands on (a front) | 亲自照看（战线） |
| collections（承运方提货业务） | 提货（沿用来粮→提货 钉词；承运方 沿用 Task 2） |

批次⑤（磨坊纪事历史注记，Task 4 history.messages）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| charter（磨坊纪事宪章，CharterScreen 语境） | 宪章（别于批次④车间试点章程） |
| 试验名：The Great Programme / The Wet Harvest / The Inspection / The Bakers' Rush / Grid Winter | “大工程计划” / “湿收” / “检查” / “面包房抢货潮” / “电网之冬”（Task 7 trials.messages 沿用） |
| 时代名：cooperative mill / district mill / regional mill / federated cooperative | 合作社磨坊 / 区级磨坊 / 区域磨坊 / 联合合作社（Task 7 plans.messages 沿用） |
| saddle quern / handstone | 马鞍形石磨盘（saddle quern）/ 手磨石 |
| emmer / hulled wheat / chaff | 二粒小麦（emmer）/ 带壳小麦 / 皮壳 |
| nilometer / cubit | 尼罗尺（nilometer）/ 腕尺 |
| nome / nomarch / governor（埃及行省语境） | 诺姆（nome）/ 诺姆长（nomarch）/ 总督（governor） |
| Domesday Book | 《末日审判书》（Domesday Book） |
| millstone / race（水磨水道，别于 millstream 磨坊水道） | 磨石 / 水道 |
| post mill / tailpole / roundhouse | 支柱磨（post mill）/ 尾杆 / 底层圆棚 |
| millwright（沿用 Task 2 磨坊机匠） | 磨坊机匠 |
| bucket elevator / screw conveyor / hopper boy / marine leg | 斗式提升机 / 螺旋输送机 / hopper boy（料斗耙）/ 船用提升臂（marine leg） |
| grain elevator（布法罗语境的建筑） | 谷物提升塔（grain elevator） |
| high milling / gradual reduction | 高度研磨法（high milling）/ 逐级研磨 |
| chilled cast iron | 冷硬铸铁 |
| conditioning / tempering | 调理（conditioning）/ 润麦（tempering）（conditioned=已调理 沿用 Task 1） |
| extraction rate / grist（配麦语境） | 出粉率 / 配麦（在磨物料=grist 另指，沿用批次④） |
| falling number（沿用 Task 2） | 降落数值 |
| gravity table / colour sorter | 重力分选台 / 色选机 |
| ergot / Claviceps purpurea / ergotism / St Anthony's Fire / Order of St Anthony | 麦角 / 麦角菌（Claviceps purpurea）/ 麦角中毒 / 圣安东尼之火 / 圣安东尼修会 |
| line shaft / (electric) drive | 天轴（line shaft）/ 电力传动 |
| tide mill / mill pond / sluice | 潮汐磨坊 / 磨池 / 闸门 |
| SCADA（supervisory control and data acquisition） | 监控与数据采集（SCADA 缩写本身保留） |
| mimic panel / remote terminal unit / programmable logic controller | 模拟屏（mimic panel）/ 远程终端单元 / 可编程逻辑控制器 |
| Assize of Bread and Ale / farthing / court-leet / baker's dozen | 《面包与麦酒法令》（Assize of Bread and Ale）/ 法新（farthing）/ 庄园法庭（court-leet）/ a baker's dozen（面包师的一打，即十三个） |
| alum / public analyst | 明矾 / 公共分析师 |
| Chorleywood (bread) process | 乔利伍德（面包）工艺 |
| National Flour / extraction rate 85% | “国家面粉”（National Flour）/ 85% 出粉率 |
| Corn Laws / quarter（夸特谷物计量）/ shilling / Anti-Corn Law League / sliding scale | 《谷物法》/ 夸特（quarter）/ 先令 / 反谷物法同盟 / 滑动税率 |
| Rochdale Society of Equitable Pioneers / Toad Lane / one member, one vote | 罗奇代尔公平先锋社 / 蟾蜍巷（Toad Lane）/ 一人一票 |
| Mondragon / Caja Laboral Popular | 蒙德拉贡 / Caja Laboral Popular（合作银行名保留原文） |
| Budapest rolls / roller mill | 布达佩斯磨辊 / 辊式磨 |
| 历史注记行文数字约定：试验目标等游戏口径数值用半角阿拉伯数字（20,000 千克、0.08），叙事计数可用中文数字（十四人、十五版） | — |
| 人名/地名/著作：通行译名 + 首次出现括注原文（维特鲁威、吉萨、佩皮二世、征服者威廉、奥利弗·埃文斯、布达佩斯、罗奇代尔、蒙德拉贡等）；无通行译名的机构名保留原文（Ancient Egypt Research Associates） | — |

批次⑤（磨坊纪事测验与描述/记录，Task 5 quiz.messages + record.messages + describe.messages）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| 测验题干/选项：答案措辞沿用 history zh 原词（二粒小麦与大麦／乌鸦之墙／冷硬铸铁／沿水平面回旋／集尘器／每夸特 80 先令 等）；选项索引即正确性映射，只译文本 | — |
| glazes faience（磨谷仆从像材质） | 上釉费昂斯 |
| St Elmo’s fire / the sweating sickness / the king’s evil（麦角题干扰项） | 圣艾尔摩之火 / 汗热病 / 国王的恶疾（圣安东尼之火 沿用 Task 4） |
| 面包师的一打题四个英语短语选项 | 汉语释义 + 半角括注原文（“面包师的一打”（a baker’s dozen）） |
| 蒙德拉贡公司名选项（Eroski/Ulgor/Orona/Irizar） | 公司名保留原文（永不翻译清单） |
| 记录条目标签：全部沿用事件/管家卡组原词（待命保障→接收区/磨辊层/发运场院、遭雹灾农场、半路弃单、一个作物年的解约预告、磨坊场院、老粮仓、意面坊、村里的面包房、纸袋供应商、大门口清点、同等的通融、场院底下的涵洞、开关设备、防洪墙、谷地大会、储备金、清洁记录、筛理层、复牌审计、优先购买权、合作社条款、提货、大型移动平筛） | — |
| (a front) held / fell on the long night（引擎记录条目） | 接收区与谷仓／磨辊层在长夜中守住了／失守（守住、失守 沿用 Task 1） |
| 磨坊性格绰号：the Growers’/Bakers’/Ledger Mill、the Mill of Record、the Valley’s/Steady Mill | 种植户的磨坊 / 面包师的磨坊 / 会算账的磨坊 / 记录在案的磨坊 / 谷地的磨坊 / 稳当的磨坊（接入 presentation completeBody“唤作{character}”无空格模板） |
| standing（县食品标准局 1-9 评信；Task 6 ScoreTab/Overview 沿用） | 信誉（信誉不低于 {standing}／信誉 {value}） |
| approval in force（condition7） | 认证有效（认证、被暂停、复牌 沿用 Task 3） |
| condition3/4 档位拼接：{party}关系{tier}／{party}关系非{tier}；condition8-10 = 冷淡/中立/亲善（与 longNight m8“{party}关系亲善”终态一致） | — |
| not: {mark}（condition1，未设标记的解锁条件） | 未记录：{mark} |
| read “{title}”（condition2，已读史料注记） | 读过“{title}” |
| 或（condition0，longNight m7 沿用；拼接代码两侧的半角空格为机制产物） | — |
| describe 效果条目：production/energy/wear/quality/reinvestment/upkeep/fund/know-how | 生产 x{value} / 能耗 x{value} / 磨损 x{value} / 质量 {value} / 再投资 {value}% / 维护费 x{value} / 基金 {value} / 技术诀窍 {value}（维护费、基金、技术诀窍 沿用 Task 1） |
| forecasts {value} points（m5，事件预测概率修正） | 预测 {value} 点（预测 沿用 Task 1“预测概率”） |
| {effects} for {shifts} shift/shifts（m9-m11） | {effects}，持续 {shifts} 个班次（个班次 沿用 Task 1 presentation） |
| all customers（m12） | 所有客户 |
| prepares {front} for the long night（m14） | 让{front}为长夜备战（{front} 接 longNight 战线 zh 名，无空格） |
| {forecast} -{value} points（m15，预报缓解） | {forecast} -{value} 点 |
| approval restored（m17） | 认证已恢复 |
| the AI partner rules the rest{rulings}（m18） | 其余由 AI 伙伴裁定{rulings}（由 AI 伙伴裁定 沿用 Task 1；{rulings} 内的半角冒号与逗号为拼接机制产物） |
| treats this crop year（m19） | 处理本作物年（本作物年 沿用 Task 1） |
| raises: {incident}（m20） | 触发：{incident}（触发 沿用 Task 1“磨坊纪事触发的事件”） |
| closes the inspection（m21） | 结束检查 |
| describe/record 分号拼接（describe.ts/record.ts join('; '、', ')） | 半角分号/逗号为拼接机制产物，与 pt-BR 同；不改动代码 |

批次⑤（磨坊纪事工作区标签页，Task 6 九文件）补充基线 — 后续批次必须沿用：

| English | zh |
|---|---|
| 工作区标签页：Chronicle / Plans / Partners / Ledger / Notes / Score；Chronicle sections（tablist aria） | 总览 / 方案 / 伙伴 / 台账 / 笔记 / 得分；磨坊纪事栏目（plan=方案、得分 沿 Task 1；台账 沿批次②物料台账） |
| Chronicle status / Chronicle progress（进度条 aria） | 磨坊纪事状态 / 磨坊纪事进度 |
| desk(s)（Castles II 式注意力点数池，works/trade/council） | 席位（{desk}席位，sr-only；Task 7 desks 标签须以 席位 收尾拼接） |
| shift / shifts（shared.messages plural 单位，拼接 "{n} 个班次"） | 个班次 / 个班次（沿 Task 1 presentation） |
| "X of Y" 计数模板（p53/p57/p58/p14、第 {index}/{total} 题） | X/Y 无空格斜杠；班次 X / Y（Overview m7/m8）两侧空格为 JSX 机制产物 |
| in-house crew / contractor / retain (a firm) | 自有施工队 / 承包商 / 留用（留用、施工队 沿 Task 1 retainedBody） |
| Installing / Installed / Planned（方案状态）/ Draw up the plan / Plan it first. / An install is under way | 安装中 / 已安装 / 已列入计划 / 拟定方案 / 请先拟定方案。/ 正在进行一项安装（longNight 的 {plans}已建成 另指准备度来源，两存不互斥） |
| Cancel and refund / Reverse and refund / (reversed) | 取消并退款 / 撤销并退款 / （已撤销） |
| Lineage notes / Notices / The record（决策记录区） | 传承笔记 / 通告 / 纪事 |
| 恢复挑战（沿用 presentation t20）；Recovery challenge medals / Shift grades / Epilogue | 恢复挑战奖牌 / 班次等级分（等级分 沿 Task 1）/ 尾声 |
| Begin a new chronicle / Abandon this chronicle / Yes, begin anew / Yes, abandon it / Keep it | 开启新的磨坊纪事 / 放弃本次磨坊纪事 / 好，重新开始 / 好，放弃吧 / 保留 |
| Shift {shift}（试验起跑班次）/ gold / silver / bronze（奖牌名） | 第 {shift} 个班次 / 金牌 / 银牌 / 铜牌（……牌胜利 沿 Task 1） |
| Gold within / Silver within（奖牌用时阈值 chip）/ Begins in / left（时长剩余后缀） | 金牌线 / 银牌线（全句版见 completedTarget“牌要求在 X 个班次内完成”）/ 距开始还有（前缀拼接）/ 可用（zh 无后置剩余语，以预算口径表达） |
| Met / Not met（长夜准备来源 aria）/ Tonight / In {shifts} / lapses at the next close | 已满足 / 未满足 / 就在今夜 / {shifts}后 / 将于下次结班时失效（合格结班 沿 Task 1） |
| Decide / Awaiting a decision | 决断 / 等待决断（决断 沿 Task 4 史料注记行文） |
| Acknowledge / Apply mitigation / Restore controls / Restore controls: needs the mitigation to take effect | 确认 / 实施缓解 / 恢复控制 / 恢复控制：需待缓解生效（事件相位 已触发/已确认/已缓解/已解决 沿批次② SCADAPanel） |
| Suspended（信誉位 r69/m49） | 已暂停（认证已暂停 与 Task 5 认证已恢复 对仗；Task 3 卡组句式 被暂停 为行文被动式，两存） |
| '% in'（预测概率+期限 chip，m34） | %，（与 presentation forecastIssued"{n0}%，{n1} {unit}内"同读法；末位 内 为后缀不可得，语义由期限承担） |
| earned /（时代门槛 know-how 行） | 已获 / |
| Trials passed / Maintenance policy / Active effects / points | 通过的试验 / 维护策略 / 生效中的效果 / 点（沿 Task 5） |
| Wheat recipes quality - / Blend with sound grain / Condition the grain | 小麦配方质量 - / 掺混完好谷物 / 调理谷物（完好、调理 沿 Task 1/2） |
| Upkeep due / Duct fire / Production stopped / Suppression under way / Suppress and clean / Clean by hand, / min | 应缴维护费 / 管道火灾 / 生产已停止 / 扑救进行中 / 扑救并清理 / 人工清理，/ 分钟（均沿 Task 1/2 同词） |
| Enable: costs -25%, forecasts -25%, score -2 | 启用：费用 -25%，预测概率 -25%，得分 -2（b14 同口径） |
| Customers / Organisations / Approval suspended / Delegation to the AI partner / Delegation level | 客户 / 组织 / 认证已暂停 / 对 AI 伙伴的委托 / 委托等级 |
| cool / neutral / warm（关系档位 chip，大小写两套） | 冷淡 / 中立 / 亲善（沿 Task 5 condition8-10 与 longNight {party}关系亲善） |
| {name} relationship / {name} standing / Standing {standing} of 9 | {name}关系 / {name}信誉 / 信誉 {standing}/9（信誉 沿 Task 5） |
| you / the AI partner / lapsed（纪事行动者）/ new（角标） | 你 / AI 伙伴 / 已失效 / 新 |
| quiz 界面：Start the quiz / Another round / Next question / See the result / Question {index} / {total} / , best {best} / sacks / Unlock … more questions | 开始测验 / 再来一轮 / 下一题 / 查看结果 / 第 {index}/{total} 题 / ，最佳 {best} / 袋 / 再解锁 {n} 道题目即可开始 |
| Balance / Co-op fund / Fund, last shift / Fund last shift / Plant ledger / Plant contribution / {unit} by source | 结余 / 合作社基金（沿 Task 2）/ 基金，上一班次 / 上一班次基金 / 磨坊台账 / 磨坊贡献 / {unit}来源明细 |
| 宪章档位：Beginner / Historical / Hard；Site charter / Sign the charter / (score +{bonus}) | 新手 / 史实 / 困难；磨坊宪章 / 签署宪章 / （得分 +{bonus}）（宪章 沿 Task 4） |
| '{forecast} -{relief}%' / '{crop} penalty down to {value}' / 'no {crop} penalty'（方案效果摘要） | {forecast} -{relief}% / {crop}罚值降至 {value} / 无{crop}罚值（罚值 沿批次④；{forecast}/{crop} 接 Task 7 标签） |
| 拼接机制产物（不改代码）：JSX 侧空格与半角冒号——"人工清理， 20 分钟"、"45%， 3 个班次"、"距开始还有 3 个班次: 目标"、effectSummary 的 ", " 连接 | — |

批次③终审接受项与已知计量假象（check-zh-progress 读数口径）：

- 接受项：实验室 partial-carry（个别串作 实验室，全称 质检实验室，defensible）；报警阈值 soft-orphan（已入表，暂无渲染串沿用，钉后续批次）；千克 a11y（PlayableShift truckLoadValueText 无障碍朗读串拼 千克，与可见 kg 并存，defensible）。
- 计量假象：`i18n.test.ts` 两个 `@ts-expect-error` 残缺 fixture 目录是编译期测试本体，其键永久计入“未翻译”；`websocketUrl`（SCADA）等 zh===en 为合法同文键。ZoneLabels 补完后，全局“未翻译”仅剩 fixture 残缺键与 zh===en 合法同文键。同文键新增（批次④ Task 4，与 websocketUrl 同类，pt-BR 亦同文）：`WorkplaceImprovementPanel.kgValue`（'{kg} kg'）与 `WorkplacePackingEvidence.kg`（'{value} kg'）——纯数值格式串，单位按钉词保持半角 kg，读数 96/97、94/95 视为达标。同文键新增（批次⑤ Task 6，与 kgValue 同类，pt-BR 亦同文）：`PlansTab.p17`（'{forecast} -{relief}%'）——纯符号格式串（占位符 + 半角减号与百分号），无可译文字，读数 29/30 视为达标。

zh 风格规则（与计划 Global Constraints 一致）：
1. `{name}` 占位符原样保留；2. 函数消息签名不变；3. 全角标点、
半角占位符与单位；4. 中英之间加半角空格；5. 数字半角；6. 引号用 “”（GB/T 15834），不用「」。
永不翻译清单沿用上文（点位号、设备编号、专有名词、歌词、涂装文字、
agent 协议、日志），zh 侧同样遵守。
