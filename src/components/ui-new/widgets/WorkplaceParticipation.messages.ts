import { defineMessages } from '../../../i18n';
import { PT_TASK } from './WorkplaceLab.messages';

/** pt-BR label for a logic value; an unknown value falls back to itself. */
const pick = (labels: Record<string, string>, value: string): string => labels[value] ?? value;

interface CountParams {
  count: number;
  formatted: string;
}

/*
 * zh label maps mirroring the WorkplaceLab enum anchors; unknown values fall
 * back to themselves through pick(), matching the pt-BR behaviour.
 */
const ZH_SECTION: Record<string, string> = {
  Handoff: '交接',
  Shift: '班次',
  Practices: '实践',
  'Agreement / Voices': '协议/声音',
  Review: '回顾',
  Experiment: '实验',
};

const ZH_OBJECTION_KIND: Record<string, string> = {
  rest: '休息',
  burden: '负担',
  privacy: '隐私',
  authority: '职权',
};

const ZH_TASK: Record<string, string> = {
  Packing: '包装',
  'Pallet checks': '托盘检查',
  'Quality release': '质量放行',
  Sampling: '取样',
  'Maintenance planning': '维护计划',
  Coordination: '协调',
};

export const workplaceParticipationMessages = defineMessages({
  en: {
    // Logic values shown as labels. English returns the value itself.
    sectionLabel: (p: { section: string }) => p.section,
    objectionKind: (p: { kind: string }) => p.kind,

    // Decision ownership
    regionLabel: 'Decision ownership',
    ownershipPrefix: 'Decision ownership:',
    soloRolePlay: 'solo role-play',
    roleTurn: '{role} turn',
    facilitatorHandover: 'facilitator handover',
    adviser: 'Adviser',
    rehearsalNotice:
      'Shared-device synthetic rehearsal. Separate turns limit local role actions. They provide no identity authentication or proof of freedom from coercion. Real worker sessions need separate authentication and agreed safeguards.',
    interactionMode: 'Interaction mode',
    optionSolo: 'Solo role-play',
    optionSeparate: 'Facilitated separate turns',
    turnOnly:
      'Only {role} may record this turn’s role decisions. Changed terms end the turn. End this turn before facilitator activation or settlement.',
    mandateChecksLegend: 'Current mandate checks',
    mandateChecksStatus:
      'Mandate checks: {done} of {total} match the current agreement. Confirming understanding remains a separate choice.',
    turnCheckLabel: 'Turn check: {id}',
    selectAnswer: 'Select an answer',
    matchesTerms: 'Matches the current terms. ',
    needsAnotherLook: 'Needs another look. ',
    endTurn: 'End participant turn',
    handOver: 'Hand over to fictional role',
    beginTurn: 'Begin participant turn',
    handOverNote:
      'Hand the device over before beginning. The facilitator may prepare terms and explain facts, and cannot record role decisions.',

    // Season entry
    seasonSummary: 'Play a three-shift cooperative season',
    seasonIntro:
      'Friday: agree an urgent delivery. Monday: inspect under pressure. Thursday: renegotiate repeated burden. Cash, pay and workload carry forward; each shift needs fresh consent.',
    seasonRoute: 'Season adoption route',
    adoptionNote:
      'Keep this degree of adoption throughout; escalation is optional in a future exercise.',
    startSeason: 'Start season with current customer commitment',
    seasonRequires:
      'Requires an open, qualified customer commitment. Real dispatch earns delivery; a defensible shortfall is a valid ending.',

    // Fairness receipts
    fairnessSummary: 'Individual fairness receipts',
    fairnessIntro:
      'Illustrative credits and modeled minutes. Earned pay includes member distributions; extra-duty compensation is separate. Current reservations are earmarked funds, awaiting work.',
    fairnessLabel: 'Fairness: {role}',
    qualifiedTasks: 'Qualified tasks: {tasks}. Current task: {task}.',
    // Task names are logic values (bilateralWorkplace); English shows them as-is.
    taskLabel: (p: { task: string }) => p.task,
    dutyLine:
      'Current optional duty: {duty}. {extra} extra minutes across {shifts} shifts; {earlier} earlier minutes.',
    dutyNoDecision: 'no decision',
    dutyVolunteered: 'volunteered',
    dutyDeclined: 'declined',
    payLine:
      'Earned pay and member distributions: {earned}. Compensation paid: {paid}. Wages reserved: {wages}. Compensation reserved: {reserved}.',
    restLine:
      'Rest delivered: {rest} min. Recovery delivered: {recovery} min. Recovery owed: {owed} min.',
    openObjections: (p: CountParams) => `${p.formatted} retained open objections.`,

    // Guided demonstration
    demoLabel: 'Guided bilateral demonstration',
    closeGuide: 'Close ten-minute guide',
    openGuide: 'Open ten-minute guide',
    guideIntro:
      'About ten minutes of discussion, with plant time controlled separately. Evidence marks observed choices; a skipped optional choice stays available. The guide never makes decisions for you.',
    evidencePresent: 'Evidence present',
    availableToExplore: 'Available to explore',
    goTo: 'Go to {section}',
    downloadReceipt: 'Download public cooperative receipt',
    saveReload: 'Save and safely reload workplace',

    // Automatic demonstration
    autoLabel: 'Automatic fictional demonstration',
    autoRunning:
      'Automatic solo demonstration: fictional roles choose, refuse and revoke sharing. Real simulated plant departures earn delivery.',
    autoIdle:
      'The cooperative season runs autonomously by default. Take over whenever you want. Separate participant turns always stay manual.',
    autoManual:
      'You can let fictional solo roles demonstrate the season, or keep making the choices yourself.',
    skipGuide: 'Skip guide and run fictional demo',
    pauseDemo: 'Pause automatic demo',
    keepManual: 'Keep decisions manual',

    // Autoplay status
    demoRunningLabel: 'Fictional demo running',
    autonomousSeason: 'Autonomous cooperative season',
    autonomousSeasonDetail:
      "Fictional cooperative roles are making this season's decisions while the plant runs. Take over to make them yourself in the Bilateral Autonomy System (BAS) panel; the shift keeps running.",
    takeOver: 'Take over cooperative season',
    takeOverCompact: 'Cooperative season running: take over',
  },
  zh: {
    // Logic values shown as labels. zh maps known ids; unknown values fall back to themselves.
    sectionLabel: (p: { section: string }) => pick(ZH_SECTION, p.section),
    objectionKind: (p: { kind: string }) => pick(ZH_OBJECTION_KIND, p.kind),

    // Decision ownership
    regionLabel: '决策归属',
    ownershipPrefix: '决策归属：',
    soloRolePlay: '单人角色扮演',
    roleTurn: '{role}的回合',
    facilitatorHandover: '促成交接',
    adviser: '顾问',
    rehearsalNotice:
      '共用设备的虚拟预演。分别回合限制各本地角色的操作。它们既不提供身份认证，也不能证明免于胁迫。真实工人会话需要单独的认证与商定的保障措施。',
    interactionMode: '交互模式',
    optionSolo: '单人角色扮演',
    optionSeparate: '促成的分别回合',
    turnOnly:
      '只有{role}可以记录本回合的角色决策。条款变更会结束本回合。请在促成人激活或结清之前结束本回合。',
    mandateChecksLegend: '当前授权检查',
    mandateChecksStatus: '授权检查：{done}/{total} 项与当前协议一致。确认理解仍是一项单独的选择。',
    turnCheckLabel: '回合检查：{id}',
    selectAnswer: '选择一个答案',
    matchesTerms: '与当前条款一致。 ',
    needsAnotherLook: '需要再看一看。 ',
    endTurn: '结束参与者回合',
    handOver: '交给虚构角色',
    beginTurn: '开始参与者回合',
    handOverNote: '开始之前请先交出设备。促成人可以准备条款并解释事实，但不能记录角色决策。',

    // Season entry
    seasonSummary: '进行一个三班次的合作社加工季',
    seasonIntro:
      '周五：商定一次紧急交付。周一：在压力下检查。周四：重新协商反复出现的负担。现金、报酬与工作负荷结转；每个班次都需要新的同意。',
    seasonRoute: '加工季采纳路线',
    adoptionNote: '全程保持这一采纳程度；升级在未来练习中是可选的。',
    startSeason: '以当前客户承诺启动加工季',
    seasonRequires:
      '需要一份未结的、合格的客户承诺。真实发运挣得交付；有理可据的缺口是一个有效的结局。',

    // Fairness receipts
    fairnessSummary: '个人公平回执',
    fairnessIntro:
      '示意点数与模拟分钟。已挣报酬包含成员分配；额外勤务补偿另计。当前预留是专用款项，等待工作。',
    fairnessLabel: '公平：{role}',
    qualifiedTasks: '合格任务：{tasks}。当前任务：{task}。',
    // Task names are logic values (bilateralWorkplace); zh maps the known task ids.
    taskLabel: (p: { task: string }) => pick(ZH_TASK, p.task),
    dutyLine: '当前可选勤务：{duty}。跨 {shifts} 个班次共 {extra} 额外分钟；更早 {earlier} 分钟。',
    dutyNoDecision: '未决策',
    dutyVolunteered: '已志愿',
    dutyDeclined: '已拒绝',
    payLine:
      '已挣报酬与成员分配：{earned}。已付补偿：{paid}。已预留工资：{wages}。已预留补偿：{reserved}。',
    restLine: '已交付休息：{rest} 分钟。已交付补休：{recovery} 分钟。应补休息：{owed} 分钟。',
    openObjections: (p: CountParams) => `${p.formatted} 条保留的未决异议。`,

    // Guided demonstration
    demoLabel: '引导式双边演示',
    closeGuide: '关闭十分钟指南',
    openGuide: '打开十分钟指南',
    guideIntro:
      '约十分钟的讨论，工厂时间另行控制。证据标记已观察到的选择；跳过的可选选择仍可用。指南绝不代你决策。',
    evidencePresent: '证据已具备',
    availableToExplore: '可前往探索',
    goTo: '前往{section}',
    downloadReceipt: '下载公开合作社回执',
    saveReload: '保存并安全重新加载车间',

    // Automatic demonstration
    autoLabel: '自动虚构演示',
    autoRunning: '自动单人演示：虚构角色进行选择、拒绝并撤销共享。模拟工厂中的真实离场挣得交付。',
    autoIdle: '合作社加工季默认自主运行。你可以随时接管。分别的参与者回合始终保持手动。',
    autoManual: '你可以让虚构的单人角色演示这个加工季，也可以继续自己做选择。',
    skipGuide: '跳过指南并运行虚构演示',
    pauseDemo: '暂停自动演示',
    keepManual: '保持手动决策',

    // Autoplay status
    demoRunningLabel: '虚构演示运行中',
    autonomousSeason: '自主合作社加工季',
    autonomousSeasonDetail:
      '工厂运行的同时，虚构的合作社角色正在做出本加工季的决策。要亲自决策，请在双边自治系统（BAS）面板中接管；班次继续运行。',
    takeOver: '接管合作社加工季',
    takeOverCompact: '合作社加工季运行中：接管',
  },
  'pt-BR': {
    sectionLabel: (p: { section: string }) =>
      pick(
        {
          Handoff: 'Passagem de turno',
          Shift: 'Turno',
          Practices: 'Práticas',
          'Agreement / Voices': 'Acordo / Vozes',
          Review: 'Revisão',
          Experiment: 'Experimento',
        },
        p.section
      ),
    objectionKind: (p: { kind: string }) =>
      pick(
        {
          rest: 'descanso',
          burden: 'carga de trabalho',
          privacy: 'privacidade',
          authority: 'autoridade',
        },
        p.kind
      ),

    regionLabel: 'Responsabilidade pelas decisões',
    ownershipPrefix: 'Responsabilidade pelas decisões:',
    soloRolePlay: 'encenação individual',
    roleTurn: 'vez de {role}',
    facilitatorHandover: 'passagem pelo facilitador',
    adviser: 'Conselheiro',
    rehearsalNotice:
      'Ensaio sintético em dispositivo compartilhado. Jogar cada um na sua vez limita as ações locais de cada função. Isso não autentica a identidade nem comprova a ausência de coerção. Sessões com trabalhadores reais exigem autenticação separada e salvaguardas acordadas.',
    interactionMode: 'Modo de interação',
    optionSolo: 'Encenação individual',
    optionSeparate: 'Cada um na sua vez, com facilitação',
    turnOnly:
      'Somente {role} pode registrar as decisões de função desta vez. Termos alterados encerram a vez. Encerre esta vez antes da ativação pelo facilitador ou do acerto final.',
    mandateChecksLegend: 'Verificações do mandato atual',
    mandateChecksStatus:
      'Verificações do mandato: {done} de {total} conferem com o acordo atual. Confirmar o entendimento continua sendo uma escolha separada.',
    turnCheckLabel: 'Verificação da vez: {id}',
    selectAnswer: 'Selecione uma resposta',
    matchesTerms: 'Confere com os termos atuais. ',
    needsAnotherLook: 'Precisa de outra revisão. ',
    endTurn: 'Encerrar a vez do participante',
    handOver: 'Passar para a função fictícia',
    beginTurn: 'Iniciar a vez do participante',
    handOverNote:
      'Passe o dispositivo antes de começar. O facilitador pode preparar os termos e explicar os fatos, mas não pode registrar decisões das funções.',

    seasonSummary: 'Jogue uma temporada cooperativa de três turnos',
    seasonIntro:
      'Sexta-feira: combine uma entrega urgente. Segunda-feira: inspecione sob pressão. Quinta-feira: renegocie a sobrecarga recorrente. Caixa, remuneração e carga de trabalho seguem adiante; cada turno precisa de um novo consentimento.',
    seasonRoute: 'Caminho de adoção da temporada',
    adoptionNote:
      'Mantenha esse grau de adoção do começo ao fim; a escalada é opcional em um exercício futuro.',
    startSeason: 'Iniciar a temporada com o compromisso atual com o cliente',
    seasonRequires:
      'Exige um compromisso com o cliente aberto e qualificado. A expedição real conta como entrega; um déficit justificável é um final válido.',

    fairnessSummary: 'Comprovantes individuais de equidade',
    fairnessIntro:
      'Créditos ilustrativos e minutos modelados. A remuneração conquistada inclui as distribuições aos cooperados; a compensação por trabalho extra é separada. As reservas atuais são fundos destinados, aguardando o trabalho.',
    fairnessLabel: 'Equidade: {role}',
    qualifiedTasks: 'Tarefas habilitadas: {tasks}. Tarefa atual: {task}.',
    taskLabel: (p: { task: string }) => pick(PT_TASK, p.task),
    dutyLine:
      'Trabalho opcional atual: {duty}. {extra} minutos extras em {shifts} turnos; {earlier} minutos anteriores.',
    dutyNoDecision: 'sem decisão',
    dutyVolunteered: 'se ofereceu',
    dutyDeclined: 'recusou',
    payLine:
      'Remuneração conquistada e distribuições aos cooperados: {earned}. Compensação paga: {paid}. Remuneração reservada: {wages}. Compensação reservada: {reserved}.',
    restLine:
      'Descanso concedido: {rest} min. Recuperação concedida: {recovery} min. Recuperação devida: {owed} min.',
    openObjections: (p: CountParams) =>
      p.count === 1
        ? `${p.formatted} objeção aberta mantida.`
        : `${p.formatted} objeções abertas mantidas.`,

    demoLabel: 'Demonstração bilateral guiada',
    closeGuide: 'Fechar o guia de dez minutos',
    openGuide: 'Abrir o guia de dez minutos',
    guideIntro:
      'Cerca de dez minutos de conversa, com o tempo da planta controlado à parte. As evidências marcam escolhas observadas; uma escolha opcional pulada continua disponível. O guia nunca toma decisões por você.',
    evidencePresent: 'Evidência presente',
    availableToExplore: 'Disponível para explorar',
    goTo: 'Ir para {section}',
    downloadReceipt: 'Baixar o comprovante público da cooperativa',
    saveReload: 'Salvar e recarregar o local de trabalho com segurança',

    autoLabel: 'Demonstração automática fictícia',
    autoRunning:
      'Demonstração individual automática: funções fictícias escolhem, recusam e revogam o compartilhamento. Saídas reais da planta simulada contam como entrega.',
    autoIdle:
      'A temporada cooperativa roda de forma autônoma por padrão. Assuma quando quiser. A vez de cada participante é sempre manual.',
    autoManual:
      'Você pode deixar funções individuais fictícias demonstrarem a temporada ou continuar fazendo as escolhas você mesmo.',
    skipGuide: 'Pular o guia e rodar a demonstração fictícia',
    pauseDemo: 'Pausar a demonstração automática',
    keepManual: 'Manter as decisões manuais',

    demoRunningLabel: 'Demonstração fictícia em andamento',
    autonomousSeason: 'Temporada cooperativa autônoma',
    takeOver: 'Assumir a temporada cooperativa',
    autonomousSeasonDetail:
      'Funções cooperativas fictícias tomam as decisões desta temporada enquanto o moinho opera. Assuma para decidir você mesmo no painel Sistema de Autonomia Bilateral (BAS); o turno continua.',
    takeOverCompact: 'Temporada cooperativa em andamento: assumir',
  },
});
