import { defineMessages } from '../i18n';
import type { HistoryNote } from './types';

type Copy = Pick<HistoryNote, 'title' | 'brief' | 'article'>;

const portuguese: Record<string, Copy> = {
  'history-first-grain': {
    title: 'Os primeiros grãos',
    brief:
      'Antes de o Egito ter reis, agricultores do vale do Nilo cultivavam trigo emmer e cevada e os moíam à mão em mós de vaivém.',
    article:
      '## Emmer, cevada e a mó de vaivém\n\nAntes de o Egito ter reis, os agricultores do vale do Nilo já cultivavam dois cereais: o emmer, um trigo de grãos vestidos, e a cevada. O pão e a cerveja feitos com eles se tornaram a base da alimentação egípcia. Em Hierakonpolis, no período pré-dinástico, resíduos em grandes cubas de fermentação indicam o uso de emmer maltado e triturado, com uma proporção menor de cevada.\n\nO emmer dava trabalho. Suas cascas aderem ao grão, que precisava ser umedecido e pilado, seco, joeirado e peneirado antes mesmo de poder ser moído. A moagem era feita em uma mó de vaivém: uma pedra inferior plana sobre a qual se esfregava uma pedra menor, para a frente e para trás, sobre os grãos. Era um trabalho lento, feito de joelhos, e partículas das pedras acabavam no pão e desgastavam os dentes de quem o comia.\n\nSeu estatuto está assinado. Cada lote recebido, banco de rolos e plansifter deste moinho descende daquela pedra e daquela mão de mó. A tarefa continua a mesma: separar a farinha da casca, com limpeza e em quantidade.',
  },
  'history-grinding-statues': {
    title: 'A moagem esculpida em pedra',
    brief:
      'Tumbas do Reino Antigo guardavam pequenas figuras de calcário de servos moendo grãos, para que os mortos nunca ficassem sem pão.',
    article:
      '## Servos para a eternidade\n\nNo Reino Antigo, egípcios ricos colocavam pequenas estátuas de servos em suas tumbas. As figuras se ajoelhavam diante de mós, amassavam massa, cuidavam dos fornos e coavam cerveja. Tinham uma finalidade prática: cuidar da produção de alimentos para os mortos na outra vida, para que o dono da tumba nunca passasse fome.\n\nA moagem de grãos é uma das cenas mais comuns. O Metropolitan Museum of Art guarda uma figura de calcário pintado, Servant Grinding Grain, da segunda metade da Quinta Dinastia, provavelmente da região de Giza. Ela trabalha em uma mó de vaivém, com o mesmo movimento para a frente e para trás usado pelos primeiros agricultores do Nilo.\n\nNenhuma inscrição registra seu nome. As estátuas representam o trabalho que sustentava todos os grandes Estados da época: longas horas de moagem, por mulheres e homens, para transformar grãos em farinha, um punhado de cada vez.\n\nO Grande Programa terminou. Qualquer que tenha sido a medalha, a tonelagem do seu registro de expedição exigiria muito mais de uma vida inteira de alguém moendo de joelhos. Hoje os rolos fazem esse trabalho; as figuras nas tumbas lembram quem o fez primeiro.',
  },
  'history-old-kingdom-bakeries': {
    title: 'Pão para os construtores das pirâmides',
    brief:
      'Ao sul da Esfinge, arqueólogos encontraram as padarias que alimentavam os trabalhadores da era das pirâmides de Giza.',
    article:
      '## O Muro do Corvo\n\nCerca de 400 metros ao sul da Esfinge fica um assentamento conhecido pelo nome árabe Heit el-Ghurab, o Muro do Corvo, em referência a um enorme muro de pedra em sua extremidade norte. Escavado desde o fim dos anos 1980 pela Ancient Egypt Research Associates, sob a direção de Mark Lehner, ele data dos reinados de Khafre e Menkaure, na Quarta Dinastia. Ali viviam e se alimentavam pessoas que trabalhavam nos complexos das pirâmides.\n\nPadarias apareceram na escavação de 1991 da equipe, e outras foram identificadas desde então, muitas delas em grandes edifícios de caráter industrial. O pão era assado em formas cônicas de cerâmica chamadas bedja: as formas eram aquecidas, enchidas de massa e colocadas em valas rasas no chão, com brasas ao redor. Em alguns depósitos, fragmentos dessas formas constituem a maior parte da cerâmica.\n\nAlimentar tantos trabalhadores exigia planejar a moagem, o preparo do pão e as entregas como qualquer outra parte da obra.\n\nFaltam dois turnos para o Grande Programa. Nove turnos, vinte mil quilogramas e nenhum saco abaixo do padrão. Como os padeiros de Giza, você precisa entregar volume sem deixar a qualidade cair.',
  },
  'history-nilometer': {
    title: 'A leitura do rio',
    brief:
      'Os nilômetros do Egito mediam a altura da cheia do Nilo, que permitia prever a colheita e definir o imposto.',
    article:
      '## O nilômetro\n\nA colheita do Egito dependia da cheia anual do Nilo. Se fosse baixa demais, os campos ficavam sem água; se fosse alta demais, aldeias e diques eram arrastados. Para saber o que vinha pela frente, os egípcios construíram nilômetros: medidores graduados em côvados, na forma de uma coluna marcada, uma escadaria que descia até o rio ou um poço profundo alimentado por um canal.\n\nO nilômetro em escadaria da ilha de Elephantine, em Aswan, é o mais conhecido. Durante boa parte da história egípcia, Elephantine marcava a fronteira sul, sendo o primeiro lugar onde se podia medir a subida das águas. Na ilha de Roda, no Cairo, ainda existe um nilômetro construído em 861 d.C.\n\nAs leituras tinham uma segunda utilidade. Como a altura da cheia indicava o tamanho da colheita, ela servia para definir o imposto devido pelos agricultores. Uma previsão também era um orçamento, e uma cheia baixa significava um ano de escassez.\n\nSuas previsões e seus anos agrícolas funcionam da mesma forma. Uma previsão indica um perigo, uma probabilidade e um turno; um ano seco aparece nos lotes do recebimento. Como a leitura de um nilômetro, essas informações só têm valor se você agir antes que a falta chegue.',
  },
  'history-nomarchs': {
    title: 'Os governadores dos nomos',
    brief:
      'No fim do Reino Antigo, governadores provinciais tornaram seus cargos hereditários e o poder se afastou do rei.',
    article:
      '## Nomos e nomarcas\n\nO Egito antigo era dividido em províncias que os gregos mais tarde chamaram de nomos; o funcionário responsável por uma delas costuma ser chamado de nomarca, embora muitos estudiosos hoje prefiram a palavra mais simples, governador. Um governador administrava sua província em nome do rei.\n\nPerto do fim do Reino Antigo, o equilíbrio mudou. Os governos provinciais se tornaram hereditários: famílias os mantinham por gerações, construíam suas tumbas nas próprias províncias em vez de perto do rei, formavam suas próprias forças e enfrentavam rivais locais. Depois do longo reinado de Pepi II, na Sexta Dinastia, o Estado central se fragmentou em poderes regionais concorrentes, na época que os historiadores chamam de Primeiro Período Intermediário.\n\nHoje, os historiadores tendem a ver esse período como uma época de mudança, em vez de simples colapso. Mas a autoridade conquistada pelas províncias não foi fácil de recuperar.\n\nVocê delegou autoridade ao parceiro de IA. Diferentemente do cargo de um nomarca, essa autoridade mantém limites: toda iniciativa fica registrada com sua justificativa, e as reversíveis podem ser desfeitas.',
  },
  'history-domesday-mills': {
    title: 'Os moinhos de Domesday',
    brief:
      'O grande levantamento de William the Conqueror, em 1086, contou milhares de moinhos por toda a Inglaterra.',
    article:
      '## Um reino contado\n\nVinte anos depois da conquista normanda, William the Conqueror ordenou um levantamento das terras que governava. Seus resultados, concluídos em 1086 e mais tarde chamados de Domesday Book, registravam quem detinha cada domínio e quanto ele valia, incluindo prados, bosques, pesqueiros e moinhos.\n\nOs moinhos aparecem por toda parte. As contagens dos historiadores vão de cerca de cinco mil e seiscentos a mais de seis mil, e mesmo o menor número é considerado incompleto, porque o levantamento não abrange tudo. Quase todos eram moinhos de grãos movidos a água: os moinhos de vento ainda não haviam chegado à Inglaterra, e alguns locais talvez usassem animais. Cada moinho era registrado com seu valor, pois gerava renda para quem o detinha.\n\nDomesday era uma avaliação feita para que o rei soubesse o que cada propriedade devia.\n\nVocê acaba de fechar seu primeiro relatório de turno. É o seu pequeno Domesday: o que entrou, o que saiu, quanto cada linha rendeu e quanto custou. Leia-o como o registro que sustenta suas próximas decisões.',
  },
  'history-watermills': {
    title: 'Rodas na água',
    brief:
      'Um engenheiro romano descreveu o moinho de água com engrenagens e, perto de Arles, dezesseis rodas moíam grãos em uma única encosta.',
    article:
      '## Vitruvius e Barbegal\n\nO arquiteto e engenheiro romano Vitruvius, escrevendo no fim do século I a.C., fez a primeira descrição técnica de um moinho de água. Uma roda vertical girava em um eixo horizontal, movida pela corrente que passava por baixo dela. No eixo, uma roda dentada em forma de tambor se engrenava com uma roda horizontal maior, que fazia a mó girar. Os moinhos de água estavam entre as primeiras fontes de energia que dispensavam a força muscular de pessoas ou animais.\n\nEm Barbegal, perto de Arles, no sul da França, engenheiros romanos levaram a ideia à escala industrial. Um aqueduto alimentava dezesseis rodas de água dispostas em duas fileiras paralelas de oito, descendo uma encosta íngreme, cada uma acionando seu próprio moinho. O complexo data do século II d.C. e costuma ser chamado de primeira tentativa europeia de criar um conjunto de máquinas em escala industrial.\n\nA água forneceu energia aos moinhos por quase dois mil anos. Também era seu perigo mais antigo: um rio em cheia podia levar a roda, o canal e o edifício.\n\nUma chuva intensa cai sobre o local. A mesma água que antes movia as mós agora ameaça o pátio, a doca de recebimento e as entregas na estrada.',
  },
  'history-windmills': {
    title: 'O moinho de poste',
    brief:
      'Os primeiros moinhos de vento da Inglaterra, registrados desde a década de 1180, eram moinhos de poste, cujo corpo inteiro girava para enfrentar o vento.',
    article:
      '## De frente para o vento\n\nOs moinhos de vento chegaram à Inglaterra cerca de um século depois de Domesday. Os registros escritos começam na década de 1180; um dos primeiros, de 1185, trata de um moinho em Weedley, Yorkshire. Esses primeiros exemplares eram moinhos de poste.\n\nUm moinho de poste equilibra todo o seu corpo, com as velas, as engrenagens e as mós, sobre um único grande poste vertical. O vento no noroeste da Europa muda de direção com frequência, por isso o moleiro precisava virar o moinho inteiro para enfrentá-lo, empurrando uma longa haste traseira que chegava até o chão. Os primeiros postes eram fincados em montes de terra; mais tarde, os moinhos passaram a se apoiar em uma armação de madeira, muitas vezes abrigada por uma construção circular na base.\n\nO moinho de poste libertou a moagem das margens dos rios. Um moinho podia ficar em qualquer elevação exposta, onde houvesse grãos para moer e vento para movê-lo.\n\nVocê instalou uma turbina eólica. A escolha mais antiga do moinho continua a mesma: o vento é gratuito, mas sopra quando quer, e a unidade precisa estar pronta para aproveitá-lo e seguir funcionando sem ele.',
  },
  'history-millwrights': {
    title: 'Os construtores de moinhos',
    brief:
      'Construtores de moinhos faziam rodas, engrenagens e eixos à mão, e de seu ofício vieram os primeiros engenheiros.',
    article:
      '## Engenheiros antes do nome\n\nPor séculos, o construtor de moinhos projetava e construía o moinho inteiro: a roda de água ou as velas, as engrenagens, os eixos e as mós. Seu ofício costuma ser considerado o precursor da engenharia mecânica moderna, e dele vieram dois dos grandes engenheiros britânicos do século XVIII.\n\nJames Brindley tornou-se aprendiz de um construtor de moinhos aos dezessete anos e ganhou fama reparando e melhorando máquinas. O Duke of Bridgewater então o contratou para transportar carvão de suas minas em Worsley até Manchester. O Bridgewater Canal, aberto em 1761, fez de Brindley um dos principais engenheiros de canais de sua época.\n\nJohn Smeaton construía modelos em escala de rodas de água e moinhos de vento e media seu desempenho. Seu artigo sobre o tema ganhou a Copley Medal da Royal Society em 1759. Mais tarde, adotou o título de engenheiro civil para distinguir consultores civis de engenheiros militares, e costuma ser chamado de pai da engenharia civil.\n\nVocê contratou um prestador de serviços. Suas características são seu histórico: o que economiza, o que arrisca e em quanto tempo termina. Escolha como um dono de moinho escolhia seu construtor.',
  },
  'history-oliver-evans': {
    title: 'O moinho que funcionava sozinho',
    brief:
      'Na década de 1780, em Delaware, Oliver Evans construiu um moinho de farinha em que os grãos iam do recebimento ao barril quase sem trabalho manual.',
    article:
      '## Oliver Evans\n\nNa década de 1780, Oliver Evans decidiu eliminar o trabalho mais pesado do moinho de seus irmãos em Red Clay Creek, Delaware. Elevadores de canecas levavam os grãos ao topo do edifício. Transportadores helicoidais os conduziam adiante. Uma máquina que ele chamou de hopper boy, um ancinho que girava lentamente, espalhava o produto quente das mós para esfriar e secar antes da peneiração, tarefa antes feita com pás. A água movia toda a sequência, e os grãos passavam de um processo a outro sem serem carregados.\n\nEm 1790, Evans recebeu a terceira patente concedida sob a nova lei de patentes dos Estados Unidos. Em 1795, publicou The Young Mill-Wright and Miller’s Guide, que explicava em detalhes seu sistema e a prática da moagem. A obra teve quinze edições até 1860 e tornou-se o manual de referência dos moleiros americanos.\n\nA automação mudou o trabalho do moleiro, que passou do transporte de cargas à supervisão, regulagem e manutenção.\n\nSeu moinho agora é distrital. Os transportadores, elevadores e pontos de transferência que o fazem funcionar descendem do fluxo contínuo de Evans.',
  },
  'history-albion-mills': {
    title: 'O incêndio dos Albion Mills',
    brief:
      'O grande moinho de farinha a vapor de Londres, uma maravilha de sua época, foi destruído por um incêndio em 1791.',
    article:
      '## Vapor no Tâmisa\n\nOs Albion Mills ficavam na ponta sul da Blackfriars Bridge, em Southwark, Londres. Matthew Boulton os planejou a partir de 1783, John Rennie projetou as máquinas de moagem, e motores a vapor de Boulton e Watt acionavam vinte pares de mós. Concluídos em 1786, foram o primeiro moinho comercial de farinha movido a vapor da Grã-Bretanha e foram celebrados como uma maravilha industrial da época.\n\nNa madrugada de 2 de março de 1791, começou um incêndio. Em cerca de duas horas, o interior do edifício foi destruído. A causa nunca foi oficialmente estabelecida. Muitos suspeitaram de incêndio criminoso provocado por moleiros rivais ou trabalhadores que temiam a concorrência. A estrutura queimada permaneceu à beira do rio por anos antes de ser demolida.\n\nO incêndio mostrou o que significava concentrar a produção: quando um grande moinho queimava, toda a sua produção desaparecia de uma vez.\n\nHá um incêndio nos dutos de extração. O sistema de segurança parou a produção e as empilhadeiras. Ninguém está em perigo. Apague o fogo, limpe os dutos e depois investigue o que permitiu que ele começasse.',
  },
  'history-roller-milling': {
    title: 'Os rolos de Budapest',
    brief:
      'Na década de 1870, engenheiros de Budapest substituíram as mós por rolos de ferro fundido coquilhado e mudaram a moagem no mundo inteiro.',
    article:
      '## Moagem gradual na Hungria\n\nNo século XIX, Budapest tornou-se uma das grandes cidades moageiras do mundo. Os moleiros húngaros praticavam a moagem gradual: em vez de transformar o trigo em farinha em uma única passagem, quebravam-no aos poucos, peneirando e remoendo repetidamente para extrair a farinha mais branca.\n\nOs rolos se adequavam melhor ao método do que as mós. O moinho de rolos de Friedrich Wegmann usava rolos de porcelana, que eram frágeis. A fábrica Ganz, em Buda, já conhecida pelo ferro fundido coquilhado, passou a produzir rolos desse material: duros, resistentes ao desgaste e ranhurados para quebrar o grão. Sob András Mechwart, que dirigiu Ganz após a morte de seu fundador em 1867, a empresa comprou a patente de Wegmann, aperfeiçoou o projeto e vendeu moinhos de rolos pelo mundo durante a década de 1870 e depois dela.\n\nNas décadas seguintes, os moinhos de rolos passaram a substituir as mós nos grandes moinhos comerciais da Europa e da América do Norte.\n\nSeu moinho agora é regional. Seus bancos de rolos são herdeiros dos rolos de Budapest: a mesma redução gradual, os mesmos pares de cilindros de ferro, operados com uma precisão que Mechwart só podia almejar.',
  },
  'history-plansifter': {
    title: 'O plansifter',
    brief:
      'Carl Haggenmacher, moleiro de Budapest, patenteou o plansifter no fim da década de 1880: peneiras empilhadas em movimento circular horizontal.',
    article:
      '## Peneiras empilhadas\n\nA redução gradual criou um novo problema. Cada passagem pelos rolos precisava ser peneirada, e as máquinas de peneiração da época, cilindros giratórios revestidos de tecido, eram volumosas e consumiam muita energia.\n\nCarl Haggenmacher, nascido em Winterthur, na Suíça, em 1835, trabalhou como moleiro em Budapest e patenteou várias invenções para a moagem. A mais importante foi o plansifter, cuja patente original ele apresentou em 1887. Em vez de um cilindro giratório, o equipamento empilhava peneiras planas em uma caixa e as movia em um plano horizontal, de modo que o produto percorresse cada peneira e o material fino caísse para a seguinte.\n\nO plansifter fazia o mesmo trabalho em menos espaço e com menos energia, e seus descendentes continuam sendo as máquinas de peneiração habituais nos moinhos de farinha de hoje.\n\nVocê instalou uma modernização do plansifter. Os plansifters do seu andar superior seguem o projeto de Haggenmacher, aperfeiçoado ao longo de mais de um século: peneiras empilhadas, movimento giratório e uma separação que decide a qualidade de cada saco produzido abaixo.',
  },
  'history-washburn-a': {
    title: 'A explosão do Washburn A',
    brief:
      'Em 2 de maio de 1878, a poeira de farinha explodiu dentro do Washburn A Mill, em Minneapolis, matando dezoito trabalhadores.',
    article:
      '## Poeira é combustível\n\nO Washburn A Mill abriu em 1874 à beira do rio em Minneapolis e estava entre os maiores moinhos de farinha dos Estados Unidos. Na noite de 2 de maio de 1878, pouco depois da chegada da equipe noturna, uma série de explosões o destruiu. Todos os catorze homens que estavam dentro morreram, e o fogo se espalhou para os moinhos vizinhos Diamond e Humboldt, matando mais quatro. Dezoito trabalhadores morreram.\n\nNo inquérito, o gerente do moinho atribuiu a tragédia à combustão rápida da poeira de farinha, e dois professores da University of Minnesota depois confirmaram a hipótese em experimentos. Concluíram que duas mós funcionando sem grãos haviam produzido uma faísca que incendiou a poeira no ar.\n\nO desastre mudou o setor. O A Mill reconstruído de Washburn, já em funcionamento em 1880, tinha nova ventilação para impedir o acúmulo de poeira, e dispositivos que passaram a ser chamados de coletores de pó se espalharam por outros moinhos. As ruínas do moinho reconstruído hoje abrigam o Mill City Museum.\n\nA pressão do seu filtro de pó está subindo. Esse alarme existe por causa de 1878. Um filtro bloqueado representa poeira que deveria estar em um saco e está no ar.',
  },
  'history-grain-elevator': {
    title: 'O primeiro elevador de grãos',
    brief:
      'Em 1842, Joseph Dart e Robert Dunbar construíram um elevador de grãos a vapor em Buffalo, no estado de New York.',
    article:
      '## Grãos sem sacos\n\nNo início do século XIX, os grãos que chegavam a Buffalo em navios dos Grandes Lagos eram descarregados à mão, em barris e sacos. O comerciante Joseph Dart e o engenheiro Robert Dunbar decidiram mecanizar a transferência.\n\nUsando os elevadores de canecas de Oliver Evans como modelo, construíram um elevador a vapor em 1842. Sua perna marítima, um transportador de canecas baixado ao porão de um navio, recolhia os grãos a granel e os levava ao topo de uma torre, de onde podiam ser pesados, armazenados e carregados para seguir viagem. A construção começou em 1842, e o elevador entrou em serviço em 1843.\n\nFuncionou tão bem que outros copiaram a ideia ao longo do cais. No fim da década de 1840, Buffalo tinha dez elevadores. Em cerca de quinze anos, havia se tornado um dos maiores portos de grãos do mundo, e a movimentação a granel substituiu o saco.\n\nVocê recebeu sua primeira entrega. A moega, o elevador e o silo que ele abastece seguem a ideia de Dart e Dunbar: grãos soltos, sempre em movimento e pesados na entrada.',
  },
  'history-falling-number': {
    title: 'O número de queda',
    brief:
      'Um teste sueco do fim da década de 1950 cronometra a queda de um agitador para detectar danos por germinação nos grãos.',
    article:
      '## Cronometrando uma queda\n\nQuando chove sobre trigo maduro, os grãos podem começar a germinar na espiga. A germinação produz grandes quantidades de alfa-amilase, enzima que decompõe o amido. A farinha de grãos germinados produz massas pegajosas e pães de baixa qualidade, e até poucos grãos muito germinados podem afetar um lote inteiro.\n\nNo fim da década de 1950, Sven Hagberg e Harald Perten, do Swedish Institute for the Crafts and Industries, desenvolveram um teste simples. Grãos moídos e água são aquecidos em um tubo e agitados; depois, um agitador é solto para atravessar a suspensão. O tempo que ele leva para chegar ao fundo, em segundos, é o número de queda. Mais enzima significa uma suspensão menos viscosa, uma queda mais rápida e um número menor.\n\nUm número de queda baixo alerta para danos por germinação. O método tornou-se um padrão internacional e continua em uso no comércio de grãos e em moinhos de farinha do mundo inteiro.\n\nO número de queda é uma das leituras de CQ do seu laboratório, medido nos lotes em teste. Acompanhe-o sempre que a colheita tiver enfrentado tempo úmido, sobretudo em um ano agrícola com germinação: ele revela danos que você não consegue identificar só de olhar os grãos.',
  },
  'history-grain-moisture': {
    title: 'Manter os grãos secos',
    brief:
      'Os grãos só ficam armazenados com segurança quando secos, e os moleiros devolvem água a eles de propósito logo antes da moagem.',
    article:
      '## Umidade no armazenamento e nos rolos\n\nO grão está vivo, e o grão úmido continua ativo. Acima de aproximadamente quatorze a quatorze e meio por cento de umidade, o trigo armazenado corre risco de aquecimento, mofo e ácaros. Orientações do Reino Unido observam que o crescimento de mofo e a reprodução de ácaros cessam quando o ar ao redor do grão fica abaixo de sessenta e cinco por cento de umidade relativa, condição que grãos secos e mantidos frios conseguem sustentar. À mesma umidade, grãos mais frios ficam mais seguros; por isso, busca-se secar e resfriar a colheita rapidamente.\n\nAinda assim, os moleiros depois devolvem água aos grãos de propósito. Antes da moagem, o trigo é condicionado: umedecido e deixado em repouso para tornar o farelo mais resistente e o endosperma interno mais macio. O farelo resistente se separa do endosperma de forma limpa, em vez de se fragmentar na farinha.\n\nAssim, a umidade é controlada duas vezes: mantida baixa para o armazenamento e depois elevada a um nível preciso para os rolos.\n\nEste é um ano agrícola úmido. Os lotes chegam mais úmidos que de costume, e grãos úmidos sem condicionamento prejudicam a qualidade. O condicionamento ou um secador elimina a penalidade.',
  },
  'history-grain-drying': {
    title: 'Secagem por máquina',
    brief:
      'A colheitadeira combinada eliminou as semanas de secagem dos grãos no campo, que então precisaram ser secos por máquina.',
    article:
      '## Dos feixes ao secador\n\nDurante a maior parte da história, os cereais cortados secavam no campo. Os feixes eram agrupados em medas, com as espigas fora do chão, e ficavam ali por dias ou semanas antes do transporte e da debulha. Um verão chuvoso podia fazê-los germinar onde estavam.\n\nA colheitadeira combinada corta e debulha em uma única passagem, eliminando esse intervalo de secagem. Os grãos vão direto para o tanque, muitas vezes mais úmidos do que seria seguro armazenar. Por isso, a colheita combinada em climas úmidos exigiu secagem mecânica. Em 1928, Roland Dudley comprou uma das primeiras colheitadeiras combinadas do Reino Unido para sua propriedade em Linkenholt, Hampshire, e descobriu que ela colhia mais depressa do que os grãos podiam secar. Ele projetou um secador, construído por E. R. and F. Turner, de Ipswich, por volta de 1929, que está entre os primeiros secadores mecanizados de grãos da Grã-Bretanha. A secagem em escala industrial se tornou rotineira depois da Segunda Guerra Mundial.\n\nA colheita úmida ficou para trás. No mundo real, máquinas como a de Dudley explicam por que hoje um verão chuvoso resulta em uma conta de secagem, em vez de uma safra perdida.',
  },
  'history-wet-harvest-1879': {
    title: 'O verão chuvoso de 1879',
    brief:
      'Em 1879, a chuva arruinou a colheita britânica, enquanto o trigo americano barato mantinha os preços baixos e aprofundava uma longa depressão agrícola.',
    article:
      '## Uma colheita arruinada\n\nO fim da década de 1870 trouxe uma sequência de colheitas ruins à Grã-Bretanha, e a de 1879 foi a pior. Um relato descreve chuvas que começaram no início da primavera e persistiram até o fim de setembro. A cevada fracassou nos solos pesados, e o trigo escureceu e encolheu na espiga.\n\nAntes, uma colheita ruim teria elevado os preços e amenizado o prejuízo. Em 1879, isso não aconteceu. As pradarias americanas haviam sido abertas ao arado, e navios a vapor baratos levavam seu trigo através do Atlântico. As importações cobriram a falta, os preços continuaram baixos, e os agricultores britânicos perderam tanto a colheita quanto o preço que poderia compensá-la.\n\nOs anos chuvosos esconderam por algum tempo a causa mais profunda. A grande depressão da agricultura britânica, geralmente situada entre 1873 e 1896, foi impulsionada pela queda dos preços dos grãos, e a terra nunca voltou a dar os lucros de antes.\n\nFaltam dois turnos para o desafio Colheita Úmida. Lotes úmidos, qualidade a proteger e seis mil quilogramas para expedir. A pergunta é a mesma de 1879: o que fazer com uma safra que o tempo já danificou?',
  },
  'history-assize-of-bread': {
    title: 'A Assize of Bread and Ale',
    brief:
      'Uma lei inglesa do século XIII fixava o preço do pão e fazia seu peso subir ou cair conforme o preço do trigo.',
    article:
      '## Pesando o pão\n\nA Assize of Bread and Ale foi uma lei inglesa do século XIII que regulava o preço, o peso e a qualidade do pão e da cerveja vendidos nas cidades e aldeias. Ela costuma ser chamada de primeira lei inglesa a regular a produção e a venda de alimentos.\n\nSeu método era incomum. O preço do pão de um farthing permanecia igual, e o que mudava era o peso: quando o trigo encarecia, o pão ficava mais leve; quando o trigo estava barato, o cliente recebia mais pão pela moeda. Tribunais locais fiscalizavam a lei, multando padeiros e cervejeiros que entregassem menos que a medida devida. Acredita-se que padeiros receosos de vender um pão leve demais acrescentassem um pão à dúzia, provável origem da expressão inglesa "a baker’s dozen", a dúzia de padeiro.\n\nA lei durou séculos. Foi alterada pelos Bread Acts de 1822 e 1836 e finalmente revogada em 1863.\n\nFaltam dois turnos para o desafio Inspeção. Três fechamentos sem problemas seguidos: testes de CQ aprovados, nenhuma falha de qualidade e nada grave pendente. Os padeiros medievais respondiam ao tribunal local; você responde ao laboratório e ao registro.',
  },
  'history-sale-of-food-act': {
    title: 'Alúmen e o analista público',
    brief:
      'Padeiros vitorianos clareavam o pão com alúmen, e a Sale of Food and Drugs Act 1875 colocou analistas públicos na investigação.',
    article:
      '## Comprovar o que há no pão\n\nNa Grã-Bretanha vitoriana, a adulteração de alimentos era comum. Padeiros acrescentavam alúmen ao pão para deixá-lo mais branco. O alúmen em si não era um veneno, mas dificultava a digestão. O médico Arthur Hill Hassall, principal reformador da área, encontrou alúmen em boa parte do pão que examinou na década de 1850.\n\nAs leis anteriores contra a adulteração de alimentos haviam se mostrado fracas. A Sale of Food and Drugs Act 1875 as substituiu. Ela exigia que autoridades locais nomeassem analistas com conhecimento e habilidade para examinar alimentos e medicamentos vendidos em seus distritos e permitia que inspetores obtivessem amostras e as enviassem para análise. Vender alimentos misturados com ingredientes que os tornassem nocivos à saúde passou a ser uma infração.\n\nA lei de 1875 definiu o modelo da legislação alimentar britânica por décadas: um analista independente, uma amostra e um certificado no lugar da palavra do cliente.\n\nSeu desafio Inspeção terminou. O teste em que você acabou de passar, ou falhar, descende desse sistema.',
  },
  'history-chorleywood': {
    title: 'O processo Chorleywood',
    brief:
      'Em 1961, pesquisadores britânicos descobriram como produzir pão rapidamente com trigo de menor teor de proteína e mudaram o que os moleiros precisavam fornecer.',
    article:
      '## Misturar em vez de esperar\n\nO pão tradicional exige tempo. A massa descansa por horas para que a fermentação desenvolva o glúten que retém o gás. Em 1961, pesquisadores da British Baking Industries Research Association, em Chorleywood, encontraram um atalho: alguns minutos de mistura mecânica intensa em alta velocidade, com mais fermento, um pouco de gordura e um melhorador oxidante, hoje geralmente vitamina C.\n\nO processo de panificação Chorleywood reduziu drasticamente o tempo de produção e teve um segundo efeito importante para os moleiros. A fermentação longa reduz parte da força do glúten; o desenvolvimento mecânico reduz menos, permitindo aos padeiros fazer pão aceitável com trigo de menor teor de proteína. Na época, poucos trigos britânicos tinham força suficiente para um bom pão, e a alternativa eram grãos importados caros da América do Norte. Chorleywood permitiu aos moleiros incluir mais trigo nacional na mistura de moagem.\n\nO processo se espalhou depressa. Em 2009, cerca de oitenta por cento do pão produzido no Reino Unido o utilizava.\n\nFaltam dois turnos para a Corrida dos Padeiros: doze mil quilogramas em seis turnos. Padeiros industriais querem farinha consistente, entregue no prazo e em volume.',
  },
  'history-bread-rationing': {
    title: 'Pão racionado',
    brief:
      'O pão nunca foi racionado na Grã-Bretanha durante a Segunda Guerra Mundial, mas foi racionado de 1946 a 1948.',
    article:
      '## Racionamento em tempos de paz\n\nDurante toda a Segunda Guerra Mundial, o pão na Grã-Bretanha ficou fora do racionamento. O governo considerava que racioná-lo prejudicaria o moral e, em vez disso, estendeu os estoques: a farinha branca foi proibida, e a farinha passou a ser moída com taxa de extração de oitenta e cinco por cento, como National Flour, aproveitando mais de cada grão no pão.\n\nA paz piorou a situação. Com escassez mundial de trigo, necessidade de alimentos para a Europa ocupada e finanças britânicas pressionadas, o governo trabalhista de Clement Attlee introduziu o racionamento de pão em 21 de julho de 1946, cerca de um ano depois do fim da guerra. Pão e farinha permaneceram racionados por dois anos, até julho de 1948.\n\nO racionamento inverte a demanda de um moinho: a questão passa a ser como repartir com justiça uma quantidade insuficiente.\n\nA Corrida dos Padeiros terminou. Qualquer que tenha sido o resultado, pediram que você fornecesse mais. É o problema melhor de se ter.',
  },
  'history-three-day-week': {
    title: 'A semana de três dias',
    brief:
      'No início de 1974, a escassez de carvão limitou as empresas britânicas a três dias de eletricidade por semana.',
    article:
      '## Energia contada em dias\n\nNo inverno de 1973 para 1974, mobilizações de mineiros de carvão e ferroviários restringiram severamente o fornecimento de carvão às usinas elétricas britânicas. O governo conservador de Edward Heath respondeu racionando a eletricidade.\n\nA partir de 1º de janeiro de 1974, usuários comerciais ficaram limitados a três dias consecutivos específicos de eletricidade por semana, sem poder ampliar a jornada nesses dias. Serviços essenciais, como hospitais, foram isentos, e a televisão encerrava a transmissão no início da noite. Fábricas e moinhos precisavam planejar a produção conforme os dias em que podiam operar, reduzindo o volume e alongando cada pedido.\n\nAs restrições foram suspensas em 7 de março de 1974, depois que uma eleição geral mudou o governo.\n\nFaltam dois turnos para o Inverno da Rede: oito mil quilogramas para expedir, com custo de energia por quilograma de no máximo oito centésimos. Você não ficará limitado a três dias, mas cada quilowatt-hora agora tem um preço visível. Use as cargas pesadas quando elas compensarem seu custo.',
  },
  'history-tide-mills': {
    title: 'O moinho de maré',
    brief:
      'Moinhos de maré armazenavam água do mar em um reservatório na maré alta e a usavam para moer na vazante.',
    article:
      '## Energia em um reservatório\n\nUm moinho de maré funciona como uma bateria carregada pela Lua. Uma barragem com comporta fecha uma enseada sujeita às marés. Quando a maré sobe, a água enche o reservatório por uma comporta de sentido único, que se fecha quando a maré começa a baixar. Quando a maré externa está baixa o suficiente, o moleiro libera a água armazenada pela roda e mói até esvaziar o reservatório.\n\nOs horários eram definidos pelas marés, por isso a jornada do moleiro mudava com elas. Em troca, a energia era previsível com meses de antecedência, de uma forma que vento e chuva nunca foram.\n\nO Woodbridge Tide Mill, em Suffolk, mostra quanto a ideia durou. O primeiro registro de um moinho de maré no local data de 1170. Ele operou comercialmente até 1957, quando fechou como o último moinho de maré em operação comercial na Grã-Bretanha. Desde então, foi restaurado e aberto ao público, e seu reservatório original de sete acres hoje é uma marina.\n\nO Inverno da Rede terminou. A lição do moinho de maré permanece: energia que pode ser armazenada pode ser usada no momento de menor custo.',
  },
  'history-rochdale': {
    title: 'Os pioneiros de Rochdale',
    brief:
      'Em 1844, um grupo de trabalhadores de Rochdale abriu uma loja cooperativa cujas regras se tornaram modelo para cooperativas no mundo inteiro.',
    article:
      '## Toad Lane, 1844\n\nA Rochdale Society of Equitable Pioneers foi fundada em 1844 por trabalhadores da cidade industrial de Rochdale, em Lancashire, muitos deles tecelões. Em 21 de dezembro de 1844, abriram uma loja no número 31 de Toad Lane, com um pequeno estoque de manteiga, açúcar, farinha e aveia moída. A tradição conta vinte e oito fundadores, embora as atas da própria sociedade nunca apresentem esse número.\n\nOutras cooperativas já haviam surgido e fracassado. Os pioneiros ficaram conhecidos por produtos honestos, sem adulteração, e estiveram entre os primeiros a devolver sobras aos cooperados como dividendo proporcional ao que cada um havia comprado.\n\nAs regras que estabeleceram ficaram conhecidas como Princípios de Rochdale. A International Co-operative Alliance as adotou em 1937 e as revisou em 1966 e 1995, quando se tornaram os sete princípios cooperativistas usados hoje, começando pela adesão voluntária e aberta e incluindo um cooperado, um voto. A loja de Toad Lane hoje é o Rochdale Pioneers Museum.\n\nSeu moinho agora é cooperativo. Seu fundo se forma com contribuições reinvestidas, a mesma ideia em outro ofício.',
  },
  'history-mondragon': {
    title: 'Mondragon',
    brief:
      'A partir de uma única oficina fundada em 1956, a cidade basca de Mondragón desenvolveu uma federação de cooperativas de trabalhadores.',
    article:
      '## Uma federação de cooperativas\n\nEm 14 de abril de 1956, na cidade basca de Mondragón, o padre José María Arizmendiarrieta abençoou a pedra fundamental de uma pequena empresa industrial chamada Ulgor. Seu nome foi formado pelos sobrenomes dos cinco fundadores, jovens engenheiros e técnicos que haviam estudado na escola técnica criada por ele. Seu primeiro estatuto como cooperativa foi aprovado em 1959.\n\nNaquele mesmo ano, Arizmendiarrieta ajudou a fundar um banco cooperativo, Caja Laboral Popular. Com sua própria fonte de crédito, o movimento podia criar e apoiar novas cooperativas sem esperar por investidores externos. Oficinas, uma escola e o banco cresceram e formaram uma família de cooperativas que hoje constitui a Mondragon Corporation, uma federação de cooperativas de trabalhadores e um dos maiores grupos empresariais da Espanha.\n\nA federação permitiu que cada cooperativa mantivesse sua autonomia de governo enquanto compartilhava financiamento, pesquisa e formação com as demais.\n\nSeu moinho agora é uma cooperativa federada. Como Mondragon, mantém suas próprias decisões e compartilha uma força maior.',
  },
  'history-mill-electrification': {
    title: 'Dos eixos aos fios',
    brief:
      'Antes, os moinhos acionavam todas as máquinas a partir de um motor, por eixos e correias; a eletricidade mudou isso no início do século XX.',
    article:
      '## O eixo de transmissão\n\nDurante boa parte da era industrial, um moinho tinha uma única fonte de energia: uma roda de água, uma turbina ou um motor a vapor. Ela girava um eixo de transmissão, uma longa barra rotativa suspensa no teto, e correias de couro ou algodão ligavam as polias do eixo a cada máquina. Se o motor parasse, o moinho inteiro parava. A disposição seguia o eixo, o sistema era barulhento e perigoso, e seus mancais precisavam de lubrificação constante.\n\nEntre aproximadamente 1880 e 1930, as fábricas passaram da transmissão por eixos e correias aos motores elétricos. No início, um único motor grande muitas vezes apenas substituía a fonte anterior e continuava girando os velhos eixos. Depois, motores separados passaram a acionar grupos de máquinas e, por fim, máquinas individuais, de modo que cada uma pudesse partir, parar e ser reparada por conta própria.\n\nO acionamento elétrico tornou os moinhos mais limpos e flexíveis e os vinculou à rede elétrica. Uma oscilação no fornecimento agora atingia todas as máquinas ao mesmo tempo.\n\nA tensão está caindo. Os motores desaceleram, os bancos de rolos perdem velocidade e a produção cai até a tensão se recuperar. Uma queda de tensão é o antigo ponto único de falha do eixo de transmissão, transferido para fora do edifício.',
  },
  'history-scada': {
    title: 'Controle supervisório',
    brief:
      'Sistemas SCADA permitiam supervisionar instalações distantes a partir de uma sala; controladores locais faziam o controle direto.',
    article:
      '## Por que "supervisório"\n\nSCADA significa supervisory control and data acquisition, ou controle supervisório e aquisição de dados. Sistemas desse tipo surgiram em redes elétricas, dutos e instalações de abastecimento de água, onde equipamentos se espalhavam por quilômetros e alguém precisava acompanhá-los de um único lugar.\n\nAs primeiras conexões eram lentas e pouco confiáveis. Em sistemas de água e esgoto das décadas de 1960 e 1970, a ligação entre a sala de controle e uma estação remota era considerada frágil demais para controlar de fato o processo a partir do centro. Por isso, o controle permaneceu local, em unidades terminais remotas e depois em controladores lógicos programáveis, enquanto a sala central supervisionava: reunia leituras, exibia os dados, muitas vezes em um grande painel sinóptico, e enviava comandos ocasionais. Essa divisão permanece. Os controladores locais mantêm o processo seguro por conta própria; a camada supervisória enxerga o conjunto e decide.\n\nA rede de controle está degradada. Sua visão SCADA pode estar desatualizada ou incompleta, mas os controles locais das máquinas continuam funcionando. Confie nas leituras de campo, trate a tela com cautela e restabeleça a conexão antes de fazer grandes mudanças.',
  },
  'history-flour-sacks': {
    title: 'Vestidos de sacos de farinha',
    brief:
      'Nos anos 1930, moleiros americanos estampavam seus sacos de algodão, sabendo que as famílias os transformariam em roupas.',
    article:
      '## O saco como tecido\n\nFarinha, ração e açúcar já foram vendidos em sacos de algodão. Nas fazendas americanas dos anos 1920 e durante a Grande Depressão, famílias reaproveitavam o tecido em vestidos, camisas, aventais, cortinas e brinquedos. Os fabricantes perceberam e incentivaram a prática: estamparam os sacos com cores e desenhos que as mulheres quisessem costurar, de modo que uma cliente pudesse escolher a farinha por causa do tecido.\n\nNa década de 1930, as empresas tratavam os sacos como parte de sua divulgação. Em 1933, a Textile Bag Manufacturers Association publicou o livreto Sewing with Cotton Bags e, no fim daquela década, a maioria das empresas usava tinta solúvel em água ou etiquetas de papel para que o nome da marca saísse na lavagem. O National Museum of American History guarda um vestido de saco de ração feito para um Cotton Bag Sewing Contest de 1959.\n\nDepois da Segunda Guerra Mundial, sacos de papel mais baratos substituíram os de tecido, e a maior parte da produção de sacos de tecido para ração havia terminado no início da década de 1960.\n\nHá falta de embalagens. Quando faltam sacos, o ensaque para, por mais farinha que esteja pronta. A embalagem faz parte do produto.',
  },
  'history-ergot': {
    title: 'Ergot e o fogo de Santo Antão',
    brief:
      'Um fungo no centeio causou epidemias medievais de fogo de Santo Antão, e a limpeza dos grãos continua sendo a defesa.',
    article:
      '## O veneno na espiga\n\nO ergot é um fungo, Claviceps purpurea, que infecta o centeio e outros cereais. No lugar de alguns grãos, ele produz estruturas duras, de roxo-escuro a preto, que contêm alcaloides tóxicos quando ingeridos. A exposição prolongada causa ergotismo. Em uma forma, provoca convulsões; na outra, interrompe o suprimento de sangue aos membros, que entram em gangrena.\n\nNa Europa medieval, onde os pobres comiam muito pão de centeio, o ergotismo ocorria em epidemias. A forma gangrenosa era chamada de fogo sagrado ou fogo de Santo Antão, nome geralmente associado aos monges da Ordem de Santo Antão, que se dedicavam a tratar os doentes. Sua causa permaneceu desconhecida por séculos.\n\nA defesa são grãos limpos. Como muitas estruturas do ergot têm tamanho e formato semelhantes aos de um grão, parte delas escapa às peneiras; mesas densimétricas e selecionadoras por cor funcionam melhor. Mesmo assim, lotes muito infectados devem ficar fora do moinho.\n\nUm lote de fornecedor está contaminado. Retenha-o, rastreie por onde passou e impeça que chegue aos rolos.',
  },
  'history-corn-laws': {
    title: 'As Corn Laws',
    brief:
      'De 1815 a 1846, a lei britânica barrava grãos estrangeiros para sustentar os preços, até Robert Peel revogá-la.',
    article:
      '## Proteger o preço do pão\n\nNo inglês britânico, corn significa todos os cereais. Depois das Guerras Napoleônicas, o Parlamento aprovou a Importation Act 1815, que barrava cereais estrangeiros até o preço do trigo nacional alcançar oitenta xelins por quarter. Os proprietários de terras mantinham seus preços altos; famílias trabalhadoras pagavam mais pelo pão.\n\nA lei foi abrandada com uma escala móvel de tarifas em 1828, mas a oposição cresceu. A Anti-Corn Law League, fundada em 1838 e liderada por figuras como Richard Cobden e John Bright, fez campanha pelo livre comércio de grãos em todo o país. Quando uma doença arruinou a safra de batatas da Irlanda em 1845 e a fome se seguiu, a necessidade de alimentos importados baratos tornou-se urgente.\n\nEm 1846, o primeiro-ministro conservador Sir Robert Peel conseguiu aprovar a revogação no Parlamento com apoio dos Whigs, contra a maioria de seu próprio partido, que se dividiu. A Grã-Bretanha avançou em direção ao livre comércio e, nas décadas seguintes, grãos importados baratos se tornaram a norma.\n\nEste é um ano agrícola abundante. A fartura é bem-vinda, mas reduz o preço dos grãos para todos ao mesmo tempo. Os preços, como as colheitas, se formam em muitos lugares além dos seus campos.',
  },
  'history-long-view': {
    title: 'Olhando a longo prazo',
    brief:
      'Da mó de vaivém ao moinho cooperativo federado: o que mudou na moagem e o que permanece.',
    article:
      '## O que muda e o que permanece\n\nA história começou no chão de uma casa no vale do Nilo, com uma mó de vaivém e uma mão de mó. Desde então, quase tudo na moagem mudou. Rodas de água assumiram o trabalho dos braços, como descreveu Vitruvius; os responsáveis por Domesday contaram milhares de moinhos; Oliver Evans pôs os grãos em movimento pelo moinho sem transporte manual; os rolos de Budapest substituíram as mós; o vapor e depois a eletricidade substituíram o rio. A propriedade também mudou, dos moinhos avaliados como renda de um senhor em Domesday às cooperativas de Rochdale e Mondragon, pertencentes às pessoas que atendem.\n\nAlgumas coisas continuam iguais. Os grãos precisam ser mantidos secos e limpos. Poeira sempre é combustível. Um pão precisa ter o peso que declara e conter apenas o que deve. E um moinho depende da confiança de quem compra dele.\n\nSua crônica está completa. O moinho continua funcionando, e o registro que você manteve agora faz parte de sua história. O que você escolheu preservar importou tanto quanto o que mudou.',
  },
};

const chinese: Record<string, Copy> = {
  'history-first-grain': {
    title: '最初的谷物',
    brief:
      '在埃及有王之前，尼罗河谷的农人就已种植二粒小麦与大麦，并用马鞍形石磨盘（saddle quern）手工碾磨。',
    article:
      '## 二粒小麦、大麦与石磨盘\n\n在埃及有王之前，尼罗河谷的农人已经在种植两种谷物：二粒小麦（emmer）——一种带壳小麦——以及大麦。用它们做成的面包与啤酒，成了埃及人的主食。在前王朝时期的希拉孔波利斯（Hierakonpolis），大型酿造缸中的残留物表明，当时所用的是发了芽、经碾碎的二粒小麦，掺有较少量的大麦。\n\n二粒小麦是难伺候的谷物。皮壳紧包着籽粒，先得润湿、舂捣，再晾干、扬簸、过筛，然后才谈得上研磨。研磨用的是马鞍形石磨盘：一块扁平的下石，上面用一块较小的手磨石在谷粒上来回搓磨。这是跪着干的慢活，石屑混进面包，日复一日地磨坏食者的牙齿。\n\n你的宪章已经签署。这座磨坊里接收的每一批来料、每一台磨辊机、每一道平筛，都是那块下石与那块手磨石的后裔。活计没有变：把面粉从麸壳里分出来，分得干净，分得够多。',
  },
  'history-grinding-statues': {
    title: '石像上的研磨者',
    brief: '古王国时期的墓室里放着研磨谷物的仆从石灰岩小像，好让逝者永远不缺面包。',
    article:
      '## 永世的仆从\n\n古王国时期，富有的埃及人会在墓中安放仆从小像。这些小人跪在石磨前、揉面、照看烤炉、滤啤酒。它们的用意很实际：在来世替逝者操持吃食，让墓主人永不挨饿。\n\n研磨谷物是最常见的场景之一。大都会艺术博物馆藏有一尊名为“磨谷仆从”（Servant Grinding Grain）的彩绘石灰岩像，出自第五王朝后半期，可能来自吉萨（Giza）一带。她在马鞍形石磨前劳作，来回搓磨的动作，与最早的尼罗河农人所用的并无二致。\n\n没有任何铭刻记下她的名字。这些石像所代表的，是当时每一个大国都赖以支撑的劳作：女人和男人经年累月地推磨，一把一把地把谷物变成面粉。\n\n“大工程计划”已经结束。无论它为你赢得了哪一枚奖牌，你发运记录上的吨位，若交给一个跪着推磨的人，远不止一辈子能完成。如今干这活的是磨辊；墓中的小像提醒着人们，是谁最先干的。',
  },
  'history-old-kingdom-bakeries': {
    title: '造金字塔者的面包',
    brief: '在狮身人面像以南，考古学家找到了为吉萨金字塔时代的劳作者供餐的面包坊。',
    article:
      '## 乌鸦之墙\n\n狮身人面像以南约 400 米处，有一处以阿拉伯语“Heit el-Ghurab”（乌鸦之墙）知名的聚落遗址，得名于它北缘的一道巨石墙。自 20 世纪 80 年代末起，它由马克·莱纳（Mark Lehner）主持的 Ancient Egypt Research Associates 发掘，年代属于第四王朝哈夫拉（Khafre）与孟卡拉（Menkaure）在位时期。在金字塔建筑群上劳作的人们就住在这里、在这里吃饭。\n\n面包坊在团队 1991 年的发掘中现身，此后又有更多被发现，其中不少是颇具工业气象的大型建筑。面包烤制使用称作 bedja 的锥形陶模：陶模先加热，填入面团，再放入地面的浅槽里，四周堆起炽热的炭火。在一些堆积层中，面包模的残片占了陶片的大半。\n\n要让规模如此庞大的劳力吃饱，制粉、烤焙与运送就得像工程的其他环节一样纳入计划。\n\n“大工程计划”还差两个班次。九个班次，20,000 千克，不许有一袋低于标准。和吉萨的面包师一样，人们要你的产量，也不许你松了质量。',
  },
  'history-nilometer': {
    title: '读河',
    brief: '埃及的尼罗尺测量尼罗河洪水的水位，据此预判收成、核定赋税。',
    article:
      '## 尼罗尺\n\n埃及的收成系于尼罗河一年一度的洪水。水位太低，田地浇不上水；太高，村庄与堤坝又会被冲毁。为了看清将要来的是什么，埃及人修建了尼罗尺（nilometer）：以腕尺刻度的量具，或是一根刻度石柱，或是一道直通河面的阶梯，或是一口由暗渠充水的深井。\n\n最有名的是阿斯旺埃勒凡泰尼（Elephantine）岛上阶梯式的尼罗尺。埃及历史上的大部分时间里，埃勒凡泰尼就是南界，上涨的洪水最先能在这里测得。在开罗的罗达（Roda）岛上，一座建于公元 861 年的尼罗尺至今犹存。\n\n读数还有第二种用途。洪水的高度预示收成的丰歉，于是被用来核定农人应缴的赋税。一份预测就是一本预算，洪水偏低就意味着荒年。\n\n你的预测与作物年如出一辙。预测道出危险、概率与班次；干旱年则显现在接收的批次里。正如尼罗尺的读数，二者的价值都在于赶在短缺到来之前照着它行动。',
  },
  'history-nomarchs': {
    title: '诺姆的治理者',
    brief: '古王国晚期，各省总督把职位变成世袭，权力渐渐离开国王。',
    article:
      '## 诺姆与诺姆长\n\n古埃及分为若干省，希腊人后来称之为“诺姆”（nome）；主管一省的官员通常被叫作“诺姆长”（nomarch），不过如今多数学者更爱用朴素的“总督”（governor）一词。总督代国王治理自己的省。\n\n到古王国末期，天平倾斜了。总督之职转为世袭：各家各姓代代相承，把坟墓修在本省而不修在王陵旁，豢养自己的武力，与地方对手相争。第六王朝佩皮二世（Pepi II）漫长统治之后，中央国家碎裂为互相争雄的地方势力，史家称之为第一中间期。\n\n今天的历史学家更倾向于把那段时期看作变革而非单纯的崩溃。但各省挣得的权柄，中央再想收回并不容易。\n\n你已把职权委托给 AI 伙伴。与诺姆长的权位不同，你的委托始终有边界：每一项主动行动都连同理由记入日志，可逆的随时可以撤销。',
  },
  'history-domesday-mills': {
    title: '《末日审判书》里的磨坊',
    brief: '征服者威廉 1086 年的大清查，在全英格兰数出了数千座磨坊。',
    article:
      '## 清点一个王国\n\n诺曼征服二十年后，征服者威廉下令清查他所统治的土地。这项完成于 1086 年、后来被称作《末日审判书》（Domesday Book）的成果，记下了每座庄园归谁持有、值多少钱，细到草甸、林地、渔场与磨坊。\n\n磨坊随处可见。历史学家数出的数目从约 5,600 座到 6,000 余座不等，即便取低值也被认为少计了，因为清查本身并不完备。这些几乎全是水力谷物磨坊：风磨尚未传到英格兰，个别地方或许役使牲畜。每座磨坊都连同价值一并登记，因为磨坊就是持有者的进项。\n\n《末日审判书》不是史书。它是一份估税清册，为的是让国王知道每一处产业应缴什么。\n\n你刚结出第一份班次报告。那就是你的小小《末日审判书》：进了什么，出了什么，每一行挣了多少、花了多少。照同样的方式去读它——它是你下一步决策所倚的记录。',
  },
  'history-watermills': {
    title: '水中之轮',
    brief: '一位罗马工程师描述了带齿轮的水磨；在阿尔勒附近，十六座水轮在同一面山坡上碾谷。',
    article:
      '## 维特鲁威与巴尔贝加尔\n\n罗马建筑师兼工程师维特鲁威（Vitruvius）在公元前 1 世纪末的著作里，第一次从技术上描述了水磨。一只立轮装在水平轮轴上，由轮下流过的河水推动；轴上的一只齿轮鼓与一只更大的水平齿轮相啮合，带动磨石。水磨属于最早一批不依赖人力畜力的动力来源。\n\n在法国南部阿尔勒（Arles）附近的巴尔贝加尔（Barbegal），罗马工程师把这一构想做到了工业规模。一道渡槽引水，驱动十六只水轮，分作平行的两列、每列八只，沿陡坡层层而下，各带一座磨。这组建筑建于公元 2 世纪，常被称为欧洲第一个工业规模的机器联合体尝试。\n\n将近两千年里，磨坊的动力都来自水。水也是最古老的祸患：一条涨水的河，能把水轮、水道连同厂房一并卷走。\n\n一场豪雨正落在厂区。当年推动磨石的，如今正是威胁场院、接收区和路上货物的那同一种水。',
  },
  'history-windmills': {
    title: '支柱磨',
    brief: '英格兰最早见于记载的风磨始于 1180 年代，是整座磨身都会转向迎风的支柱磨。',
    article:
      '## 迎风而转\n\n风磨在《末日审判书》之后约一个世纪传到英格兰。文字记载始于 1180 年代；最早的一条来自 1185 年，说的是约克郡威德利（Weedley）的一座磨。这些最早的磨都是支柱磨（post mill）。\n\n支柱磨把整个磨身——风翼、齿轮与磨石——支在单根粗大的立柱上。西北欧的风向多变，磨坊主只得推动一根垂到地面的长尾杆，把整座磨转过去迎风。早期的立柱埋在土墩里；后来的磨架在木支架上，支架外常罩着一圈底层圆棚。\n\n支柱磨把制粉从河岸边解放了出来。磨坊可以立在任何迎风的高地，只要有谷可磨、有风可用。\n\n你装上了风力发电机。磨坊最古老的取舍没有变：风是白来的，但它想什么时候来就什么时候来；工厂既得准备好接住它，也得准备好没有它照样运转。',
  },
  'history-millwrights': {
    title: '磨坊机匠',
    brief: '磨坊机匠手工打造水轮、齿轮与轮轴，最早的工程师正出自这一行。',
    article:
      '## 工程师一词出现之前的工程师\n\n几个世纪里，磨坊机匠就是从设计到建造包揽整座磨坊的人：水轮或风翼、齿轮、轮轴与磨石。这门行当常被称为现代机械工程的前身，英国 18 世纪的两位大工程师都出身于此。\n\n詹姆斯·布林德利（James Brindley）十七岁拜磨坊机匠为徒，以修理和改良机器扬名。布里奇沃特公爵（Duke of Bridgewater）随后雇他，把沃斯利（Worsley）矿上的煤运往曼彻斯特。1761 年通航的布里奇沃特运河，使布林德利跻身当时一流的运河工程师。\n\n约翰·斯米顿（John Smeaton）制作水轮与风磨的缩比模型，实测它们的效能。他论述此事的论文于 1759 年获得皇家学会科普利奖章。他后来自称“土木工程师”（civil engineer），以把民间顾问与军事工程师区分开，也因此常被称作土木工程之父。\n\n你雇下了一家承包商。他们的特质就是他们的履历：省下什么、冒什么险、收尾多快。挑他们，要像当年磨坊主挑磨坊机匠那样挑。',
  },
  'history-oliver-evans': {
    title: '自己运转的磨坊',
    brief: '18 世纪 80 年代的特拉华，奥利弗·埃文斯造出一座面粉厂，谷物从进厂到装桶几乎不假人手。',
    article:
      '## 奥利弗·埃文斯\n\n18 世纪 80 年代，奥利弗·埃文斯（Oliver Evans）决意去掉他兄弟们在特拉华州 Red Clay Creek 磨坊里最重的活。斗式提升机把谷物送上楼顶；螺旋输送机送它前行；一台他称作 hopper boy（料斗耙）的机器——一把缓缓旋转的耙——把磨石下来的温热物料摊开，让它在过筛前冷却、干燥，这活从前全靠木锨。水力驱动整条流程，谷物从一道工序走向另一道工序，再不用人扛。\n\n1790 年，埃文斯获得了美国新专利法下的第三号专利。1795 年，他出版《青年磨坊机匠与磨坊主指南》（The Young Mill-Wright and Miller’s Guide），详细讲解了他的体系与制粉实务。此书到 1860 年已印行十五版，成为美国磨坊主的标配手册。\n\n自动化没有取消磨坊主这个行当，只是把活计从搬运变成了看管、调校与修理。\n\n你的磨坊如今已是区级磨坊。它赖以运转的输送机、提升机与转运点，都溯源于埃文斯的连续料流。',
  },
  'history-albion-mills': {
    title: '阿尔比恩磨坊大火',
    brief: '伦敦那座轰动一时的蒸汽面粉厂，1791 年毁于大火。',
    article:
      '## 泰晤士河上的蒸汽\n\n阿尔比恩磨坊（Albion Mills）立在伦敦黑衣修士桥（Blackfriars Bridge）萨瑟克（Southwark）一侧的桥头。马修·博尔顿（Matthew Boulton）自 1783 年起擘画，约翰·伦尼（John Rennie）设计磨粉机械，博尔顿-瓦特蒸汽机驱动二十对磨石。磨坊 1786 年落成，是英国第一座蒸汽动力商用面粉厂，被誉为当时的工业奇观。\n\n1791 年 3 月 2 日清晨，火起了。约莫两个钟头，整座建筑焚毁一空。起因始终未有官方结论。许多人疑心是同业磨坊主、或是惧怕竞争的磨坊工人纵火。烧剩的空壳在河岸上立了多年，才被拆去。\n\n这场火让人看清了“集中”意味着什么：一座大磨坊烧掉，它的全部产出顷刻化为乌有。\n\n除尘管道里起了火。故障保护已叫停生产与叉车。没有人身处危险。先扑救，再清理管道，然后追问一句：是什么让它烧起来的。',
  },
  'history-roller-milling': {
    title: '布达佩斯磨辊',
    brief: '19 世纪 70 年代，布达佩斯的工程师以冷硬铸铁磨辊取代磨石，改写了全世界的制粉业。',
    article:
      '## 匈牙利的高度研磨法\n\n19 世纪，布达佩斯跻身世界制粉重镇。匈牙利磨坊主奉行高度研磨法（high milling）：不把小麦一遍磨成粉，而是逐步剥磨，反复筛理、反复重磨，取最白的粉。\n\n磨辊比磨石更合这套方法。弗里德里希·韦格曼（Friedrich Wegmann）的辊式磨用瓷辊，偏脆易碎。布达的甘茨（Ganz）工厂本就以冷硬铸铁闻名，改而生产冷硬铸铁磨辊：坚硬、耐磨，刻槽以轧裂谷粒。创始人 1867 年去世后执掌甘茨的安德拉什·梅赫瓦特（András Mechwart）买下韦格曼的专利，改良设计，自 19 世纪 70 年代起把辊式磨卖往世界各地，此后亦未停歇。\n\n此后数十年，辊式磨在欧洲与北美的大型商用磨坊里逐渐取代了磨石。\n\n你的磨坊如今已是区域磨坊。你的磨辊机是布达佩斯磨辊的传人：同样的逐级研磨，同样的成对铁辊，只是运转的精度，已非梅赫瓦特当年所能企及。',
  },
  'history-plansifter': {
    title: '平筛',
    brief:
      '布达佩斯磨坊主卡尔·哈根马赫在 19 世纪 80 年代末为平筛取得专利：层层相叠的筛面沿水平面回旋。',
    article:
      '## 层叠的筛面\n\n逐级研磨带来了新问题。物料每过一道磨辊都得筛理，而当时的筛理设备——蒙着布面的回转圆筛——笨重又费动力。\n\n卡尔·哈根马赫（Carl Haggenmacher）1835 年生于瑞士温特图尔（Winterthur），在布达佩斯做磨坊主，先后为多项制粉发明取得专利。最重要的一项是平筛（plansifter），原始专利于 1887 年申请。它不用回转圆筛，而是把一层层平面筛叠进一只箱框，让它们沿水平面回旋；物料横向走完每层筛面，细料便落向下层。\n\n平筛以更小的占地、更省的动力干同样的活，它的后裔至今仍是面粉厂里通用的筛理设备。\n\n你完成了平筛改造。顶层那些平筛承袭哈根马赫的设计，历经百余年的改良：层叠的筛面，回旋的运动，以及一道决定楼下每一袋面粉品质的分选。',
  },
  'history-washburn-a': {
    title: '沃什本 A 磨坊爆炸',
    brief: '1878 年 5 月 2 日，面粉粉尘在明尼阿波利斯的沃什本 A 磨坊内爆炸，十八名工人罹难。',
    article:
      '## 粉尘即是燃料\n\n沃什本 A 磨坊（Washburn A Mill）1874 年在明尼阿波利斯（Minneapolis）河畔投产，位居全美最大的面粉厂之列。1878 年 5 月 2 日晚，夜班工人刚到不久，一连串爆炸把它炸毁。当时在磨内的十四人全部遇难，大火又蔓延到邻近的 Diamond 与 Humboldt 磨坊，再夺四命。共十八名工人死亡。\n\n调查庭上，磨坊经理把祸因归于急速燃烧的面粉粉尘，明尼苏达大学的两位教授随后以实验证实了这一判断。他们认定：两扇空转的磨石迸出火星，点燃了空气中的粉尘。\n\n这场灾难改变了整个行业。沃什本重建的 A 磨坊到 1880 年已重新投产，加装了防止粉尘积聚的新通风系统；后来被称作“集尘器”的装置也随之推广到其他磨坊。重建磨坊的遗址如今是磨城博物馆（Mill City Museum）。\n\n你的除尘器压差正在升高。这个报警之所以存在，是因为 1878 年。堵塞的滤芯不只是小麻烦——那是本该进袋的面粉粉尘，跑进了空气里。',
  },
  'history-grain-elevator': {
    title: '第一座谷物提升塔',
    brief: '1842 年，约瑟夫·达特与罗伯特·邓巴在纽约州布法罗建起一座蒸汽动力谷物提升塔。',
    article:
      '## 不装袋的谷物\n\n19 世纪初，从五大湖船运抵布法罗（Buffalo）的谷物，要靠人手用桶和袋一桶桶卸下搬走。商人约瑟夫·达特（Joseph Dart）与工程师罗伯特·邓巴（Robert Dunbar）决意把这道搬运机械化。\n\n他们以奥利弗·埃文斯的斗式提升机为蓝本，于 1842 年建成一座蒸汽动力提升塔。它的“船用提升臂”（marine leg）——一条放进船舱的斗式输送机——把散粮从舱底舀出，送上塔顶，在那里过磅、入仓、继续装运。工程 1842 年动工，提升塔 1843 年投用。\n\n它好使得很，岸线上的同行纷纷仿建。到 19 世纪 40 年代末，布法罗已有十座提升塔。约莫十五年之内，它跻身世界最大的谷物港口之列，散粮作业取代了袋装。\n\n你收到了第一笔来货。受料坑、提升机与它灌满的筒仓，都是达特与邓巴的主意：谷物保持散态、保持流动，进厂即过磅。',
  },
  'history-falling-number': {
    title: '降落数值',
    brief: '20 世纪 50 年代末的一项瑞典检验，以一支搅拌棒的坠落计时，检出谷物的穗发芽损伤。',
    article:
      '## 为一次坠落计时\n\n雨落在成熟的小麦上，麦粒便可能在穗上发芽。发芽会大量产生 α-淀粉酶（alpha-amylase）——一种分解淀粉的酶。发芽谷物磨出的面粉发黏、烤不好面包，哪怕只有寥寥几粒严重发芽，也足以带累整批。\n\n20 世纪 50 年代末，瑞典工艺与工业研究所（Swedish Institute for the Crafts and Industries）的斯文·哈格贝里（Sven Hagberg）与哈拉尔德·佩尔滕（Harald Perten）搞出了一种简单的检验。研磨后的谷物与水在试管中加热搅拌，随后放开一根搅拌棒，任它坠过糊液。它落到管底的秒数，就是降落数值。酶越多，糊液越稀，坠得越快，数值越低。\n\n偏低的降落数值是穗发芽损伤的警报。这套方法成为国际标准，至今仍在全世界的谷物贸易与面粉厂中使用。\n\n降落数值是你质检实验室的一项读数，测自受检批次。收获时节天气湿，就要盯住它——穗发芽的作物年里头一桩要盯的就是它：它道出的损伤，光看谷子是看不出来的。',
  },
  'history-grain-moisture': {
    title: '让谷物保持干燥',
    brief: '谷物唯有干燥才能安全储存，而磨坊主偏偏在磨粉之前有意识地往回加水。',
    article:
      '## 仓中与辊上的水分\n\n谷物是活的，潮湿的谷物更闲不住。水分大致超过 14% 至 14.5%，储存中的小麦就有发热、霉变与生螨之虞。英国的指南指出，当谷粒周围的空气相对湿度低于 65% 时，霉菌生长与螨类繁殖都会停止，而干燥又保持低温的谷物恰能维持这一条件。同样的水分下，谷温越低越安全，所以谷仓总要尽快把收下来的谷物烘干、降温。\n\n可磨坊主随后又偏要往回加水。磨粉之前，小麦要经过调理（conditioning），也叫润麦（tempering）：着水后静置，让麸皮变得韧实、内里胚乳变得松软。韧实的麸皮能从胚乳上干净地剥离开来，而不是碎进面粉里。\n\n于是水分被控制了两回：储存时压低，上磨辊时再精确地提上来。\n\n今年是湿作物年。来料比往常更潮，湿谷不经调理就要搭上质量。调理或烘干能免掉这笔罚值。',
  },
  'history-grain-drying': {
    title: '机器烘干',
    brief: '联合收割机砍掉了谷物在田里晾晒的那几个星期，于是谷物只好改由机器烘干。',
    article:
      '## 从禾垛到烘干机\n\n历史上的大部分时间，割下的谷物都在田里干燥。禾捆相互倚立，堆成禾垛（stook），穗头离地，一放就是几天到几周，再运走脱粒。赶上多雨的夏天，它们可能就地发了芽。\n\n联合收割机一趟完成收割与脱粒，中间再无干燥的空当。谷物直接进粮箱，往往湿得超出可安全储存的程度。于是，潮湿气候里的联合收割离不开机械烘干。1928 年，罗兰·达德利（Roland Dudley）为他在汉普郡林肯霍尔特（Linkenholt）的庄园购入英国最早的一批联合收割机之一，发现它割得比谷子干得还快。他设计的烘干机由伊普斯威奇（Ipswich）的 E. R. and F. Turner 公司于 1929 年前后造出，属于英国最早的机械化谷物烘干机之列。二战之后，工业规模的烘干成了常规。\n\n湿收已经过去。在真实世界里，正因为有达德利这样的机器，如今一个多雨的夏天意味着一张烘干账单，而不是一季庄稼的损失。',
  },
  'history-wet-harvest-1879': {
    title: '1879 年的湿夏',
    brief: '1879 年，雨水毁了英国的收成，而廉价的美国小麦压着粮价，加深了漫长的农业萧条。',
    article:
      '## 毁掉的收成\n\n19 世纪 70 年代末，英国的收成接连不振，1879 年是最糟的一年。有记载说，那年的雨从早春下到九月下旬。大麦在黏重土壤上失收，小麦在穗上发黑、干缩。\n\n换作从前，歉收总会带来高价，多少补回损失。1879 年没有。美洲大草原已经开犁，廉价的轮船把那里的小麦运过大西洋。进口填上了缺口，价格依旧低迷，英国农人落得两手空空：庄稼没了，本可补偿庄稼的价钱也没了。\n\n多雨的年景一度遮住了更深的病根。英国农业大萧条——通常断代于 1873 至 1896 年——的动因正是谷价下落，土地再也没回到从前的利润。\n\n你的“湿收”试验还差两个班次。潮湿的批次、要保的质量、6,000 千克要发运。要回答的问题，正是 1879 年问过的那句：天气已经伤了的庄稼，你拿它怎么办？',
  },
  'history-assize-of-bread': {
    title: '面包与麦酒法令',
    brief: '13 世纪的一条英格兰法律定死面包的售价，让它的分量随麦价起落。',
    article:
      '## 称量面包\n\n《面包与麦酒法令》（Assize of Bread and Ale）是 13 世纪的英格兰法律，规范城镇乡村所售面包与麦酒的价格、分量与品质。它常被称为英格兰第一部规范食品生产与销售的法律。\n\n它的办法很特别。一法新（farthing）面包的价钱不动，动的是分量：麦价涨，面包变轻；麦价贱，一枚硬币换到的面包就多。地方法庭负责执法，短斤缺两的面包师与酿酒师要吃罚款。据说面包师怕面包偏轻，会在一打之外多送一个——英语短语 a baker’s dozen（面包师的一打，即十三个）多半由此而来。\n\n这条法律行了数百年。它经 1822 年与 1836 年的两部《面包法》（Bread Acts）修订，最终于 1863 年废除。\n\n你的“检查”试验还差两个班次。连续三次合格结班：质检检验项项通过，无质量失败，无严重事项悬而未决。中世纪的面包师面对的是庄园法庭（court-leet）；你面对的是实验室与记录。',
  },
  'history-sale-of-food-act': {
    title: '明矾与公共分析师',
    brief:
      '维多利亚时代的面包师用明矾给面包增白，《1875 年食品与药品销售法》把公共分析师推上了前台。',
    article:
      '## 查证面包里有什么\n\n维多利亚时代的英国，食品掺假司空见惯。面包师往面包里加明矾，好显得更白。明矾本身不是毒药，却妨碍消化。医生亚瑟·希尔·哈索尔（Arthur Hill Hassall）——该领域最重要的改革者——在 19 世纪 50 年代检视的面包中，相当一部分都验出了明矾。\n\n此前的几部《食品掺假法》（Adulteration of Food Acts）被证明软弱无力。《1875 年食品与药品销售法》（Sale of Food and Drugs Act 1875）取而代之。它责成地方当局任用具备学识与技术、能检验辖区内所售食品与药品的分析师，并允许检查员取样送检。售卖掺有致害成分的食品，从此成为罪行。\n\n1875 年法为英国食品法立下了沿用数十年的范式：一位独立的分析师、一份样品、一纸证书，取代顾客的一面之词。\n\n你的“检查”试验结束了。你刚刚通过、或是没能通过的那场检验，正是那套制度的后裔。',
  },
  'history-chorleywood': {
    title: '乔利伍德法',
    brief: '1961 年，英国研究人员找到用低筋小麦快速制面包的办法，也改写了磨坊主该供应什么。',
    article:
      '## 以搅拌代替等待\n\n传统面包要花时间。面团得静置数小时，靠发酵养成能兜住气体的面筋。1961 年，英国烘焙工业研究协会（British Baking Industries Research Association）在乔利伍德（Chorleywood）的研究人员找到一条捷径：几分钟剧烈的高速机械搅拌，多加酵母，添一点油脂和一种氧化性改良剂——如今通常用维生素 C。\n\n乔利伍德面包工艺把生产时间压缩了一大截，对磨坊主还有第二层影响。长时间发酵会损耗部分面筋强度；机械扩展损失得少，于是面包师用蛋白质较低的小麦也能做出合格的面包。当年英国小麦筋力够得上好面包的不多，另一条路是花大钱进口北美麦。乔利伍德法让磨坊主得以在配麦中多用本土小麦。\n\n它普及得很快。到 2009 年，英国所产面包约有 80% 用的是它。\n\n“面包房抢货潮”还差两个班次：六个班次，12,000 千克。工业化面包房要的是品质稳定、按时按量送到的面粉。',
  },
  'history-bread-rationing': {
    title: '配给中的面包',
    brief: '二战期间英国的面包从未配给，面包的配给偏偏发生在 1946 到 1948 年。',
    article:
      '## 和平年代里的配给\n\n整个二战期间，英国的面包一直未入配给。政府认定配给面包会挫伤士气，于是转而抻长供应：白面粉遭禁，面粉按 85% 的出粉率磨制，称“国家面粉”（National Flour），让更多麦粒进了面包。\n\n和平反倒更糟。世界小麦供应吃紧，被占领的欧洲还等着粮食，英国的财政捉襟见肘，克莱门特·艾德礼（Clement Attlee）的工党政府于 1946 年 7 月 21 日——战争结束约一年后——开始配给面包。面包与面粉在配给单上待了两年，直到 1948 年 7 月。\n\n配给把磨坊的需求倒了个个儿：不再是接下每一张订单，而是太少的东西怎样分才算公平。\n\n“面包房抢货潮”结束了。无论成绩如何，人家要你供的是更多，不是更少。这是较好的一种难题。',
  },
  'history-three-day-week': {
    title: '三日工作周',
    brief: '1974 年初，煤炭短缺迫使英国企业一周只能用三天电。',
    article:
      '## 论日供应的电力\n\n1973 到 1974 年的冬天，煤矿工人与铁路工人发动的工业行动使英国电厂的煤炭供应严重受限。爱德华·希思（Edward Heath）的保守党政府以电力配给作答。\n\n自 1974 年 1 月 1 日起，商业用户每周只能在指定的三个连续日子用电，且那几天也不得延长工时。医院等必要服务获得豁免，电视台早早收播。工厂与磨坊只得围着能开工的日子排产，产量一削，每张订单都拖长了。\n\n1974 年 3 月 7 日，一场大选换了政府之后，限制措施解除。\n\n“电网之冬”还差两个班次：发运 8,000 千克，每千克能耗成本不超过 0.08。你不会被砍到三天，但每一度电如今都有了看得见的价钱。重负荷，要让它们跑得值回电费。',
  },
  'history-tide-mills': {
    title: '潮汐磨坊',
    brief: '潮汐磨坊在涨潮时把海水蓄进池子，退潮时用它推磨。',
    article:
      '## 蓄在一池水里的能量\n\n潮汐磨坊像一块由月亮充电的电池。带闸门的堤坝拦住一处潮汐海湾。涨潮时，海水经单向闸门注入磨池；潮水将退，闸门即闭。待外面潮位落得够低，磨坊主便放蓄水过轮，一直磨到池水放空。\n\n作息由潮汐而非钟表定，磨坊主的工时便随潮挪动。作为交换，这股动力可以提前数月预知——风和雨从来不曾这样。\n\n萨福克郡（Suffolk）的伍德布里奇潮汐磨坊（Woodbridge Tide Mill）可见这想法流传之久。此地有潮汐磨坊的最早记载见于 1170 年。它作为产业一直运转到 1957 年，停业时是英国最后一座仍在营业的潮汐磨坊。此后它被修复并向公众开放，原先七英亩的磨池如今成了游艇码头。\n\n“电网之冬”结束了。潮汐磨坊的教训依然成立：能存起来的能量，就能挑最便宜的时候来用。',
  },
  'history-rochdale': {
    title: '罗奇代尔先锋',
    brief: '1844 年，一群罗奇代尔工人开了一家合作社小店，其规则成为全世界合作社的范本。',
    article:
      '## 蟾蜍巷，1844\n\n罗奇代尔公平先锋社（Rochdale Society of Equitable Pioneers）成立于 1844 年，发起者是兰开夏工业小镇罗奇代尔（Rochdale）的劳动者，其中许多是织工。1844 年 12 月 21 日，他们在蟾蜍巷（Toad Lane）31 号开店，货架寒酸：黄油、糖、面粉、燕麦片。相传创立者共二十八人，尽管社里自己的会议记录从未给出这个数。\n\n在他们之前也有合作社，都失败了。先锋们以货真价实、绝不掺假立名，而且属于最早把盈余按各人购买多寡以红利返还社员的合作社之列。\n\n他们立下的规则后来被称作罗奇代尔原则。国际合作社联盟（International Co-operative Alliance）于 1937 年采纳，又于 1966 年和 1995 年两度修订——1995 年后便是沿用至今的七项合作社原则，以自愿与开放的社员资格开篇，一人一票亦在其中。蟾蜍巷的小店如今是罗奇代尔先锋博物馆（Rochdale Pioneers Museum）。\n\n你的磨坊如今已是合作社磨坊。它的基金由再投入的贡献筑成——同一个念头，换了行当。',
  },
  'history-mondragon': {
    title: '蒙德拉贡',
    brief: '从 1956 年创办的一间小厂起家，巴斯克小镇蒙德拉贡长成了一个工人合作社的联合会。',
    article:
      '## 合作社的联合会\n\n1956 年 4 月 14 日，在巴斯克小镇蒙德拉贡（Mondragón），神父何塞·玛丽亚·阿里斯门迪亚列塔（José María Arizmendiarrieta）为一家名为 Ulgor 的小制造公司奠基祝福。公司之名取自五位创始人的姓氏——他们都是在他创办的技术学校里受过训的年轻工程师与技术员。它作为合作社的第一部章程于 1959 年获批。\n\n同一年，阿里斯门迪亚列塔协助创办了合作银行 Caja Laboral Popular。有了自己的信贷来源，这场运动就能自己创办、扶持新的合作社，而不必坐等外部投资者。工场、学校与银行长成一个合作社家族，便是今天的蒙德拉贡公司（Mondragon Corporation）——一个工人合作社的联合会，西班牙最大的企业集团之一。\n\n联合让每一家合作社保住自理之权，又与其余的同伴共享资金、研究与培训。\n\n你的磨坊如今已是联合合作社。像蒙德拉贡一样，自己的决定自己拿，更大的力气大家使。',
  },
  'history-mill-electrification': {
    title: '从天轴到电线',
    brief: '磨坊曾靠一台发动机经天轴与皮带带动全部机器；20 世纪初，电改换了这一局面。',
    article:
      '## 天轴\n\n工业时代的大部分岁月里，一座磨坊只有一个动力源：水轮、水涡轮或蒸汽机。它带动一根天轴——吊在天花板下的长转杆——皮革或棉织皮带从轴上的皮带轮垂下来，接到每一台机器。发动机一停，全磨坊皆停。布局围着天轴转，这套系统又吵又险，轴承还得上着油不可。\n\n大约 1880 到 1930 年间，工厂从天轴皮带传动转向电动机。起初往往是一台大电机换掉发动机，照旧带动旧天轴。后来，分立的电机先带动机组，再带动单机，每台机器都能自行启动、停车、检修。\n\n电力传动让磨坊更干净、更灵便，也把它们拴上了电网。供电一闪，如今每一台机器同时有感。\n\n电压正在跌落。电机转慢，磨辊机掉速，产量随之下滑，直到电压恢复。电压骤降，不过是天轴当年那个单点故障，挪到了厂房外面。',
  },
  'history-scada': {
    title: '监控',
    brief: 'SCADA 系统让操作员在一间屋里照看远处的设备；真正执行控制的是本地控制器。',
    article:
      '## 为何叫“监控”\n\nSCADA 的全称是 supervisory control and data acquisition，即监控与数据采集。这类系统成长于电网、管道与供水工程——设备绵延数英里，总得有人在一处守望。\n\n早期的链路又慢又不可靠。20 世纪六七十年代的供水与污水系统里，控制室与远程站之间的连接被认为太脆弱，撑不起真正的中央控制。于是控制留在本地——先是在远程终端单元，后来在可编程逻辑控制器——中央的房间只做监控：汇集读数，加以显示（常在一面大模拟屏上），偶尔下发指令。这一分工延续至今。本地控制器独自守着过程的安全；监控层看得全局、作出决断。\n\n控制网络已降级。你的 SCADA 画面可能滞后或缺损，但设备的本地控制仍在运行。信现场的读数，对屏幕存一分小心，先恢复链路，再动大手术。',
  },
  'history-flour-sacks': {
    title: '面粉袋做的裙子',
    brief: '20 世纪 30 年代，美国的磨坊主往棉布面粉袋上印花，因为他们知道各家会把它缝成衣裳。',
    article:
      '## 布袋即布料\n\n面粉、饲料和糖曾几何时都用棉布袋装。20 世纪 20 年代直到大萧条，美国农场的家庭把这些布再利用，做成裙子、衬衫、围裙、窗帘和玩具。制袋商看在眼里，非但不拦，反而推波助澜：往袋子上印女人们想缝的颜色与花样，让挑面粉的主妇可能为这块布而挑这袋粉。\n\n到 30 年代，各公司已把布袋当营销的一环。1933 年，纺织袋制造商协会（Textile Bag Manufacturers Association）出版小册子《用棉布袋缝纫》（Sewing with Cotton Bags）；到 30 年代末，多数公司改用水溶性油墨或纸标签，品牌名一洗就掉。美国国家历史博物馆藏有一条为 1959 年棉布袋缝纫比赛（Cotton Bag Sewing Contest）做的饲料袋裙。\n\n二战以后，更便宜的纸袋取代了布袋，饲料袋生产到 60 年代初已大体终结。\n\n包装出现了短缺。袋子一断，包装线就得停，不管有多少面粉已经就绪。包装本就是产品的一部分。',
  },
  'history-ergot': {
    title: '麦角与圣安东尼之火',
    brief: '黑麦上的一种真菌酿成中世纪的圣安东尼之火瘟疫，而清洁谷物至今仍是防线。',
    article:
      '## 穗中之毒\n\n麦角是一种真菌——麦角菌（Claviceps purpurea），侵染黑麦及其他谷类。它取代部分谷粒，长出坚硬、紫黑至乌黑的菌核，其中所含生物碱食之有毒。长期摄入引发麦角中毒：一种形态令人抽搐；另一种形态断绝肢体的血液供给，令其坏疽。\n\n在中世纪欧洲，穷人多食黑麦面包，麦角中毒遂成瘟疫。坏疽形态被称作“圣火”或“圣安东尼之火”，这名字通常关联到圣安东尼修会的修士——他们专事救护病患。其病因数百年无人识破。\n\n防线是干净的谷物。许多麦角菌核的大小形状与谷粒相仿，筛子总会漏掉一部分；按密度分选的重力分选台和色选机效果更好。即便如此，重度感染的批次，最好根本别进磨坊。\n\n一批供应商来料受到污染。扣住它，追查它到过哪里，别让它挨着磨辊。',
  },
  'history-corn-laws': {
    title: '谷物法',
    brief: '1815 到 1846 年，英国法律把外国谷物挡在门外以托住粮价，直到罗伯特·皮尔将其废除。',
    article:
      '## 保住面包的价钱\n\n在英式英语里，corn 泛指一切谷类。拿破仑战争之后，议会通过《1815 年进口法》（Importation Act 1815）：在国产小麦达到每夸特 80 先令之前，外国谷物一律禁入。地主保住了高价；劳动家庭为面包多付了钱。\n\n1828 年，一项滑动税率稍稍放宽了该法，反对声却愈发高涨。1838 年成立的反谷物法同盟，在理查德·科布登（Richard Cobden）与约翰·布莱特（John Bright）等人带领下，为谷物自由贸易奔走全国。1845 年，疫病毁了爱尔兰的马铃薯收成，饥荒随之而来，廉价进口粮食的理由变得刻不容缓。\n\n1846 年，保守党首相罗伯特·皮尔爵士（Sir Robert Peel）靠辉格党支持，顶着本党多数推动议会通过废法案——保守党也为此分裂。英国转向自由贸易，此后数十年，廉价进口谷物成了常态。\n\n今年是丰饶的作物年。丰收可喜，但它同时压低了所有人的谷价。价格同收成一样，从来不止是在你自家的田里长成的。',
  },
  'history-long-view': {
    title: '长远的目光',
    brief: '从马鞍形石磨盘到联合合作社磨坊：制粉业变了什么，又没变什么。',
    article:
      '## 变与不变\n\n故事始于尼罗河谷一间屋子的地上，始于一块石磨盘和一块手磨石。此后，制粉的几乎一切都变了。水轮接替了臂膀——维特鲁威记下了它；《末日审判书》的调查官数出了数千座磨坊；奥利弗·埃文斯让谷物不假人手地流过磨坊；布达佩斯的磨辊换掉了磨石；蒸汽、继而是电力，换掉了河流。所有权也变了——从《末日审判书》里折算成领主进项的磨坊，到罗奇代尔与蒙德拉贡那种归其所服务之人共有的合作社。\n\n有些东西丝毫未变。谷物必须保持干燥、洁净。粉尘永远是燃料。一条面包必须名副其实地标示分量，只含它该含的东西。而一座磨坊的好坏，最终只等于买它的人对它的信任。\n\n你的磨坊纪事已然完整。磨坊继续运转，你留下的记录如今也汇入它的历史。你选择保持不变的东西，与你选择改变的东西，同等要紧。',
  },
};

/** English stays in history.ts; every call reads copy for the active locale. */
export function historyMessages(row: HistoryNote) {
  const en = { title: row.title, brief: row.brief, article: row.article };
  return defineMessages({ en, 'pt-BR': portuguese[row.id] ?? en, zh: chinese[row.id] ?? en });
}
