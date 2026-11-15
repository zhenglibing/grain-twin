import { defineMessages } from '../i18n';

export const stewardDeckMessages = defineMessages({
  en: {
    'evt-standby-cover.title': 'Where the standby cover goes',
    'evt-standby-cover.text':
      'The district has one standby service firm, and its contract lets the mill name where its fitters wait during a breakdown: the intake and grain stores, the roller floor or the dispatch yard. Spread across all three, the fitters wait nowhere for long. The AI partner would put them on the roller floor.',
    'evt-standby-cover.choices.intake.label': 'Cover the intake and grain stores',
    'evt-standby-cover.choices.intake.effect.result':
      'The fitters base themselves at the intake, where the growers’ lorries tip.',
    'evt-standby-cover.choices.floor.label': 'Cover the roller floor',
    'evt-standby-cover.choices.floor.effect.result':
      'The fitters base themselves on the roller floor beside the switch room.',
    'evt-standby-cover.choices.yard.label': 'Cover the dispatch yard',
    'evt-standby-cover.choices.yard.effect.result':
      'The fitters base themselves in the dispatch yard, where the haulier loads.',
    'evt-standby-cover.choices.thin.label': 'Spread the cover across the site',
    'evt-standby-cover.choices.thin.effect.result':
      'The fitters move between all three areas and wait nowhere for long.',
    'evt-standby-cover.choices.partner.label': 'Leave it to the AI partner',
    'evt-standby-cover.choices.partner.effect.result':
      'The AI partner puts the standby cover on the roller floor.',
    'evt-court-short-weight.title': 'The short-weighted lots',
    'evt-court-short-weight.text':
      'The contract committee sits as arbitrator on the supply contracts this week, one case a shift. First: a hill farm delivered three lots short of their ticketed weight. Hail flattened the farm’s wheat in June and its account is behind. The contract allows termination and a claim for the shortfall.',
    'evt-court-short-weight.choices.terminate.label':
      'Terminate the contract and claim the shortfall',
    'evt-court-short-weight.choices.terminate.effect.result':
      'The contract is ended and the shortfall claimed. The hill farms take note.',
    'evt-court-short-weight.choices.dock.label': 'Dock the shortfall from the payment',
    'evt-court-short-weight.choices.dock.effect.result':
      'The shortfall comes off the next payment and the contract stands.',
    'evt-court-short-weight.choices.advance.label': 'Advance next year’s contract instead',
    'evt-court-short-weight.choices.advance.effect.result':
      'The farm gets next year’s contract early, against its seed bill.',
    'evt-court-short-weight.choices.partner.label': 'Hand the day to the AI partner',
    'evt-court-short-weight.choices.partner.effect.result':
      'The AI partner applies the contract as written and rules the remaining cases.',
    'evt-court-haulier.title': 'The abandoned run',
    'evt-court-haulier.text':
      'Next at arbitration: Valley Haulage abandoned an afternoon run halfway: its own depot was flooding and the lorries were needed to move stock to high ground. The contract treats an abandoned run as a breach. The haulier asks to keep the contract.',
    'evt-court-haulier.choices.terminate.label': 'Terminate the haulage contract',
    'evt-court-haulier.choices.terminate.effect.result':
      'The contract is ended. The haulier finishes the week and takes its lorries away.',
    'evt-court-haulier.choices.suspend.label': 'Put Valley Haulage on a crop year’s notice',
    'evt-court-haulier.choices.suspend.effect.result':
      'Valley Haulage keeps the contract on a crop year’s notice. The county sees the notice as fair.',
    'evt-court-haulier.choices.shelter.label':
      'Let Valley Haulage work from the mill yard while its depot dries',
    'evt-court-haulier.choices.shelter.effect.result':
      'Valley Haulage parks in the mill yard until its depot is dry.',
    'evt-court-haulier.choices.partner.label': 'Hand the rest of the day to the AI partner',
    'evt-court-haulier.choices.partner.effect.result':
      'The AI partner ends the haulage contract and rules the remaining cases.',
    'evt-court-granary.title': 'The old granary',
    'evt-court-granary.text':
      'Next at arbitration: the old granary across the lane is claimed twice. The previous manager promised it to Community Pasta Works for semolina storage; the village committee has used it for three years to keep its community bakery’s flour and wants that confirmed. The deeds are the mill’s.',
    'evt-court-granary.choices.pasta.label': 'Honour the promise to the pasta works',
    'evt-court-granary.choices.pasta.effect.result':
      'The pasta works takes the granary; the village bakery moves its flour out.',
    'evt-court-granary.choices.village.label': 'Confirm the village bakery',
    'evt-court-granary.choices.village.effect.result':
      'The village bakery keeps the granary. The pasta works is not pleased.',
    'evt-court-granary.choices.compensate.label':
      'Confirm the village and promise the pasta works compensation',
    'evt-court-granary.choices.compensate.effect.result':
      'The village keeps the granary and the pasta works accepts a promise of storage later.',
    'evt-court-granary.choices.keep.label': 'Keep the granary for the mill',
    'evt-court-granary.choices.keep.effect.result':
      'The mill lets the granary to a seed merchant and banks the rent.',
    'evt-court-granary.choices.partner.label': 'Hand the rest of the day to the AI partner',
    'evt-court-granary.choices.partner.effect.result':
      'The AI partner honours the old promise and rules the last case.',
    'evt-court-sacks.title': 'The short-counted bales',
    'evt-court-sacks.text':
      'Last at arbitration: the packing line suspects the paper-sack supplier of short-counting: the last three bales each came up a few sacks light. Nobody has counted a bale in front of the supplier. Their price is the best in the district.',
    'evt-court-sacks.choices.blacklist.label': 'Change supplier now',
    'evt-court-sacks.choices.blacklist.effect.modifier.label': 'New sack supplier',
    'evt-court-sacks.choices.blacklist.effect.result':
      'The supplier is dropped on suspicion. The county notes the mill acted without a count.',
    'evt-court-sacks.choices.audit.label': 'Pay for a counted delivery',
    'evt-court-sacks.choices.audit.effect.result':
      'Each bale is counted at the gate and comes up three sacks short. The supplier credits the account and fixes its counter.',
    'evt-court-sacks.choices.keep.label': 'Keep buying and say nothing',
    'evt-court-sacks.choices.keep.effect.result': 'The supplier stays and nothing is counted.',
    'evt-precedent.title': 'Another firm asks for the same terms',
    'evt-precedent.text':
      'The pest-control firm missed its visit because its van was flooded, and points out that Valley Haulage was allowed to work from the mill yard after abandoning a run. It asks for the same understanding.',
    'evt-precedent.choices.grant.label': 'Grant the same understanding',
    'evt-precedent.choices.grant.effect.modifier.label': 'Missed pest visit',
    'evt-precedent.choices.grant.effect.result':
      'The visit is rebooked for next week and the bran store waits.',
    'evt-precedent.choices.refuse.label': 'Hold this firm to its contract',
    'evt-precedent.choices.refuse.effect.result':
      'The firm sends a relief van the same day. The haulier hears the mill has two rules.',
    'evt-debt-pasta.title': 'The pasta works asks what was promised',
    'evt-debt-pasta.text':
      'Community Pasta Works writes to ask for the storage it was promised when the old granary went to the village bakery. The east bin would do. Its buyer copies the federation.',
    'evt-debt-pasta.choices.pay.label': 'Lease the pasta works the east bin as promised',
    'evt-debt-pasta.choices.pay.effect.result':
      'The east bin is cleaned out and leased to the pasta works.',
    'evt-debt-pasta.choices.refuse.label': 'Say the mill cannot spare it',
    'evt-debt-pasta.choices.refuse.effect.result':
      'The promise is broken. The pasta works says so to the federation.',
    'evt-sacks-short-again.title': 'The bales come up short again',
    'evt-sacks-short-again.text':
      'The packers count a bale by hand for the first time since arbitration day, and it is four sacks short. The supplier has been short-counting for weeks.',
    'evt-sacks-short-again.choices.claim.label': 'Count every bale and claim the shortfall',
    'evt-sacks-short-again.choices.claim.effect.result':
      'Every bale is counted at the gate and the shortfall is credited.',
    'evt-sacks-short-again.choices.let-go.label': 'Let it go',
    'evt-sacks-short-again.choices.let-go.effect.result':
      'The packers run short of sacks before the next delivery.',
    'evt-culvert-mason.title': 'The culvert mason',
    'evt-culvert-mason.text':
      'The stonemason who rebuilt the bridge at the ford looks at the culvert under the yard and says it would not carry a long storm. Rebuilding it now is cheap. Nothing else will change until the water comes.',
    'evt-culvert-mason.choices.works-crew.label': 'Have the drainage works crew rebuild it',
    'evt-culvert-mason.choices.works-crew.effect.result':
      'The crew that laid the drainage works rebuilds the culvert between jobs.',
    'evt-culvert-mason.choices.rebuild.label': 'Rebuild the culvert',
    'evt-culvert-mason.choices.rebuild.effect.result':
      'The culvert is rebuilt in dressed stone with twice the old bore.',
    'evt-culvert-mason.choices.decline.label': 'Leave the culvert as it is',
    'evt-culvert-mason.choices.decline.effect.result':
      'The mason is thanked and the culvert is left as it is.',
    'evt-switchgear-survey.title': 'The switchgear survey',
    'evt-switchgear-survey.text':
      'The electrical contractor offers to survey the roller-floor switchgear while the line is down for cleaning. They expect to find nothing urgent. A grid failure would find whatever they miss.',
    'evt-switchgear-survey.choices.survey.label': 'Commission the survey',
    'evt-switchgear-survey.choices.survey.effect.result':
      'The survey finds two loose busbar joints and a tired contactor, all put right.',
    'evt-switchgear-survey.choices.decline.label': 'Decline the survey',
    'evt-switchgear-survey.choices.decline.effect.result':
      'The survey is put off to the next shutdown.',
    'evt-quarry-stone.title': 'Stone for a flood wall',
    'evt-quarry-stone.text':
      'The quarry up the valley has dressed stone left over from the reservoir works, enough for a low flood wall round the grain stores. The stone is cheap. Hauling it needs twelve runs on the quarry road.',
    'evt-quarry-stone.choices.buy.label': 'Buy the stone',
    'evt-quarry-stone.choices.buy.effect.result':
      'The stone is bought and waits at the quarry for haulage.',
    'evt-quarry-stone.choices.decline.label': 'Leave the stone at the quarry',
    'evt-quarry-stone.choices.decline.effect.result': 'The stone goes to another buyer.',
    'evt-quarry-haul.title': 'Hauling the quarry stone',
    'evt-quarry-haul.text':
      'The stone for the flood wall is waiting at the quarry. Twelve runs on the quarry road will bring it down. A haulier that trusts the mill will make them between collections.',
    'evt-quarry-haul.choices.haulier.label': 'Ask Valley Haulage to make the runs',
    'evt-quarry-haul.choices.haulier.effect.result':
      'Valley Haulage brings the stone down between collections and the wall goes up.',
    'evt-quarry-haul.choices.hire.label': 'Hire quarry lorries',
    'evt-quarry-haul.choices.hire.effect.result':
      'Hired quarry lorries bring the stone down and the wall goes up.',
    'evt-quarry-haul.choices.leave.label': 'Leave the stone where it is',
    'evt-quarry-haul.choices.leave.effect.result': 'The stone stays at the quarry.',
    'evt-valley-meeting.title': 'The valley meeting',
    'evt-valley-meeting.text':
      'The village holds its annual meeting with the mill. The questions are about the harvest, the granary and the roads, and they are polite.',
    'evt-valley-meeting.echoes.0.because':
      'Because the mill’s food-standards approval is suspended',
    'evt-valley-meeting.echoes.0.text':
      'The village hall is full. The suspension is in the newspaper, and the meeting wants to know whether the flour in the school kitchens is safe.',
    'evt-valley-meeting.echoes.1.because':
      'Because the hail-struck farm’s contract was ended at arbitration',
    'evt-valley-meeting.echoes.1.text':
      'The hill growers have come down to the meeting. One of their farms was ruined by hail and then claimed against, and they want to know whether the mill stands with its growers.',
    'evt-valley-meeting.echoes.2.because':
      'Because the old granary was taken from the village bakery',
    'evt-valley-meeting.echoes.2.text':
      'The village committee speaks first. Its bakery has lost the old granary and is keeping flour in a barn, and it asks what the mill gives the village it stands in.',
    'evt-valley-meeting.echoes.3.because':
      'Because the standby cover was placed away from the intake',
    'evt-valley-meeting.echoes.3.text':
      'The growers ask about the storm season. The intake has no standby cover, and they want to know who will be there when the bins flood.',
    'evt-valley-meeting.choices.speak.label': 'Answer from the mill’s record',
    'evt-valley-meeting.choices.speak.effect.result':
      'The meeting hears the record read out and goes home satisfied.',
    'evt-valley-meeting.choices.principles.label': 'Speak to the Rochdale principles',
    'evt-valley-meeting.choices.principles.effect.result':
      'The meeting hears how a cooperative answers to its members, and agrees to meet again.',
    'evt-valley-meeting.choices.reserve.label': 'Open the reserve for a valley rebate',
    'evt-valley-meeting.choices.reserve.effect.result':
      'The mill pays a rebate from its reserve, and the meeting closes in good order.',
    'evt-valley-meeting.choices.close.label': 'Close the meeting',
    'evt-valley-meeting.choices.close.effect.result':
      'The meeting is closed with the questions unanswered.',
    'evt-valley-meeting.choices.close.variants.0.because':
      'Because Valley Haulage’s contract was ended at arbitration',
    'evt-valley-meeting.choices.close.variants.0.effect.result':
      'The meeting is closed unanswered, and the haulier’s drivers speak against the mill on the way out.',
    'evt-cleaning-log.title': 'A gap in the cleaning log',
    'evt-cleaning-log.text':
      'The night cleaning log for the sifting floor has a blank week: the cleaning was done, but the sheets were never signed. County Food Standards reads the log at every audit.',
    'evt-cleaning-log.choices.invoices.label': 'Ask the county to accept the contractor’s invoices',
    'evt-cleaning-log.choices.invoices.effect.result':
      'On the mill’s record, the county accepts the cleaning contractor’s invoices for the blank week.',
    'evt-cleaning-log.choices.report.label': 'Sign it as found and report the gap',
    'evt-cleaning-log.choices.report.effect.result':
      'The gap is reported with the contractor’s invoices attached. The county notes it.',
    'evt-cleaning-log.choices.reclean.label': 'Re-clean the floor and log it now',
    'evt-cleaning-log.choices.reclean.effect.modifier.label': 'Re-cleaning the sifting floor',
    'evt-cleaning-log.choices.reclean.effect.result':
      'The sifting floor is cleaned again and the log is complete from today.',
    'evt-cleaning-log.choices.backdate.label': 'Backdate the missing sheets',
    'evt-cleaning-log.choices.backdate.effect.result':
      'The auditor compares the sheet dates with the cleaning contractor’s invoices. The mill’s approval is suspended.',
    'evt-cleaning-log.choices.leave.label': 'Leave it for the audit',
    'evt-cleaning-log.choices.leave.effect.result':
      'The auditor finds the blank week and writes it up.',
    'evt-reinstatement-audit.title': 'The reinstatement audit',
    'evt-reinstatement-audit.text':
      'County Food Standards will reinstate the mill’s approval after a full audit: every record opened, every lot traced, every cleaning sheet checked against its invoice.',
    'evt-reinstatement-audit.choices.open.label': 'Open every record to the auditors',
    'evt-reinstatement-audit.choices.open.effect.result':
      'The audit runs for two days and the approval is reinstated.',
    'evt-reinstatement-audit.choices.wait.label': 'Ask for more time',
    'evt-reinstatement-audit.choices.wait.effect.result': 'The auditors agree to come back.',
    'evt-hire-sifter.title': 'A mobile sifter for hire',
    'evt-hire-sifter.text':
      'A plant-hire firm offers a mobile sifter for the busy weeks. Its large unit has twice the throughput and a coarser screen; its small unit is certified for flour and slower.',
    'evt-hire-sifter.choices.large.label': 'Hire the large unit',
    'evt-hire-sifter.choices.large.effect.modifier.label': 'Large mobile sifter',
    'evt-hire-sifter.choices.large.effect.result':
      'The large sifter arrives on a low-loader and the line runs faster and coarser.',
    'evt-hire-sifter.choices.small.label': 'Hire the certified unit',
    'evt-hire-sifter.choices.small.effect.modifier.label': 'Certified mobile sifter',
    'evt-hire-sifter.choices.small.effect.result':
      'The certified sifter is fitted and the line runs a little faster.',
    'evt-hire-sifter.choices.decline.label': 'Decline the hire',
    'evt-hire-sifter.choices.decline.effect.result': 'The plant-hire firm moves on.',
    'evt-premium-buyer.title': 'A city wholesaler’s premium',
    'evt-premium-buyer.text':
      'A city wholesaler offers a premium for first call on the mill’s strong white through the next crop year. Its buyers pay well and on time. Riverside Bakers’ Cooperative and County School Meals would wait behind it.',
    'evt-premium-buyer.choices.accept.label': 'Give the wholesaler first call',
    'evt-premium-buyer.choices.accept.effect.modifier.label': 'Wholesaler premium',
    'evt-premium-buyer.choices.accept.effect.result':
      'The wholesaler takes first call. The bakers and the school kitchens wait.',
    'evt-premium-buyer.choices.coop.label': 'Offer cooperative terms instead',
    'evt-premium-buyer.choices.coop.effect.modifier.label': 'Cooperative terms',
    'evt-premium-buyer.choices.coop.effect.result':
      'The wholesaler buys on the cooperative’s terms, behind the regular customers.',
    'evt-premium-buyer.choices.decline.label': 'Decline the premium',
    'evt-premium-buyer.choices.decline.effect.result': 'The wholesaler looks elsewhere.',
    'evt-second-haulier.title': 'A larger haulier calls',
    'evt-second-haulier.text':
      'A larger haulage firm offers to take the mill’s collections at a lower rate, with more lorries and less attention to any one customer. Valley Haulage hears about it the same day.',
    'evt-second-haulier.choices.switch.label': 'Move the collections to the larger firm',
    'evt-second-haulier.choices.switch.effect.modifier.label': 'Larger haulier',
    'evt-second-haulier.choices.switch.effect.result':
      'The larger firm takes the collections. Its lorries come when they come.',
    'evt-second-haulier.choices.share.label': 'Share the collections between them',
    'evt-second-haulier.choices.share.effect.result':
      'The collections are split between the two firms.',
    'evt-second-haulier.choices.stay.label': 'Stay with Valley Haulage',
    'evt-second-haulier.choices.stay.effect.result':
      'The mill stays with Valley Haulage, which notices.',
    'evt-long-night.title': 'The long night',
    'evt-long-night.text':
      'A storm front and a grid emergency arrive on the same night. The mill can put its own hands on one front. The other will have to hold on what was built for it.',
    'evt-long-night.choices.intake.label': 'Hold the intake and grain stores',
    'evt-long-night.choices.intake.effect.result':
      'The mill puts its own hands on the intake through the storm.',
    'evt-long-night.choices.floor.label': 'Hold the roller floor',
    'evt-long-night.choices.floor.effect.result':
      'The mill puts its own hands on the roller floor through the grid emergency.',
    'evt-long-night.choices.partner.label': 'Leave it to the AI partner',
    'evt-long-night.choices.partner.effect.result': 'The AI partner holds the roller floor.',
  },
  zh: {
    'evt-standby-cover.title': '待命保障的去处',
    'evt-standby-cover.text':
      '本地只有一家待命维修公司，合约写明：故障发生时，由磨坊指定维修工待命的地点——接收区与谷仓、磨辊层，或发运场院。三处摊开，维修工在哪儿都待不长。AI 伙伴会把他们放在磨辊层。',
    'evt-standby-cover.choices.intake.label': '照应接收区与谷仓',
    'evt-standby-cover.choices.intake.effect.result':
      '维修工驻在接收区，种植户的卡车就在那里卸粮。',
    'evt-standby-cover.choices.floor.label': '照应磨辊层',
    'evt-standby-cover.choices.floor.effect.result': '维修工驻在磨辊层，挨着配电室。',
    'evt-standby-cover.choices.yard.label': '照应发运场院',
    'evt-standby-cover.choices.yard.effect.result': '维修工驻在发运场院，承运方就在那里装货。',
    'evt-standby-cover.choices.thin.label': '把保障摊到全厂',
    'evt-standby-cover.choices.thin.effect.result': '维修工在三处之间来回，在哪儿都待不长。',
    'evt-standby-cover.choices.partner.label': '交给 AI 伙伴',
    'evt-standby-cover.choices.partner.effect.result': 'AI 伙伴把待命保障放在了磨辊层。',
    'evt-court-short-weight.title': '缺重的批次',
    'evt-court-short-weight.text':
      '本周，合约委员会以仲裁人的身份审理供货合约，每个班次一桩案子。第一桩：一家山上农场交来的三个批次，都比磅单上的重量轻。六月里一场冰雹压平了农场的麦子，账上也欠着。合约允许解约，并追讨差额。',
    'evt-court-short-weight.choices.terminate.label': '解除合约，追讨差额',
    'evt-court-short-weight.choices.terminate.effect.result':
      '合约解除，差额照追。山上农场们看在眼里。',
    'evt-court-short-weight.choices.dock.label': '从货款里扣下差额',
    'evt-court-short-weight.choices.dock.effect.result': '差额从下一笔货款里扣除，合约照旧。',
    'evt-court-short-weight.choices.advance.label': '改为提前签明年的合约',
    'evt-court-short-weight.choices.advance.effect.result':
      '农场提早拿到了明年的合约，抵着那笔种子欠账。',
    'evt-court-short-weight.choices.partner.label': '把这一天交给 AI 伙伴',
    'evt-court-short-weight.choices.partner.effect.result':
      'AI 伙伴照合约条文裁定，把余下的案子断完。',
    'evt-court-haulier.title': '半路丢下的一趟车',
    'evt-court-haulier.text':
      '仲裁的下一桩：Valley Haulage 把一趟下午的提货半路丢下——他们自己的车场正在进水，卡车得去把存货搬到高处。合约把弃单视作违约。承运方请求留下这份合约。',
    'evt-court-haulier.choices.terminate.label': '解除这份运输合约',
    'evt-court-haulier.choices.terminate.effect.result':
      '合约解除。承运方做完这个星期，把卡车开走了。',
    'evt-court-haulier.choices.suspend.label': '给 Valley Haulage 一个作物年的解约预告',
    'evt-court-haulier.choices.suspend.effect.result':
      'Valley Haulage 留下合约，带着一个作物年的解约预告。县里觉得这个预告是公道的。',
    'evt-court-haulier.choices.shelter.label': '趁车场晾干，让 Valley Haulage 先在磨坊场院里干活',
    'evt-court-haulier.choices.shelter.effect.result':
      'Valley Haulage 把车停在磨坊场院，直到自家车场晾干。',
    'evt-court-haulier.choices.partner.label': '把当天余下的案子交给 AI 伙伴',
    'evt-court-haulier.choices.partner.effect.result': 'AI 伙伴解除了运输合约，把余下的案子断完。',
    'evt-court-granary.title': '那座老粮仓',
    'evt-court-granary.text':
      '仲裁的下一桩：巷子对面的那座老粮仓，有两家提出主张。前任经理曾答应把它给 Community Pasta Works 存放粗粒粉；村庄委员会用它存放社区面包房的面粉，已有三年，想把这一用途坐实。地契在磨坊手里。',
    'evt-court-granary.choices.pasta.label': '兑现给意面坊的承诺',
    'evt-court-granary.choices.pasta.effect.result': '意面坊收下粮仓；村里的面包房把面粉搬了出去。',
    'evt-court-granary.choices.village.label': '确认归村里的面包房',
    'evt-court-granary.choices.village.effect.result': '村里的面包房留下粮仓。意面坊不太高兴。',
    'evt-court-granary.choices.compensate.label': '确认归村庄，并允诺补偿意面坊',
    'evt-court-granary.choices.compensate.effect.result':
      '村庄留下粮仓，意面坊接受了一个日后提供仓储的承诺。',
    'evt-court-granary.choices.keep.label': '把粮仓留给磨坊',
    'evt-court-granary.choices.keep.effect.result': '磨坊把粮仓租给一位种子商，租金收进基金。',
    'evt-court-granary.choices.partner.label': '把当天余下的案子交给 AI 伙伴',
    'evt-court-granary.choices.partner.effect.result': 'AI 伙伴兑现了旧承诺，断完最后一桩。',
    'evt-court-sacks.title': '缺数的袋捆',
    'evt-court-sacks.text':
      '仲裁的最后一桩：包装线怀疑纸袋供应商每捆少数——最近三捆，捆捆都少了几只袋子。从没有人当着供应商的面数过一捆。他们的价钱是本地最好的。',
    'evt-court-sacks.choices.blacklist.label': '立即更换供应商',
    'evt-court-sacks.choices.blacklist.effect.modifier.label': '新纸袋供应商',
    'evt-court-sacks.choices.blacklist.effect.result':
      '供应商仅凭嫌疑就被换掉了。县里记下：磨坊没有数过就动了手。',
    'evt-court-sacks.choices.audit.label': '出钱做一次逐捆清点的到货',
    'evt-court-sacks.choices.audit.effect.result':
      '每捆都在大门口清点，捆捆少三只。供应商把差额记入账户贷方，修好了自家的计数器。',
    'evt-court-sacks.choices.keep.label': '照常买，什么都不说',
    'evt-court-sacks.choices.keep.effect.result': '供应商照旧，什么也没有数。',
    'evt-precedent.title': '又一家公司讨同样的待遇',
    'evt-precedent.text':
      '虫害防治公司误了一次上门，因为他们的面包车被水淹了；他们指出，Valley Haulage 半路弃单之后，还被允许在磨坊场院里干活。他们要的是同等的通融。',
    'evt-precedent.choices.grant.label': '给予同等的通融',
    'evt-precedent.choices.grant.effect.modifier.label': '虫害上门延误',
    'evt-precedent.choices.grant.effect.result': '上门改约到下周，麸皮库只能等着。',
    'evt-precedent.choices.refuse.label': '要这家公司照合约办事',
    'evt-precedent.choices.refuse.effect.result':
      '公司当天就派来一辆替班面包车。承运方听说了：磨坊有两套规矩。',
    'evt-debt-pasta.title': '意面坊来讨承诺过的东西',
    'evt-debt-pasta.text':
      'Community Pasta Works 来信，讨要老粮仓归了村里的面包房时，答应给他们的仓储。东仓就合适。他们的采购员把信抄送给了联合会。',
    'evt-debt-pasta.choices.pay.label': '如约把东仓租给意面坊',
    'evt-debt-pasta.choices.pay.effect.result': '东仓清空，租给了意面坊。',
    'evt-debt-pasta.choices.refuse.label': '说磨坊匀不出来',
    'evt-debt-pasta.choices.refuse.effect.result': '承诺落了空。意面坊把这事说给了联合会。',
    'evt-sacks-short-again.title': '袋捆又缺数了',
    'evt-sacks-short-again.text':
      '包装工自仲裁日以来头一回手工清点一捆，少了四只。供应商少数已经有好几个星期了。',
    'evt-sacks-short-again.choices.claim.label': '每捆都数，追讨差额',
    'evt-sacks-short-again.choices.claim.effect.result': '每捆都在大门口清点，差额记入了账户贷方。',
    'evt-sacks-short-again.choices.let-go.label': '算了',
    'evt-sacks-short-again.choices.let-go.effect.result': '下一批货到之前，包装工就先断了袋。',
    'evt-culvert-mason.title': '涵洞石匠',
    'evt-culvert-mason.text':
      '在浅滩修过桥的那位石匠看了一眼场院底下的涵洞，说它扛不住一场连绵的大雨。眼下重建花不了几个钱。水来之前，什么都不会变。',
    'evt-culvert-mason.choices.works-crew.label': '让排水工程的施工队来重建',
    'evt-culvert-mason.choices.works-crew.effect.result':
      '铺排水工程的那支施工队见缝插针，把涵洞重建了。',
    'evt-culvert-mason.choices.rebuild.label': '重建涵洞',
    'evt-culvert-mason.choices.rebuild.effect.result': '涵洞以琢石重建，孔径是原先的两倍。',
    'evt-culvert-mason.choices.decline.label': '涵洞维持原样',
    'evt-culvert-mason.choices.decline.effect.result': '石匠受了谢，涵洞原样未动。',
    'evt-switchgear-survey.title': '开关设备检查',
    'evt-switchgear-survey.text':
      '电气承包商提出，趁产线停机清洁，检查一遍磨辊层的开关设备。他们预计查不出什么急事。可电网一旦出事，他们漏掉的每一样都会被找出来。',
    'evt-switchgear-survey.choices.survey.label': '委托这次检查',
    'evt-switchgear-survey.choices.survey.effect.result':
      '检查发现两处松动的母排接头和一台老化的接触器，一一修好。',
    'evt-switchgear-survey.choices.decline.label': '谢绝这次检查',
    'evt-switchgear-survey.choices.decline.effect.result': '检查推迟到下一次停产。',
    'evt-quarry-stone.title': '防洪墙的石料',
    'evt-quarry-stone.text':
      '谷地上游的采石场还剩着水库工程余下的琢石，足够沿谷仓外围垒一道矮的防洪墙。石料便宜。只是要沿采石场的路跑上十二趟，才拉得完。',
    'evt-quarry-stone.choices.buy.label': '买下石料',
    'evt-quarry-stone.choices.buy.effect.result': '石料买下了，在采石场等着运输。',
    'evt-quarry-stone.choices.decline.label': '把石料留在采石场',
    'evt-quarry-stone.choices.decline.effect.result': '石料卖给了别的买主。',
    'evt-quarry-haul.title': '运送采石场的石料',
    'evt-quarry-haul.text':
      '防洪墙的石料还在采石场等着。沿采石场的路跑十二趟就能运下来。信得过磨坊的承运方，会在两趟提货之间顺路跑完。',
    'evt-quarry-haul.choices.haulier.label': '请 Valley Haulage 来跑这几趟',
    'evt-quarry-haul.choices.haulier.effect.result':
      'Valley Haulage 在两趟提货之间把石料运了下来，墙垒起来了。',
    'evt-quarry-haul.choices.hire.label': '雇采石场的卡车',
    'evt-quarry-haul.choices.hire.effect.result': '雇来的采石场卡车把石料运了下来，墙垒起来了。',
    'evt-quarry-haul.choices.leave.label': '石料就地放着',
    'evt-quarry-haul.choices.leave.effect.result': '石料留在了采石场。',
    'evt-valley-meeting.title': '谷地大会',
    'evt-valley-meeting.text': '村里与磨坊开一年一度的大会。问的是收成、粮仓和道路，问得都客气。',
    'evt-valley-meeting.echoes.0.because': '因为磨坊的食品标准认证被暂停',
    'evt-valley-meeting.echoes.0.text':
      '村礼堂坐得满满的。暂停的事上了报纸，与会的人想知道学校厨房里的面粉是否安全。',
    'evt-valley-meeting.echoes.1.because': '因为遭雹灾农场的合约在仲裁中被解除',
    'evt-valley-meeting.echoes.1.text':
      '山上的种植户下山来开会。他们中间有一家农场遭冰雹毁了庄稼，回头又被追了账，他们想知道磨坊是否与自己的种植户站在一起。',
    'evt-valley-meeting.echoes.2.because': '因为老粮仓从村里的面包房手里收走',
    'evt-valley-meeting.echoes.2.text':
      '村庄委员会先发言。他们的面包房失了老粮仓，面粉只能存在一间仓房里；他们问，磨坊给自己立足的这座村庄回了什么。',
    'evt-valley-meeting.echoes.3.because': '因为待命保障没有放在接收区',
    'evt-valley-meeting.echoes.3.text':
      '种植户问起风暴季。接收区没有待命保障，他们想知道仓里进水的时候，谁会在场。',
    'evt-valley-meeting.choices.speak.label': '拿磨坊的记录作答',
    'evt-valley-meeting.choices.speak.effect.result': '与会的人听完记录宣读，满意地回了家。',
    'evt-valley-meeting.choices.principles.label': '讲一讲罗奇代尔原则',
    'evt-valley-meeting.choices.principles.effect.result':
      '与会的人听了一家合作社如何向成员交代，同意来年再聚。',
    'evt-valley-meeting.choices.reserve.label': '动用储备金，给谷地让利',
    'evt-valley-meeting.choices.reserve.effect.result':
      '磨坊从储备金里付了让利，大会体面地收了场。',
    'evt-valley-meeting.choices.close.label': '散会',
    'evt-valley-meeting.choices.close.effect.result': '大会散了，问题没有答案。',
    'evt-valley-meeting.choices.close.variants.0.because':
      '因为 Valley Haulage 的合约在仲裁中被解除',
    'evt-valley-meeting.choices.close.variants.0.effect.result':
      '大会没答一个问题就散了，出门的路上，承运方的司机们说着磨坊的坏话。',
    'evt-cleaning-log.title': '清洁记录上的一个缺口',
    'evt-cleaning-log.text':
      '筛理层的夜班清洁记录缺了一个星期：清洁做了，记录表却始终没人签。县食品标准局每次审计都要读这份记录。',
    'evt-cleaning-log.choices.invoices.label': '请县里接受承包商的发票',
    'evt-cleaning-log.choices.invoices.effect.result':
      '凭着磨坊的记录，县里接受了清洁承包商为空白那一周开具的发票。',
    'evt-cleaning-log.choices.report.label': '照实签字，上报缺口',
    'evt-cleaning-log.choices.report.effect.result': '缺口附上承包商的发票一并上报。县里记了一笔。',
    'evt-cleaning-log.choices.reclean.label': '立即重新清洁并补记',
    'evt-cleaning-log.choices.reclean.effect.modifier.label': '筛理层重新清洁',
    'evt-cleaning-log.choices.reclean.effect.result': '筛理层重新做了清洁，记录从今天起补齐。',
    'evt-cleaning-log.choices.backdate.label': '倒填缺失的记录表',
    'evt-cleaning-log.choices.backdate.effect.result':
      '审计员把记录表的日期与清洁承包商的发票一对照，磨坊的认证被暂停。',
    'evt-cleaning-log.choices.leave.label': '留给审计去发现',
    'evt-cleaning-log.choices.leave.effect.result': '审计员发现了空白的那一周，白纸黑字记了下来。',
    'evt-reinstatement-audit.title': '复牌审计',
    'evt-reinstatement-audit.text':
      '县食品标准局要经过一场彻底的审计，才会恢复磨坊的认证：每份记录翻开，每个批次追溯，每张清洁记录表与发票核对。',
    'evt-reinstatement-audit.choices.open.label': '向审计员翻开所有记录',
    'evt-reinstatement-audit.choices.open.effect.result': '审计进行了两天，认证恢复了。',
    'evt-reinstatement-audit.choices.wait.label': '再宽限些时日',
    'evt-reinstatement-audit.choices.wait.effect.result': '审计员同意再来一趟。',
    'evt-hire-sifter.title': '一台待租的移动平筛',
    'evt-hire-sifter.text':
      '一家设备租赁公司提出，把一台移动平筛租给磨坊，应付旺季的几个星期。大型机组处理量翻倍，筛网更粗；小型机组有面粉认证，速度慢些。',
    'evt-hire-sifter.choices.large.label': '租大型机组',
    'evt-hire-sifter.choices.large.effect.modifier.label': '大型移动平筛',
    'evt-hire-sifter.choices.large.effect.result': '大平筛由低板拖车运到，产线跑得更快，筛得更粗。',
    'evt-hire-sifter.choices.small.label': '租认证机组',
    'evt-hire-sifter.choices.small.effect.modifier.label': '认证移动平筛',
    'evt-hire-sifter.choices.small.effect.result': '认证平筛装了上去，产线快了一点。',
    'evt-hire-sifter.choices.decline.label': '谢绝租赁',
    'evt-hire-sifter.choices.decline.effect.result': '设备租赁公司去了别家。',
    'evt-premium-buyer.title': '城里批发商的溢价',
    'evt-premium-buyer.text':
      '一位城里的批发商出溢价，要买断磨坊下一个作物年高筋面包粉的优先购买权。他们的采购出价高，付款也准时。Riverside Bakers’ Cooperative 和 County School Meals 就得排到他们后面。',
    'evt-premium-buyer.choices.accept.label': '把优先购买权让给批发商',
    'evt-premium-buyer.choices.accept.effect.modifier.label': '批发商溢价',
    'evt-premium-buyer.choices.accept.effect.result':
      '批发商拿到了优先购买权。面包师们和学生餐厨房排到了后面。',
    'evt-premium-buyer.choices.coop.label': '改为开出合作社条款',
    'evt-premium-buyer.choices.coop.effect.modifier.label': '合作社条款',
    'evt-premium-buyer.choices.coop.effect.result': '批发商按合作社的条款入货，排在老主顾后面。',
    'evt-premium-buyer.choices.decline.label': '谢绝这份溢价',
    'evt-premium-buyer.choices.decline.effect.result': '批发商另寻了卖家。',
    'evt-second-haulier.title': '一家更大的承运方来电',
    'evt-second-haulier.text':
      '一家更大的承运方提出以更低的价钱接下磨坊的提货：卡车更多，对哪一家客户都不会太上心。Valley Haulage 当天就听说了。',
    'evt-second-haulier.choices.switch.label': '把提货转给那家大公司',
    'evt-second-haulier.choices.switch.effect.modifier.label': '更大的承运方',
    'evt-second-haulier.choices.switch.effect.result':
      '大公司接下了提货。他们的卡车想什么时候来，就什么时候来。',
    'evt-second-haulier.choices.share.label': '两家分摊提货',
    'evt-second-haulier.choices.share.effect.result': '提货在两家之间分了摊。',
    'evt-second-haulier.choices.stay.label': '继续用 Valley Haulage',
    'evt-second-haulier.choices.stay.effect.result':
      '磨坊继续用 Valley Haulage，对方记下了这份心意。',
    'evt-long-night.title': '长夜',
    'evt-long-night.text':
      '风暴锋面与电网紧急状况在同一夜到来。磨坊的人手只够亲自照看一条战线。另一条，只能靠平日为它做下的准备撑住。',
    'evt-long-night.choices.intake.label': '守住接收区与谷仓',
    'evt-long-night.choices.intake.effect.result': '风暴之中，磨坊亲自守住了接收区。',
    'evt-long-night.choices.floor.label': '守住磨辊层',
    'evt-long-night.choices.floor.effect.result': '电网紧急状况之中，磨坊亲自守住了磨辊层。',
    'evt-long-night.choices.partner.label': '交给 AI 伙伴',
    'evt-long-night.choices.partner.effect.result': 'AI 伙伴守住磨辊层。',
  },
  'pt-BR': {
    'evt-standby-cover.title': 'Onde fica a equipe de prontidão',
    'evt-standby-cover.text':
      'A região tem uma única empresa de manutenção de prontidão, e seu contrato permite ao moinho escolher onde os técnicos aguardam durante uma pane: na recepção e nos armazéns de grãos, no setor de moagem ou no pátio de expedição. Divididos entre os três, os técnicos não ficam muito tempo em lugar nenhum. O parceiro de IA os colocaria no setor de moagem.',
    'evt-standby-cover.choices.intake.label': 'Cobrir a recepção e os armazéns de grãos',
    'evt-standby-cover.choices.intake.effect.result':
      'Os técnicos ficam na recepção, onde os caminhões dos produtores descarregam.',
    'evt-standby-cover.choices.floor.label': 'Cobrir o setor de moagem',
    'evt-standby-cover.choices.floor.effect.result':
      'Os técnicos ficam no setor de moagem, ao lado da sala elétrica.',
    'evt-standby-cover.choices.yard.label': 'Cobrir o pátio de expedição',
    'evt-standby-cover.choices.yard.effect.result':
      'Os técnicos ficam no pátio de expedição, onde a transportadora carrega.',
    'evt-standby-cover.choices.thin.label': 'Distribuir a cobertura pela instalação',
    'evt-standby-cover.choices.thin.effect.result':
      'Os técnicos circulam entre as três áreas e não ficam muito tempo em lugar nenhum.',
    'evt-standby-cover.choices.partner.label': 'Deixar com o parceiro de IA',
    'evt-standby-cover.choices.partner.effect.result':
      'O parceiro de IA coloca a equipe de prontidão no setor de moagem.',
    'evt-court-short-weight.title': 'Os lotes abaixo do peso',
    'evt-court-short-weight.text':
      'O comitê de contratos atua como árbitro dos contratos de fornecimento nesta semana, um caso por turno. Primeiro: uma fazenda das colinas entregou três lotes abaixo do peso indicado nos comprovantes. O granizo derrubou seu trigo em junho e a conta está atrasada. O contrato permite a rescisão e a cobrança da diferença.',
    'evt-court-short-weight.choices.terminate.label': 'Rescindir o contrato e cobrar a diferença',
    'evt-court-short-weight.choices.terminate.effect.result':
      'O contrato é encerrado e a diferença é cobrada. As fazendas das colinas tomam nota.',
    'evt-court-short-weight.choices.dock.label': 'Descontar a diferença do pagamento',
    'evt-court-short-weight.choices.dock.effect.result':
      'A diferença é descontada do próximo pagamento e o contrato continua.',
    'evt-court-short-weight.choices.advance.label': 'Antecipar o contrato do próximo ano',
    'evt-court-short-weight.choices.advance.effect.result':
      'A fazenda recebe antecipadamente o contrato do próximo ano, para cobrir a conta das sementes.',
    'evt-court-short-weight.choices.partner.label': 'Entregar os casos do dia ao parceiro de IA',
    'evt-court-short-weight.choices.partner.effect.result':
      'O parceiro de IA aplica o contrato como está escrito e decide os casos restantes.',
    'evt-court-haulier.title': 'A viagem abandonada',
    'evt-court-haulier.text':
      'O próximo caso da arbitragem: Valley Haulage abandonou uma viagem da tarde no meio do caminho. Seu próprio depósito estava alagando e os caminhões eram necessários para levar o estoque a um local elevado. O contrato trata o abandono de uma viagem como descumprimento. A transportadora pede para manter o contrato.',
    'evt-court-haulier.choices.terminate.label': 'Rescindir o contrato de transporte',
    'evt-court-haulier.choices.terminate.effect.result':
      'O contrato é encerrado. A transportadora conclui a semana e retira seus caminhões.',
    'evt-court-haulier.choices.suspend.label':
      'Dar a Valley Haulage aviso de rescisão de uma safra',
    'evt-court-haulier.choices.suspend.effect.result':
      'Valley Haulage mantém o contrato com aviso de rescisão de uma safra. O condado considera o aviso justo.',
    'evt-court-haulier.choices.shelter.label':
      'Deixar Valley Haulage operar no pátio do moinho enquanto seu depósito seca',
    'evt-court-haulier.choices.shelter.effect.result':
      'Valley Haulage estaciona no pátio do moinho até seu depósito secar.',
    'evt-court-haulier.choices.partner.label': 'Entregar os casos restantes ao parceiro de IA',
    'evt-court-haulier.choices.partner.effect.result':
      'O parceiro de IA encerra o contrato de transporte e decide os casos restantes.',
    'evt-court-granary.title': 'O antigo celeiro',
    'evt-court-granary.text':
      'O próximo caso da arbitragem: há duas reivindicações sobre o antigo celeiro do outro lado da estrada. A gerência anterior o prometeu a Community Pasta Works para armazenar sêmola; o comitê da vila o usa há três anos para guardar a farinha de sua padaria comunitária e quer a confirmação desse uso. A escritura pertence ao moinho.',
    'evt-court-granary.choices.pasta.label': 'Honrar a promessa à fábrica de massas',
    'evt-court-granary.choices.pasta.effect.result':
      'A fábrica de massas fica com o celeiro; a padaria da vila retira sua farinha.',
    'evt-court-granary.choices.village.label': 'Confirmar o uso pela padaria da vila',
    'evt-court-granary.choices.village.effect.result':
      'A padaria da vila mantém o celeiro. A fábrica de massas não fica satisfeita.',
    'evt-court-granary.choices.compensate.label':
      'Confirmar o uso pela vila e prometer compensação à fábrica de massas',
    'evt-court-granary.choices.compensate.effect.result':
      'A vila mantém o celeiro e a fábrica de massas aceita a promessa de armazenamento mais adiante.',
    'evt-court-granary.choices.keep.label': 'Manter o celeiro para o moinho',
    'evt-court-granary.choices.keep.effect.result':
      'O moinho aluga o celeiro a um comerciante de sementes e guarda o aluguel.',
    'evt-court-granary.choices.partner.label': 'Entregar os casos restantes ao parceiro de IA',
    'evt-court-granary.choices.partner.effect.result':
      'O parceiro de IA honra a promessa antiga e decide o último caso.',
    'evt-court-sacks.title': 'Os fardos com sacos a menos',
    'evt-court-sacks.text':
      'O último caso da arbitragem: a linha de ensaque suspeita que o fornecedor de sacos de papel esteja entregando menos unidades. Nos últimos três fardos faltavam alguns sacos em cada um. Ninguém contou um fardo na presença do fornecedor. Seu preço é o melhor da região.',
    'evt-court-sacks.choices.blacklist.label': 'Trocar de fornecedor agora',
    'evt-court-sacks.choices.blacklist.effect.modifier.label': 'Novo fornecedor de sacos',
    'evt-court-sacks.choices.blacklist.effect.result':
      'O fornecedor é dispensado por suspeita. O condado registra que o moinho agiu sem fazer a contagem.',
    'evt-court-sacks.choices.audit.label': 'Pagar por uma entrega conferida',
    'evt-court-sacks.choices.audit.effect.result':
      'Cada fardo é contado na entrada e faltam três sacos em cada um. O fornecedor credita a conta e conserta seu contador.',
    'evt-court-sacks.choices.keep.label': 'Continuar comprando sem dizer nada',
    'evt-court-sacks.choices.keep.effect.result': 'O fornecedor continua e nada é contado.',
    'evt-precedent.title': 'Outra empresa pede o mesmo tratamento',
    'evt-precedent.text':
      'A empresa de controle de pragas faltou à visita porque sua van ficou alagada e lembra que Valley Haulage pôde trabalhar no pátio do moinho depois de abandonar uma viagem. Pede a mesma compreensão.',
    'evt-precedent.choices.grant.label': 'Conceder a mesma compreensão',
    'evt-precedent.choices.grant.effect.modifier.label': 'Visita de controle de pragas perdida',
    'evt-precedent.choices.grant.effect.result':
      'A visita é remarcada para a próxima semana e o depósito de farelo aguarda.',
    'evt-precedent.choices.refuse.label': 'Exigir que esta empresa cumpra o contrato',
    'evt-precedent.choices.refuse.effect.result':
      'A empresa envia uma van substituta no mesmo dia. A transportadora fica sabendo que o moinho usa dois critérios.',
    'evt-debt-pasta.title': 'A fábrica de massas cobra a promessa',
    'evt-debt-pasta.text':
      'Community Pasta Works escreve cobrando o espaço de armazenamento prometido quando o antigo celeiro ficou com a padaria da vila. O silo leste serviria. Seu comprador envia cópia à federação.',
    'evt-debt-pasta.choices.pay.label': 'Alugar o silo leste à fábrica de massas como prometido',
    'evt-debt-pasta.choices.pay.effect.result':
      'O silo leste é esvaziado, limpo e alugado à fábrica de massas.',
    'evt-debt-pasta.choices.refuse.label': 'Dizer que o moinho não pode cedê-lo',
    'evt-debt-pasta.choices.refuse.effect.result':
      'A promessa é quebrada. A fábrica de massas comunica isso à federação.',
    'evt-sacks-short-again.title': 'Voltam a faltar sacos nos fardos',
    'evt-sacks-short-again.text':
      'As ensacadeiras contam um fardo à mão pela primeira vez desde a arbitragem, e faltam quatro sacos. O fornecedor vem entregando sacos a menos há semanas.',
    'evt-sacks-short-again.choices.claim.label': 'Contar cada fardo e cobrar a diferença',
    'evt-sacks-short-again.choices.claim.effect.result':
      'Cada fardo é contado na entrada e a diferença é creditada.',
    'evt-sacks-short-again.choices.let-go.label': 'Deixar passar',
    'evt-sacks-short-again.choices.let-go.effect.result':
      'As ensacadeiras ficam sem sacos antes da próxima entrega.',
    'evt-culvert-mason.title': 'O pedreiro do bueiro',
    'evt-culvert-mason.text':
      'O pedreiro que reconstruiu a ponte no vau examina o bueiro sob o pátio e diz que ele não daria vazão a uma tempestade prolongada. Reconstruí-lo agora custa pouco. Nada mais mudará até a água chegar.',
    'evt-culvert-mason.choices.works-crew.label': 'Pedir à equipe de drenagem que o reconstrua',
    'evt-culvert-mason.choices.works-crew.effect.result':
      'A equipe que fez as obras de drenagem reconstrói o bueiro entre os serviços.',
    'evt-culvert-mason.choices.rebuild.label': 'Reconstruir o bueiro',
    'evt-culvert-mason.choices.rebuild.effect.result':
      'O bueiro é reconstruído em pedra lavrada, com o dobro da abertura anterior.',
    'evt-culvert-mason.choices.decline.label': 'Deixar o bueiro como está',
    'evt-culvert-mason.choices.decline.effect.result':
      'O pedreiro recebe os agradecimentos e o bueiro fica como está.',
    'evt-switchgear-survey.title': 'A inspeção dos equipamentos elétricos',
    'evt-switchgear-survey.text':
      'A empresa de instalações elétricas oferece uma inspeção dos equipamentos de manobra do setor de moagem enquanto a linha para para limpeza. Não esperam encontrar nada urgente. Uma falha da rede revelaria o que passasse despercebido.',
    'evt-switchgear-survey.choices.survey.label': 'Contratar a inspeção',
    'evt-switchgear-survey.choices.survey.effect.result':
      'A inspeção encontra duas conexões de barramento frouxas e um contator desgastado, todos corrigidos.',
    'evt-switchgear-survey.choices.decline.label': 'Recusar a inspeção',
    'evt-switchgear-survey.choices.decline.effect.result': 'A inspeção fica para a próxima parada.',
    'evt-quarry-stone.title': 'Pedra para um muro contra enchentes',
    'evt-quarry-stone.text':
      'A pedreira no alto do vale tem pedra lavrada que sobrou das obras do reservatório, suficiente para um muro baixo contra enchentes em volta dos armazéns de grãos. A pedra é barata. Transportá-la exige doze viagens pela estrada da pedreira.',
    'evt-quarry-stone.choices.buy.label': 'Comprar a pedra',
    'evt-quarry-stone.choices.buy.effect.result':
      'A pedra é comprada e aguarda transporte na pedreira.',
    'evt-quarry-stone.choices.decline.label': 'Deixar a pedra na pedreira',
    'evt-quarry-stone.choices.decline.effect.result': 'A pedra vai para outro comprador.',
    'evt-quarry-haul.title': 'O transporte da pedra da pedreira',
    'evt-quarry-haul.text':
      'A pedra para o muro contra enchentes aguarda na pedreira. Doze viagens pela estrada da pedreira a trarão para baixo. Uma transportadora que confie no moinho fará as viagens entre as coletas.',
    'evt-quarry-haul.choices.haulier.label': 'Pedir a Valley Haulage que faça as viagens',
    'evt-quarry-haul.choices.haulier.effect.result':
      'Valley Haulage traz a pedra entre as coletas e o muro é erguido.',
    'evt-quarry-haul.choices.hire.label': 'Contratar caminhões da pedreira',
    'evt-quarry-haul.choices.hire.effect.result':
      'Os caminhões contratados trazem a pedra e o muro é erguido.',
    'evt-quarry-haul.choices.leave.label': 'Deixar a pedra onde está',
    'evt-quarry-haul.choices.leave.effect.result': 'A pedra fica na pedreira.',
    'evt-valley-meeting.title': 'A reunião do vale',
    'evt-valley-meeting.text':
      'A vila realiza sua reunião anual com o moinho. As perguntas são sobre a colheita, o celeiro e as estradas, e são feitas com educação.',
    'evt-valley-meeting.echoes.0.because':
      'Porque a aprovação do moinho em segurança dos alimentos está suspensa',
    'evt-valley-meeting.echoes.0.text':
      'O salão da vila está cheio. A suspensão saiu no jornal, e os presentes querem saber se a farinha nas cozinhas das escolas é segura.',
    'evt-valley-meeting.echoes.1.because':
      'Porque o contrato da fazenda atingida pelo granizo foi encerrado na arbitragem',
    'evt-valley-meeting.echoes.1.text':
      'Os produtores das colinas vieram à reunião. Uma de suas fazendas foi arruinada pelo granizo e depois cobrada, e eles querem saber se o moinho está ao lado de seus produtores.',
    'evt-valley-meeting.echoes.2.because':
      'Porque o antigo celeiro foi retirado da padaria da vila',
    'evt-valley-meeting.echoes.2.text':
      'O comitê da vila fala primeiro. Sua padaria perdeu o antigo celeiro e está guardando farinha em um barracão; pergunta o que o moinho oferece à vila onde está instalado.',
    'evt-valley-meeting.echoes.3.because':
      'Porque a equipe de prontidão foi colocada longe da recepção',
    'evt-valley-meeting.echoes.3.text':
      'Os produtores perguntam sobre a temporada de tempestades. A recepção não tem cobertura de prontidão, e eles querem saber quem estará lá quando os silos alagarem.',
    'evt-valley-meeting.choices.speak.label': 'Responder com base no histórico do moinho',
    'evt-valley-meeting.choices.speak.effect.result':
      'Os presentes ouvem a leitura do histórico e voltam satisfeitos para casa.',
    'evt-valley-meeting.choices.principles.label': 'Falar dos princípios de Rochdale',
    'evt-valley-meeting.choices.principles.effect.result':
      'Os presentes ouvem como uma cooperativa responde aos seus cooperados e concordam em se reunir novamente.',
    'evt-valley-meeting.choices.reserve.label': 'Usar a reserva para um abatimento ao vale',
    'evt-valley-meeting.choices.reserve.effect.result':
      'O moinho paga um abatimento com sua reserva e a reunião termina em boa ordem.',
    'evt-valley-meeting.choices.close.label': 'Encerrar a reunião',
    'evt-valley-meeting.choices.close.effect.result':
      'A reunião é encerrada com as perguntas sem resposta.',
    'evt-valley-meeting.choices.close.variants.0.because':
      'Porque o contrato de Valley Haulage foi encerrado na arbitragem',
    'evt-valley-meeting.choices.close.variants.0.effect.result':
      'A reunião termina sem respostas, e os motoristas da transportadora falam contra o moinho na saída.',
    'evt-cleaning-log.title': 'Uma lacuna no registro de limpeza',
    'evt-cleaning-log.text':
      'O registro de limpeza noturna do setor de peneiramento tem uma semana em branco: a limpeza foi feita, mas as fichas nunca foram assinadas. County Food Standards lê o registro em toda auditoria.',
    'evt-cleaning-log.choices.invoices.label':
      'Pedir ao condado que aceite as notas da empresa de limpeza',
    'evt-cleaning-log.choices.invoices.effect.result':
      'Com base no histórico do moinho, o condado aceita as notas da empresa de limpeza para a semana em branco.',
    'evt-cleaning-log.choices.report.label': 'Registrar a situação encontrada e comunicar a lacuna',
    'evt-cleaning-log.choices.report.effect.result':
      'A lacuna é comunicada com as notas da empresa de limpeza anexadas. O condado registra a ocorrência.',
    'evt-cleaning-log.choices.reclean.label': 'Limpar o setor novamente e registrar agora',
    'evt-cleaning-log.choices.reclean.effect.modifier.label':
      'Nova limpeza do setor de peneiramento',
    'evt-cleaning-log.choices.reclean.effect.result':
      'O setor de peneiramento é limpo novamente e o registro fica completo a partir de hoje.',
    'evt-cleaning-log.choices.backdate.label': 'Colocar datas retroativas nas fichas ausentes',
    'evt-cleaning-log.choices.backdate.effect.result':
      'O auditor compara as datas das fichas com as notas da empresa de limpeza. A aprovação do moinho é suspensa.',
    'evt-cleaning-log.choices.leave.label': 'Deixar para a auditoria',
    'evt-cleaning-log.choices.leave.effect.result':
      'O auditor encontra a semana em branco e a registra no relatório.',
    'evt-reinstatement-audit.title': 'A auditoria de restabelecimento',
    'evt-reinstatement-audit.text':
      'County Food Standards restabelecerá a aprovação do moinho após uma auditoria completa: todos os registros abertos, todos os lotes rastreados e todas as fichas de limpeza conferidas com suas notas.',
    'evt-reinstatement-audit.choices.open.label': 'Abrir todos os registros aos auditores',
    'evt-reinstatement-audit.choices.open.effect.result':
      'A auditoria dura dois dias e a aprovação é restabelecida.',
    'evt-reinstatement-audit.choices.wait.label': 'Pedir mais tempo',
    'evt-reinstatement-audit.choices.wait.effect.result': 'Os auditores concordam em voltar.',
    'evt-hire-sifter.title': 'Um plansifter móvel para alugar',
    'evt-hire-sifter.text':
      'Uma locadora de equipamentos oferece um plansifter móvel para as semanas de maior movimento. A unidade grande tem o dobro da capacidade e uma peneira mais grossa; a pequena é certificada para farinha e mais lenta.',
    'evt-hire-sifter.choices.large.label': 'Alugar a unidade grande',
    'evt-hire-sifter.choices.large.effect.modifier.label': 'Plansifter móvel grande',
    'evt-hire-sifter.choices.large.effect.result':
      'O plansifter grande chega em um caminhão prancha e a linha opera mais rápido, com peneiramento mais grosso.',
    'evt-hire-sifter.choices.small.label': 'Alugar a unidade certificada',
    'evt-hire-sifter.choices.small.effect.modifier.label': 'Plansifter móvel certificado',
    'evt-hire-sifter.choices.small.effect.result':
      'O plansifter certificado é instalado e a linha opera um pouco mais rápido.',
    'evt-hire-sifter.choices.decline.label': 'Recusar o aluguel',
    'evt-hire-sifter.choices.decline.effect.result': 'A locadora de equipamentos segue adiante.',
    'evt-premium-buyer.title': 'Um preço extra do atacadista da cidade',
    'evt-premium-buyer.text':
      'Um atacadista da cidade oferece um preço extra pela prioridade sobre a farinha branca forte do moinho durante a próxima safra. Seus compradores pagam bem e em dia. Riverside Bakers’ Cooperative e County School Meals ficariam atrás dele.',
    'evt-premium-buyer.choices.accept.label': 'Dar prioridade ao atacadista',
    'evt-premium-buyer.choices.accept.effect.modifier.label': 'Preço extra do atacadista',
    'evt-premium-buyer.choices.accept.effect.result':
      'O atacadista recebe prioridade. Os padeiros e as cozinhas das escolas aguardam.',
    'evt-premium-buyer.choices.coop.label': 'Oferecer as condições da cooperativa',
    'evt-premium-buyer.choices.coop.effect.modifier.label': 'Condições da cooperativa',
    'evt-premium-buyer.choices.coop.effect.result':
      'O atacadista compra nas condições da cooperativa, atrás dos clientes regulares.',
    'evt-premium-buyer.choices.decline.label': 'Recusar o preço extra',
    'evt-premium-buyer.choices.decline.effect.result': 'O atacadista procura outro fornecedor.',
    'evt-second-haulier.title': 'Uma transportadora maior faz contato',
    'evt-second-haulier.text':
      'Uma transportadora maior oferece assumir as coletas do moinho por uma tarifa menor, com mais caminhões e menos atenção a cada cliente. Valley Haulage fica sabendo no mesmo dia.',
    'evt-second-haulier.choices.switch.label': 'Transferir as coletas para a empresa maior',
    'evt-second-haulier.choices.switch.effect.modifier.label': 'Transportadora maior',
    'evt-second-haulier.choices.switch.effect.result':
      'A empresa maior assume as coletas. Seus caminhões chegam quando podem.',
    'evt-second-haulier.choices.share.label': 'Dividir as coletas entre as duas',
    'evt-second-haulier.choices.share.effect.result':
      'As coletas são divididas entre as duas empresas.',
    'evt-second-haulier.choices.stay.label': 'Continuar com Valley Haulage',
    'evt-second-haulier.choices.stay.effect.result':
      'O moinho continua com Valley Haulage, que reconhece o gesto.',
    'evt-long-night.title': 'A longa noite',
    'evt-long-night.text':
      'Uma frente de tempestade e uma emergência na rede elétrica chegam na mesma noite. O moinho pode empregar sua própria equipe em uma frente. A outra terá de resistir com o que foi construído para ela.',
    'evt-long-night.choices.intake.label': 'Defender a recepção e os armazéns de grãos',
    'evt-long-night.choices.intake.effect.result':
      'O moinho emprega sua própria equipe na recepção durante a tempestade.',
    'evt-long-night.choices.floor.label': 'Defender o setor de moagem',
    'evt-long-night.choices.floor.effect.result':
      'O moinho emprega sua própria equipe no setor de moagem durante a emergência da rede.',
    'evt-long-night.choices.partner.label': 'Deixar com o parceiro de IA',
    'evt-long-night.choices.partner.effect.result': 'O parceiro de IA defende o setor de moagem.',
  },
});
