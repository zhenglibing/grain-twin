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
| Chronicle | 磨坊纪事 |
| safety | 安全 |
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

zh 风格规则（与计划 Global Constraints 一致）：
1. `{name}` 占位符原样保留；2. 函数消息签名不变；3. 全角标点、
半角占位符与单位；4. 中英之间加半角空格；5. 数字半角；6. 引号用 “”（GB/T 15834），不用「」。
永不翻译清单沿用上文（点位号、设备编号、专有名词、歌词、涂装文字、
agent 协议、日志），zh 侧同样遵守。
