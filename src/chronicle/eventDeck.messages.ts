import { defineMessages } from '../i18n';

export const eventDeckMessages = defineMessages({
  en: {
    'evt-generous-crop-year.title': 'A generous crop year',
    'evt-generous-crop-year.text':
      'The growers have more wheat than their stores will hold, and the weighbridge queue runs back to the lane. Their cooperative offers a price discount on the crop-year contract if the mill commits early. The saving can stay in the fund or be passed on.',
    'evt-generous-crop-year.choices.bank.label': 'Bank the grower discount',
    'evt-generous-crop-year.choices.bank.effect.result':
      'The early contract is signed and the discount goes into the co-op fund.',
    'evt-generous-crop-year.choices.pass-on.label': 'Pass it on to School Meals',
    'evt-generous-crop-year.choices.pass-on.effect.result':
      'The saving is passed on as a lower price to County School Meals, who notice.',
    'evt-millwrights-workshop.title': 'The travelling millwrights',
    'evt-millwrights-workshop.text':
      'A millwrights’ guild touring the district offers a workshop on roll fluting and gap setting. They need the roller floor for a morning and a contribution towards their travel. Their notes alone are free.',
    'evt-millwrights-workshop.choices.host.label': 'Host the workshop',
    'evt-millwrights-workshop.choices.host.effect.modifier.label': 'Fresh roll settings',
    'evt-millwrights-workshop.choices.host.effect.result':
      'The guild resets the roll gaps with the crew and leaves a marked-up setting sheet.',
    'evt-millwrights-workshop.choices.notes.label': 'Take their notes only',
    'evt-millwrights-workshop.choices.notes.effect.result':
      'The guild leaves a copy of its notes and moves on to the next mill.',
    'evt-off-peak-tariff.title': 'An off-peak tariff trial',
    'evt-off-peak-tariff.text':
      'The distribution network is trialling a cheaper overnight tariff for small industrial sites. Joining is free; a load-shift timer on the cleaning-house motors would let the mill take full advantage. The trial window is short.',
    'evt-off-peak-tariff.choices.timer.label': 'Fit a load-shift timer',
    'evt-off-peak-tariff.choices.timer.effect.modifier.label': 'Off-peak running',
    'evt-off-peak-tariff.choices.timer.effect.result':
      'The timer moves cleaning and conditioning loads into the cheap overnight band.',
    'evt-off-peak-tariff.choices.join.label': 'Join the trial as we are',
    'evt-off-peak-tariff.choices.join.effect.modifier.label': 'Off-peak tariff',
    'evt-off-peak-tariff.choices.join.effect.result':
      'The mill joins the trial and picks up whatever overnight load already falls in the band.',
    'evt-bakers-proving-test.title': 'A good proving test',
    'evt-bakers-proving-test.text':
      'Riverside Bakers’ Cooperative ran a proving test on the last strong white and the loaves stood tall. Its buyer rings to say so and asks whether the bakers might see the mill. A tour costs a morning’s attention and a modest outlay.',
    'evt-bakers-proving-test.choices.tour.label': 'Invite them for a tour',
    'evt-bakers-proving-test.choices.tour.effect.result':
      'The bakers walk the roller floor and leave with a better sense of what the mill can do.',
    'evt-bakers-proving-test.choices.letter.label': 'Thank them by letter',
    'evt-bakers-proving-test.choices.letter.effect.result':
      'A short letter of thanks goes back to Riverside with the next delivery note.',
    'evt-village-work-party.title': 'The village work party',
    'evt-village-work-party.text':
      'The village harvest committee offers a weekend work party to clear the yard drains and the culvert by the millstream. They ask only that the mill feeds them. With the drains clear, a heavy storm is less likely to stop the yard.',
    'evt-village-work-party.choices.accept.label': 'Accept and provide lunch',
    'evt-village-work-party.choices.accept.effect.modifier.label': 'Drains cleared',
    'evt-village-work-party.choices.accept.effect.result':
      'The drains and culvert run clear, and the committee goes home well fed.',
    'evt-village-work-party.choices.decline.label': 'Thank them and decline',
    'evt-village-work-party.choices.decline.effect.result':
      'The committee is thanked and the drains are left for the next maintenance round.',
    'evt-federation-grant.title': 'A modernisation grant',
    'evt-federation-grant.text':
      'The regional federation of cooperatives has a small modernisation grant for member mills that file a full energy and yield return. The return takes careful work from the records. A short return still qualifies for part of the grant.',
    'evt-federation-grant.choices.full.label': 'File the full return',
    'evt-federation-grant.choices.full.effect.result':
      'The federation accepts the full return and pays the whole grant into the fund.',
    'evt-federation-grant.choices.short.label': 'File a short return',
    'evt-federation-grant.choices.short.effect.result':
      'The short return is accepted and part of the grant is paid.',
    'evt-college-test-milling.title': 'Test milling for the college',
    'evt-college-test-milling.text':
      'The agricultural college is trialling new wheat varieties and asks the mill to run its sample lots through the laboratory mill and the main line. The work slows the line for a shift or two. The results come back with the college’s analysis attached.',
    'evt-college-test-milling.choices.run.label': 'Run the test milling',
    'evt-college-test-milling.choices.run.effect.modifier.label': 'Variety trials',
    'evt-college-test-milling.choices.run.effect.result':
      'The samples run through the line and the college shares its full analysis.',
    'evt-college-test-milling.choices.lab.label': 'Share laboratory data only',
    'evt-college-test-milling.choices.lab.effect.result':
      'The laboratory mill runs the samples and the readings go to the college.',
    'evt-wet-intake.title': 'Wet grain at the intake',
    'evt-wet-intake.text':
      'The moisture meter at the intake reads well above safe storage, load after load. Damp wheat bridges in the bins and mills soft and sticky. A mobile dryer can be hired, or the wet lots blended down with drier stored grain.',
    'evt-wet-intake.choices.dryer.label': 'Hire a mobile dryer',
    'evt-wet-intake.choices.dryer.effect.result':
      'The dryer brings the intake down to storage moisture and the wet-year penalty lifts.',
    'evt-wet-intake.choices.blend.label': 'Blend with stored grain',
    'evt-wet-intake.choices.blend.effect.modifier.label': 'Blending runs',
    'evt-wet-intake.choices.blend.effect.result':
      'The wet lots are blended down with drier stored grain; the extra handling slows the line.',
    'evt-wet-intake.choices.mill-on.label': 'Mill it as it comes',
    'evt-wet-intake.choices.mill-on.effect.modifier.label': 'Damp stock',
    'evt-wet-intake.choices.mill-on.effect.result':
      'The wet grain goes through untreated and the sifters blind more often.',
    'evt-low-falling-number.title': 'Low falling numbers',
    'evt-low-falling-number.text':
      'The laboratory’s falling-number test is coming back short: some of the harvest sprouted in the ear before it was cut. Bread from this grain bakes with a sticky crumb. Blending with sound stored grain restores it, at a cost.',
    'evt-low-falling-number.choices.blend.label': 'Blend with sound grain',
    'evt-low-falling-number.choices.blend.effect.result':
      'Sound stored grain is blended in and the falling number is back within the bakers’ range.',
    'evt-low-falling-number.choices.discount.label': 'Ask the growers for a discount',
    'evt-low-falling-number.choices.discount.effect.modifier.label': 'Sprouted grain',
    'evt-low-falling-number.choices.discount.effect.result':
      'The growers accept a discount on the affected lots, which go through unblended.',
    'evt-low-falling-number.choices.mill-on.label': 'Mill it unblended',
    'evt-low-falling-number.choices.mill-on.effect.result':
      'The bakers at Riverside notice the crumb and say so.',
    'evt-sack-delivery-slips.title': 'The sack delivery slips',
    'evt-sack-delivery-slips.text':
      'The paper-sack supplier rings to say this week’s delivery is stuck behind a breakdown at their works. The packers have enough for part of a shift. A rush freight surcharge would bring the delivery forward.',
    'evt-sack-delivery-slips.choices.counted.label': 'Ask the counted supplier for spare bales',
    'evt-sack-delivery-slips.choices.counted.effect.result':
      'The supplier whose count the mill checked sends spare bales from its own store at no charge.',
    'evt-sack-delivery-slips.choices.rush.label': 'Pay the rush freight',
    'evt-sack-delivery-slips.choices.rush.effect.result':
      'The scheduled delivery arrives on time by rush freight and the packers do not stop.',
    'evt-sack-delivery-slips.choices.wait.label': 'Wait for the delivery',
    'evt-sack-delivery-slips.choices.wait.effect.result':
      'The packers run short before the delivery arrives.',
    'evt-lot-notification.title': 'A grower lot notification',
    'evt-lot-notification.text':
      'A grower calls: a neighbouring field was sprayed on a windy day and one of their recent lots may have caught drift. Their own laboratory will take days. A rapid test at the county laboratory would settle it before the formal hold procedure begins.',
    'evt-lot-notification.choices.test.label': 'Pay for a rapid test',
    'evt-lot-notification.choices.test.effect.result':
      'The rapid test comes back clear and the lot is released with a traceability record.',
    'evt-lot-notification.choices.hold.label': 'Hold the lot and call the lab',
    'evt-lot-notification.choices.hold.effect.result':
      'The lot is placed under formal hold and dispatch waits on the traceability review.',
    'evt-lot-notification.choices.mill-on.label': 'Mill it while the grower’s laboratory works',
    'evt-lot-notification.choices.mill-on.effect.modifier.label': 'Unconfirmed lot',
    'evt-lot-notification.choices.mill-on.effect.result':
      'The lot is milled while the grower’s laboratory works, and the county notes that a notified lot went through untested.',
    'evt-haulier-breakdown.title': 'The haulier breaks down',
    'evt-haulier-breakdown.text':
      'Valley Haulage’s lorry for the afternoon collection has broken down on the bypass. Its workshop expects it back tomorrow. A relief lorry can be hired from the next town.',
    'evt-haulier-breakdown.choices.relief.label': 'Hire a relief lorry',
    'evt-haulier-breakdown.choices.relief.effect.result':
      'The relief lorry makes the collection on time.',
    'evt-haulier-breakdown.choices.wait.label': 'Wait for the repair',
    'evt-haulier-breakdown.choices.wait.effect.result':
      'The collection slips and finished goods back up at the loading bay. The haulier remembers the patience.',
    'evt-dull-roll-flutes.title': 'Dull roll flutes',
    'evt-dull-roll-flutes.text':
      'The break rolls on R.M. 101 are drawing more current and the release is falling: the flutes have dulled. Sending both pairs away for refluting is the full answer. The worst pair can go first.',
    'evt-dull-roll-flutes.choices.both.label': 'Reflute both pairs',
    'evt-dull-roll-flutes.choices.both.effect.modifier.label': 'Sharp rolls',
    'evt-dull-roll-flutes.choices.both.effect.result':
      'Both pairs come back sharp and the break release recovers.',
    'evt-dull-roll-flutes.choices.worst.label': 'Reflute the worst pair',
    'evt-dull-roll-flutes.choices.worst.effect.modifier.label': 'Refluted pair',
    'evt-dull-roll-flutes.choices.worst.effect.result':
      'The worst pair is refluted and the motor current settles.',
    'evt-dull-roll-flutes.choices.run-on.label': 'Run them another week',
    'evt-dull-roll-flutes.choices.run-on.effect.modifier.label': 'Dull flutes',
    'evt-dull-roll-flutes.choices.run-on.effect.result':
      'The dull rolls stay in and draw more power for less release.',
    'evt-school-specks.title': 'Specks in the school flour',
    'evt-school-specks.text':
      'County School Meals reports dark specks in a delivery of community flour. It is bran, harmless, but the kitchens have asked questions. They want to know what the mill will do about it.',
    'evt-school-specks.choices.visit.label': 'Send the QC records',
    'evt-school-specks.choices.visit.effect.result':
      'The QC records and sieve analysis go to the kitchens, who are reassured.',
    'evt-school-specks.choices.tighten.label': 'Tighten the sifter covers',
    'evt-school-specks.choices.tighten.effect.modifier.label': 'Finer sifting',
    'evt-school-specks.choices.tighten.effect.result':
      'The sifter covers are changed to a closer mesh, at some cost to throughput.',
    'evt-school-specks.choices.file.label': 'File the complaint',
    'evt-school-specks.choices.file.effect.result':
      'The complaint is filed without an answer, and School Meals notices.',
    'evt-pest-sign.title': 'Pest signs in the bran store',
    'evt-pest-sign.text':
      'The weekly pest walk finds gnawed sacks and droppings in the bran store. The store is next to the packing line. The contracted pest-control firm can proof the building this week.',
    'evt-pest-sign.choices.firm.label': 'Call in the pest firm',
    'evt-pest-sign.choices.firm.effect.result':
      'The firm proofs the store and the gaps under the doors are sealed.',
    'evt-pest-sign.choices.in-house.label': 'Seal the store in-house',
    'evt-pest-sign.choices.in-house.effect.modifier.label': 'Store proofing',
    'evt-pest-sign.choices.in-house.effect.result':
      'The crew seals the store between runs and the line slows while it is done.',
    'evt-pest-sign.choices.note.label': 'Note it for the next visit',
    'evt-pest-sign.choices.note.effect.modifier.label': 'Pest risk',
    'evt-pest-sign.choices.note.effect.result':
      'The signs are noted and the store waits for the next scheduled visit.',
    'evt-inspector-visit.title': 'The food-safety inspector',
    'evt-inspector-visit.text':
      'A food-safety inspector from the county arrives unannounced and asks for the traceability records, the cleaning schedule and a walk of the packing hall. The visit is open until the inspector signs off. How the mill meets it shapes what the report says.',
    'evt-inspector-visit.choices.records.label': 'Walk them through the records',
    'evt-inspector-visit.choices.records.effect.result':
      'The inspector follows a lot from intake to dispatch and signs off with no actions.',
    'evt-inspector-visit.choices.deep-clean.label': 'Deep-clean before the walk',
    'evt-inspector-visit.choices.deep-clean.effect.modifier.label': 'Deep clean',
    'evt-inspector-visit.choices.deep-clean.effect.result':
      'The packing hall is deep-cleaned before the walk and the report is a clean one.',
    'evt-inspector-visit.choices.as-is.label': 'Let the visit run its course',
    'evt-inspector-visit.choices.as-is.effect.modifier.label': 'Inspection actions',
    'evt-inspector-visit.choices.as-is.effect.result':
      'The inspector signs off with a short list of actions to close.',
    'evt-two-buyers-one-slot.title': 'Two buyers, one slot',
    'evt-two-buyers-one-slot.text':
      'Riverside Bakers’ Cooperative and Community Pasta Works both want the early collection slot at the loading bay for the coming week. The bakers want strong white for a festival weekend; the pasta works wants semolina before a menu change. Each asks the mill to put them first.',
    'evt-two-buyers-one-slot.choices.bakers.label': 'Put the bakers first',
    'evt-two-buyers-one-slot.choices.bakers.effect.modifier.label': 'Strong-wheat conditioning',
    'evt-two-buyers-one-slot.choices.bakers.effect.result':
      'The bakers get the early slot; the longer strong-wheat conditioning draws more power.',
    'evt-two-buyers-one-slot.choices.pasta.label': 'Put the pasta works first',
    'evt-two-buyers-one-slot.choices.pasta.effect.modifier.label': 'Durum on the rolls',
    'evt-two-buyers-one-slot.choices.pasta.effect.result':
      'The pasta works gets the early slot; the hard durum is heavier on the rolls.',
    'evt-two-buyers-one-slot.choices.rota.label': 'Keep the booking order',
    'evt-two-buyers-one-slot.choices.rota.effect.result':
      'The slot goes by the booking order and neither buyer is put first.',
    'evt-growers-weighbridge.title': 'Hill farms and valley farms',
    'evt-growers-weighbridge.text':
      'The valley growers and the hill growers are arguing over who goes first at the weighbridge in the harvest rush. The valley farms offer a haulage discount for priority. The hill farms offer the data from their variety trials.',
    'evt-growers-weighbridge.choices.valley.label': 'Give the valley farms priority',
    'evt-growers-weighbridge.choices.valley.effect.modifier.label': 'Valley priority',
    'evt-growers-weighbridge.choices.valley.effect.result':
      'The valley farms go first and the haulage discount is paid; the hill lorries queue on the lane.',
    'evt-growers-weighbridge.choices.hill.label': 'Give the hill farms priority',
    'evt-growers-weighbridge.choices.hill.effect.modifier.label': 'Hill priority',
    'evt-growers-weighbridge.choices.hill.effect.result':
      'The hill farms go first and share their trial data; the bigger valley loads wait.',
    'evt-growers-weighbridge.choices.first-come.label': 'Keep first come, first served',
    'evt-growers-weighbridge.choices.first-come.effect.result':
      'The weighbridge stays first come, first served, and both groups grumble equally.',
    'evt-members-meeting.title': 'The members’ meeting',
    'evt-members-meeting.text':
      'The cooperative’s members meet to settle a motion: raise the share of each shift’s contribution held for reinvestment, or hold it down and keep prices low for the mill’s customers. Both sides have a fair case. The chair can also table the motion.',
    'evt-members-meeting.choices.reinvest.label': 'Raise the reinvestment share',
    'evt-members-meeting.choices.reinvest.effect.modifier.label': 'Members’ reinvestment motion',
    'evt-members-meeting.choices.reinvest.effect.result':
      'The motion carries and more of each shift’s contribution goes to the fund.',
    'evt-members-meeting.choices.prices.label': 'Keep prices low',
    'evt-members-meeting.choices.prices.effect.modifier.label': 'Members’ price motion',
    'evt-members-meeting.choices.prices.effect.result':
      'The members hold prices down; customers notice and the fund grows more slowly.',
    'evt-members-meeting.choices.table.label': 'Table the motion',
    'evt-members-meeting.choices.table.effect.result':
      'The motion is tabled until the next meeting.',
    'evt-demand-response.title': 'A demand-response call',
    'evt-demand-response.text':
      'The grid operator is short of capacity on a cold evening and offers a payment to sites that shed load at the peak. Shedding means slowing the line for a while. Declining costs nothing.',
    'evt-demand-response.choices.shed.label': 'Shed load at the peak',
    'evt-demand-response.choices.shed.effect.modifier.label': 'Load shedding',
    'evt-demand-response.choices.shed.effect.result':
      'The mill slows at the peak and the operator’s payment goes into the fund.',
    'evt-demand-response.choices.decline.label': 'Decline the call',
    'evt-demand-response.choices.decline.effect.result':
      'The mill runs on through the peak at its normal rate.',
  },
  zh: {
    'evt-generous-crop-year.title': '丰饶的作物年',
    'evt-generous-crop-year.text':
      '种植户的小麦多得仓里放不下，地磅前的车队一路排到巷口。他们的合作社提出：若磨坊提早签下作物年合约，便可折价。这笔省下的钱，可以留在基金里，也可以让利出去。',
    'evt-generous-crop-year.choices.bank.label': '将折价存入基金',
    'evt-generous-crop-year.choices.bank.effect.result': '合约提早签下，折价款进入了合作社基金。',
    'evt-generous-crop-year.choices.pass-on.label': '让利给 School Meals',
    'evt-generous-crop-year.choices.pass-on.effect.result':
      '这笔实惠化作更低的价钱让给了 County School Meals，对方记在了心里。',
    'evt-millwrights-workshop.title': '巡回的磨坊机匠',
    'evt-millwrights-workshop.text':
      '一支巡回本地的磨坊机匠行会愿意开一场讲习，讲磨辊拉丝与辊隙调整。他们要用磨辊层一个上午，还请磨坊贴补些盘缠。若只取他们的笔记，分文不收。',
    'evt-millwrights-workshop.choices.host.label': '承办这场讲习',
    'evt-millwrights-workshop.choices.host.effect.modifier.label': '崭新的磨辊设定',
    'evt-millwrights-workshop.choices.host.effect.result':
      '行会与班组一同校准了辊隙，留下一张写满标注的设定表。',
    'evt-millwrights-workshop.choices.notes.label': '只取他们的笔记',
    'evt-millwrights-workshop.choices.notes.effect.result':
      '行会留下一册笔记抄本，动身前往下一座磨坊。',
    'evt-off-peak-tariff.title': '谷时电价试行',
    'evt-off-peak-tariff.text':
      '配电网络正为小型工业用户试行更便宜的夜间电价。加入分文不花；若给清理间的电机装上负荷转移定时器，磨坊便能占尽便宜。试行的时间窗不长。',
    'evt-off-peak-tariff.choices.timer.label': '装设负荷转移定时器',
    'evt-off-peak-tariff.choices.timer.effect.modifier.label': '谷时运行',
    'evt-off-peak-tariff.choices.timer.effect.result':
      '定时器把清理与调理的负荷挪进了廉价的夜间时段。',
    'evt-off-peak-tariff.choices.join.label': '照原样加入试行',
    'evt-off-peak-tariff.choices.join.effect.modifier.label': '谷时电价',
    'evt-off-peak-tariff.choices.join.effect.result':
      '磨坊加入试行，凡是本就落在夜间时段里的负荷，都顺势占了便宜。',
    'evt-bakers-proving-test.title': '一次漂亮的醒发测试',
    'evt-bakers-proving-test.text':
      'Riverside Bakers’ Cooperative 用上一批高筋面包粉做了醒发测试，面包烤得挺拔饱满。他们的采购来电道贺，又问面包师们能否来磨坊看看。接待一趟参观，要搭上一个上午的照应，外加一笔小小的开销。',
    'evt-bakers-proving-test.choices.tour.label': '邀他们进来参观',
    'evt-bakers-proving-test.choices.tour.effect.result':
      '面包师们走过磨辊层，离开时对磨坊的本事有了更清楚的认识。',
    'evt-bakers-proving-test.choices.letter.label': '去信道谢',
    'evt-bakers-proving-test.choices.letter.effect.result':
      '一封简短的谢函，随下一张送货单寄回了 Riverside。',
    'evt-village-work-party.title': '村里的帮工队',
    'evt-village-work-party.text':
      '村庄收割委员会提议周末组一支帮工队，清疏场院的下水道和磨坊水道旁的涵洞。他们只求磨坊管一顿饭。水道疏通之后，一场暴雨便不容易让场院停摆。',
    'evt-village-work-party.choices.accept.label': '应下并备好午饭',
    'evt-village-work-party.choices.accept.effect.modifier.label': '水道已疏通',
    'evt-village-work-party.choices.accept.effect.result':
      '下水道与涵洞畅流无阻，委员会的众人也吃得饱足而归。',
    'evt-village-work-party.choices.decline.label': '道谢但婉拒',
    'evt-village-work-party.choices.decline.effect.result':
      '委员会受了谢意，水道便留待下一轮维护再清。',
    'evt-federation-grant.title': '一笔现代化补助金',
    'evt-federation-grant.text':
      '地区合作社联合会设有一笔小小的现代化补助金，发给提交完整能耗与产量申报表的成员磨坊。申报表要从记录里仔细整理。只交简表，也仍能领到补助金的一部分。',
    'evt-federation-grant.choices.full.label': '提交完整申报表',
    'evt-federation-grant.choices.full.effect.result':
      '联合会收下了完整申报表，把整笔补助金拨入了基金。',
    'evt-federation-grant.choices.short.label': '提交简表',
    'evt-federation-grant.choices.short.effect.result': '简表获得受理，补助金拨付了一部分。',
    'evt-college-test-milling.title': '为农学院试磨',
    'evt-college-test-milling.text':
      '农学院正在试种新的小麦品种，请磨坊把他们的样品批次过一遍实验磨和主线。这活计会让产线慢上一两个班次。结果送回来时，会附上农学院自己的分析。',
    'evt-college-test-milling.choices.run.label': '承接试磨',
    'evt-college-test-milling.choices.run.effect.modifier.label': '品种试验',
    'evt-college-test-milling.choices.run.effect.result':
      '样品在产线上走了一遍，农学院分享了完整的分析。',
    'evt-college-test-milling.choices.lab.label': '只提供实验室数据',
    'evt-college-test-milling.choices.lab.effect.result':
      '实验磨加工了样品，各项读数送到了农学院手中。',
    'evt-wet-intake.title': '接收处来了湿谷',
    'evt-wet-intake.text':
      '接收处的水分仪读数远超安全储存的界限，一车如此，车车如此。湿麦在仓里架桥结拱，磨起来又软又黏。可以租一台移动烘干机，也可以把湿批次与库存的干谷掺混降湿。',
    'evt-wet-intake.choices.dryer.label': '租用移动烘干机',
    'evt-wet-intake.choices.dryer.effect.result':
      '烘干机把来谷降到了储存水分，湿年的罚值随之解除。',
    'evt-wet-intake.choices.blend.label': '与库存谷物掺混',
    'evt-wet-intake.choices.blend.effect.modifier.label': '掺混加工',
    'evt-wet-intake.choices.blend.effect.result':
      '湿批次与库存干谷掺混降湿；多出的搬运让产线慢了下来。',
    'evt-wet-intake.choices.mill-on.label': '来什么磨什么',
    'evt-wet-intake.choices.mill-on.effect.modifier.label': '潮湿存粮',
    'evt-wet-intake.choices.mill-on.effect.result':
      '湿谷未经处理直接入磨，平筛糊网的次数多了起来。',
    'evt-low-falling-number.title': '降落数值偏低',
    'evt-low-falling-number.text':
      '实验室的降落数值检验接连报出低值：一部分麦子在收割之前就在穗上发了芽。这样的麦子烤出的面包，瓤心发黏。与完好的库存谷物掺混可以补救，只是要花钱。',
    'evt-low-falling-number.choices.blend.label': '与完好谷物掺混',
    'evt-low-falling-number.choices.blend.effect.result':
      '完好的库存谷物掺了进去，降落数值回到了面包师们要求的区间。',
    'evt-low-falling-number.choices.discount.label': '向种植户讨个折价',
    'evt-low-falling-number.choices.discount.effect.modifier.label': '穗发芽谷物',
    'evt-low-falling-number.choices.discount.effect.result':
      '种植户接受对受影响的批次折价，这些批次未加掺混便入了磨。',
    'evt-low-falling-number.choices.mill-on.label': '不掺混直接加工',
    'evt-low-falling-number.choices.mill-on.effect.result':
      'Riverside 的面包师们尝出了瓤心的毛病，也直说了出来。',
    'evt-sack-delivery-slips.title': '纸袋到货延误',
    'evt-sack-delivery-slips.text':
      '纸袋供应商来电：本周的货被他们厂里的一场故障堵住了。包装线的存袋只够小半个班次。加一笔加急运费，货就能提前送到。',
    'evt-sack-delivery-slips.choices.counted.label': '请盘点过的供应商匀出备用袋捆',
    'evt-sack-delivery-slips.choices.counted.effect.result':
      '那家被磨坊核过数目的供应商从自家仓库匀出袋捆，分文未取。',
    'evt-sack-delivery-slips.choices.rush.label': '支付加急运费',
    'evt-sack-delivery-slips.choices.rush.effect.result':
      '原定的货经加急运输准时送到，包装线没有停。',
    'evt-sack-delivery-slips.choices.wait.label': '坐等到货',
    'evt-sack-delivery-slips.choices.wait.effect.result': '货还没到，包装线就先断了袋。',
    'evt-lot-notification.title': '一个种植户批次的通报',
    'evt-lot-notification.text':
      '一位种植户来电：邻田在大风天喷了药，他们最近的一个批次可能沾了飘移的药雾。自家实验室出结果要等好几天。趁正式扣留程序尚未启动，去县实验室做一次快检，便能有个了断。',
    'evt-lot-notification.choices.test.label': '出资做快检',
    'evt-lot-notification.choices.test.effect.result': '快检结果无恙，批次携一份追溯记录获得放行。',
    'evt-lot-notification.choices.hold.label': '扣留该批并联系实验室',
    'evt-lot-notification.choices.hold.effect.result': '该批被正式扣留，发运要等追溯审查的结果。',
    'evt-lot-notification.choices.mill-on.label': '在种植户实验室出结果前照常加工',
    'evt-lot-notification.choices.mill-on.effect.modifier.label': '未确认批次',
    'evt-lot-notification.choices.mill-on.effect.result':
      '该批在种植户实验室检测期间入了磨；县里记下：一个受过通报的批次未经检验便加工了。',
    'evt-haulier-breakdown.title': '承运方的卡车抛锚了',
    'evt-haulier-breakdown.text':
      'Valley Haulage 下午提货的卡车在绕城公路上抛了锚。他们的车间预计明天能修好。可以从邻镇雇一辆替班卡车。',
    'evt-haulier-breakdown.choices.relief.label': '雇一辆替班卡车',
    'evt-haulier-breakdown.choices.relief.effect.result': '替班卡车准时完成了提货。',
    'evt-haulier-breakdown.choices.wait.label': '等它修好',
    'evt-haulier-breakdown.choices.wait.effect.result':
      '提货推迟，成品在装卸区越积越多。承运方记住了这份耐心。',
    'evt-dull-roll-flutes.title': '磨辊拉丝钝了',
    'evt-dull-roll-flutes.text':
      'R.M. 101 的皮磨磨辊电流越吃越高，剥刮率却在往下掉：拉丝钝了。把两对磨辊都送去重新拉丝，才是彻底的解法。最钝的那对可以先送。',
    'evt-dull-roll-flutes.choices.both.label': '两对都送去重拉丝',
    'evt-dull-roll-flutes.choices.both.effect.modifier.label': '磨辊锋利',
    'evt-dull-roll-flutes.choices.both.effect.result': '两对磨辊锋利归来，剥刮率恢复了。',
    'evt-dull-roll-flutes.choices.worst.label': '先送最钝的一对',
    'evt-dull-roll-flutes.choices.worst.effect.modifier.label': '一对已重拉丝',
    'evt-dull-roll-flutes.choices.worst.effect.result': '最钝的一对重新拉了丝，电机电流安稳下来。',
    'evt-dull-roll-flutes.choices.run-on.label': '再撑一个星期',
    'evt-dull-roll-flutes.choices.run-on.effect.modifier.label': '拉丝已钝',
    'evt-dull-roll-flutes.choices.run-on.effect.result': '钝辊继续运转，电耗更高，剥刮率反而更低。',
    'evt-school-specks.title': '学生餐面粉里的斑点',
    'evt-school-specks.text':
      'County School Meals 报告说，一批社区多用途面粉里出现了黑色斑点。那是麸皮，无害，可厨房还是起了疑问。他们想知道磨坊打算怎么办。',
    'evt-school-specks.choices.visit.label': '送上质检记录',
    'evt-school-specks.choices.visit.effect.result': '质检记录与筛析报告送到了厨房，众人安了心。',
    'evt-school-specks.choices.tighten.label': '换上更密的筛网',
    'evt-school-specks.choices.tighten.effect.modifier.label': '更细的筛理',
    'evt-school-specks.choices.tighten.effect.result': '平筛筛网换成了更密的目数，产量受到些损失。',
    'evt-school-specks.choices.file.label': '把投诉归档了事',
    'evt-school-specks.choices.file.effect.result': '投诉未作答复便归了档，School Meals 看在眼里。',
    'evt-pest-sign.title': '麸皮库里的虫患迹象',
    'evt-pest-sign.text':
      '每周虫害巡查在麸皮库发现了被咬破的麻袋和粪便。库房紧挨着包装线。签约的虫害防治公司本周就能来封堵房舍。',
    'evt-pest-sign.choices.firm.label': '请虫害公司来处理',
    'evt-pest-sign.choices.firm.effect.result': '公司封堵了库房，门下的缝隙都封得严严实实。',
    'evt-pest-sign.choices.in-house.label': '自家动手封堵库房',
    'evt-pest-sign.choices.in-house.effect.modifier.label': '库房封堵',
    'evt-pest-sign.choices.in-house.effect.result':
      '班组趁两趟加工的间隙封堵库房，活计进行时产线慢了下来。',
    'evt-pest-sign.choices.note.label': '先记下，等下次上门再说',
    'evt-pest-sign.choices.note.effect.modifier.label': '虫害风险',
    'evt-pest-sign.choices.note.effect.result': '迹象记录在案，库房只能等下一次排好的上门。',
    'evt-inspector-visit.title': '食品安全检查员',
    'evt-inspector-visit.text':
      '县里的食品安全检查员不请自来，要看追溯记录、清洁计划表，还要走一趟包装车间。检查员签字结案之前，这场检查一直悬着。磨坊如何应对，决定了报告里写些什么。',
    'evt-inspector-visit.choices.records.label': '陪他细看记录',
    'evt-inspector-visit.choices.records.effect.result':
      '检查员跟着一个批次从接收走到发运，签字结案，没有一项整改。',
    'evt-inspector-visit.choices.deep-clean.label': '先行深度清洁再陪走',
    'evt-inspector-visit.choices.deep-clean.effect.modifier.label': '深度清洁',
    'evt-inspector-visit.choices.deep-clean.effect.result':
      '包装车间在巡查前做了深度清洁，报告写得干干净净。',
    'evt-inspector-visit.choices.as-is.label': '任由检查顺其自然',
    'evt-inspector-visit.choices.as-is.effect.modifier.label': '检查整改项',
    'evt-inspector-visit.choices.as-is.effect.result': '检查员签字结案，留下短短一列待办的整改。',
    'evt-two-buyers-one-slot.title': '两家买主，一个时段',
    'evt-two-buyers-one-slot.text':
      'Riverside Bakers’ Cooperative 与 Community Pasta Works 都想要下周装卸区的早班提货时段。面包师们要高筋面包粉，赶一个节庆周末；意面坊要粗粒粉，赶一次菜单更换。两家都请磨坊把自己排在头里。',
    'evt-two-buyers-one-slot.choices.bakers.label': '让面包师们优先',
    'evt-two-buyers-one-slot.choices.bakers.effect.modifier.label': '高筋麦调理',
    'evt-two-buyers-one-slot.choices.bakers.effect.result':
      '面包师们拿到早班时段；高筋麦调理时间更长，电也耗得更多。',
    'evt-two-buyers-one-slot.choices.pasta.label': '让意面坊优先',
    'evt-two-buyers-one-slot.choices.pasta.effect.modifier.label': '杜兰麦上辊',
    'evt-two-buyers-one-slot.choices.pasta.effect.result':
      '意面坊拿到早班时段；坚硬的杜兰麦对磨辊损耗更大。',
    'evt-two-buyers-one-slot.choices.rota.label': '照预订顺序来',
    'evt-two-buyers-one-slot.choices.rota.effect.result': '时段照预订顺序排，谁也没被排在头里。',
    'evt-growers-weighbridge.title': '山上的农场与谷地的农场',
    'evt-growers-weighbridge.text':
      '收麦的忙季里，谷地的种植户和山上的种植户为了谁先上地磅争执不下。谷地农场许诺运费折价，换一个优先；山上农场则愿意交出他们品种试验的数据。',
    'evt-growers-weighbridge.choices.valley.label': '让谷地农场优先',
    'evt-growers-weighbridge.choices.valley.effect.modifier.label': '谷地优先',
    'evt-growers-weighbridge.choices.valley.effect.result':
      '谷地农场先过了磅，运费折价也付了；山上的卡车在巷子里排起了队。',
    'evt-growers-weighbridge.choices.hill.label': '让山上农场优先',
    'evt-growers-weighbridge.choices.hill.effect.modifier.label': '山上优先',
    'evt-growers-weighbridge.choices.hill.effect.result':
      '山上农场先过了磅，交出了试验数据；谷地更满的车只能等。',
    'evt-growers-weighbridge.choices.first-come.label': '维持先到先得',
    'evt-growers-weighbridge.choices.first-come.effect.result':
      '地磅照旧先到先得，两拨人各抱怨各的。',
    'evt-members-meeting.title': '成员大会',
    'evt-members-meeting.text':
      '合作社的成员们开会表决一项动议：提高每个班次贡献中留作再投资的份额，还是压低它、让磨坊的顾客继续享受低价。两边各有各的理。主持人也可以把动议搁置。',
    'evt-members-meeting.choices.reinvest.label': '提高再投资份额',
    'evt-members-meeting.choices.reinvest.effect.modifier.label': '成员的再投资动议',
    'evt-members-meeting.choices.reinvest.effect.result':
      '动议获得通过，每个班次的贡献有更多进了基金。',
    'evt-members-meeting.choices.prices.label': '维持低价',
    'evt-members-meeting.choices.prices.effect.modifier.label': '成员的低价动议',
    'evt-members-meeting.choices.prices.effect.result':
      '成员们把价格压了下来；顾客们看在眼里，基金却长得慢了。',
    'evt-members-meeting.choices.table.label': '搁置动议',
    'evt-members-meeting.choices.table.effect.result': '动议被搁置，留待下一次大会。',
    'evt-demand-response.title': '一通需求响应邀约',
    'evt-demand-response.text':
      '寒夜电网吃紧，电网运营商出钱请各厂在峰时削减负荷。削减负荷，意味着让产线慢上一阵。回绝也不损失什么。',
    'evt-demand-response.choices.shed.label': '峰时削减负荷',
    'evt-demand-response.choices.shed.effect.modifier.label': '削减负荷',
    'evt-demand-response.choices.shed.effect.result':
      '磨坊在峰时放慢了脚步，运营商的报酬进了基金。',
    'evt-demand-response.choices.decline.label': '回绝邀约',
    'evt-demand-response.choices.decline.effect.result': '磨坊照常速熬过了峰时。',
  },
  'pt-BR': {
    'evt-generous-crop-year.title': 'Uma safra generosa',
    'evt-generous-crop-year.text':
      'Os produtores têm mais trigo do que seus armazéns comportam, e a fila da balança chega até a estrada. Sua cooperativa oferece desconto no contrato da safra se o moinho fechar o acordo antecipadamente. A economia pode ficar no fundo ou ser repassada.',
    'evt-generous-crop-year.choices.bank.label': 'Guardar o desconto dos produtores',
    'evt-generous-crop-year.choices.bank.effect.result':
      'O contrato antecipado é assinado e o desconto vai para o fundo da cooperativa.',
    'evt-generous-crop-year.choices.pass-on.label': 'Repassar para School Meals',
    'evt-generous-crop-year.choices.pass-on.effect.result':
      'A economia é repassada como redução de preço para County School Meals, que reconhece o gesto.',
    'evt-millwrights-workshop.title': 'Os técnicos de moinhos itinerantes',
    'evt-millwrights-workshop.text':
      'Uma associação de técnicos de moinhos em visita à região oferece uma oficina sobre raiamento de rolos e ajuste de folga. Precisam do setor de moagem por uma manhã e de uma contribuição para a viagem. Apenas as anotações são gratuitas.',
    'evt-millwrights-workshop.choices.host.label': 'Receber a oficina',
    'evt-millwrights-workshop.choices.host.effect.modifier.label': 'Novos ajustes dos rolos',
    'evt-millwrights-workshop.choices.host.effect.result':
      'A associação ajusta as folgas dos rolos com a equipe e deixa uma ficha de regulagem anotada.',
    'evt-millwrights-workshop.choices.notes.label': 'Aceitar apenas as anotações',
    'evt-millwrights-workshop.choices.notes.effect.result':
      'A associação deixa uma cópia das anotações e segue para o próximo moinho.',
    'evt-off-peak-tariff.title': 'Um teste de tarifa fora de ponta',
    'evt-off-peak-tariff.text':
      'A distribuidora está testando uma tarifa noturna mais barata para pequenas indústrias. A adesão é gratuita; um temporizador nos motores do setor de limpeza permitiria aproveitar toda a vantagem. O prazo do teste é curto.',
    'evt-off-peak-tariff.choices.timer.label': 'Instalar um temporizador de carga',
    'evt-off-peak-tariff.choices.timer.effect.modifier.label': 'Operação fora de ponta',
    'evt-off-peak-tariff.choices.timer.effect.result':
      'O temporizador transfere as cargas de limpeza e condicionamento para o horário noturno mais barato.',
    'evt-off-peak-tariff.choices.join.label': 'Aderir ao teste como estamos',
    'evt-off-peak-tariff.choices.join.effect.modifier.label': 'Tarifa fora de ponta',
    'evt-off-peak-tariff.choices.join.effect.result':
      'O moinho adere ao teste e aproveita as cargas que já ocorrem no horário noturno mais barato.',
    'evt-bakers-proving-test.title': 'Um bom teste de fermentação',
    'evt-bakers-proving-test.text':
      'Riverside Bakers’ Cooperative fez um teste de fermentação com a última farinha branca forte, e os pães cresceram bem. Seu comprador liga para contar e pergunta se os padeiros podem visitar o moinho. A visita exige uma manhã de atenção e um pequeno gasto.',
    'evt-bakers-proving-test.choices.tour.label': 'Convidá-los para uma visita',
    'evt-bakers-proving-test.choices.tour.effect.result':
      'Os padeiros visitam o setor de moagem e saem entendendo melhor o que o moinho pode fazer.',
    'evt-bakers-proving-test.choices.letter.label': 'Agradecer por carta',
    'evt-bakers-proving-test.choices.letter.effect.result':
      'Uma breve carta de agradecimento segue para Riverside com a próxima nota de entrega.',
    'evt-village-work-party.title': 'O mutirão da vila',
    'evt-village-work-party.text':
      'O comitê da colheita da vila oferece um mutirão no fim de semana para limpar os drenos do pátio e o bueiro junto ao canal do moinho. Pedem apenas que o moinho forneça a comida. Com os drenos livres, uma tempestade forte tem menos chance de parar o pátio.',
    'evt-village-work-party.choices.accept.label': 'Aceitar e oferecer almoço',
    'evt-village-work-party.choices.accept.effect.modifier.label': 'Drenos desobstruídos',
    'evt-village-work-party.choices.accept.effect.result':
      'Os drenos e o bueiro ficam livres, e o comitê volta para casa bem alimentado.',
    'evt-village-work-party.choices.decline.label': 'Agradecer e recusar',
    'evt-village-work-party.choices.decline.effect.result':
      'O comitê recebe os agradecimentos, e os drenos ficam para a próxima rodada de manutenção.',
    'evt-federation-grant.title': 'Um subsídio para modernização',
    'evt-federation-grant.text':
      'A federação regional de cooperativas oferece um pequeno subsídio de modernização aos moinhos associados que apresentarem um relatório completo de energia e rendimento. Prepará-lo exige uma análise cuidadosa dos registros. Um relatório resumido ainda dá direito a parte do subsídio.',
    'evt-federation-grant.choices.full.label': 'Entregar o relatório completo',
    'evt-federation-grant.choices.full.effect.result':
      'A federação aceita o relatório completo e deposita todo o subsídio no fundo.',
    'evt-federation-grant.choices.short.label': 'Entregar um relatório resumido',
    'evt-federation-grant.choices.short.effect.result':
      'O relatório resumido é aceito e parte do subsídio é paga.',
    'evt-college-test-milling.title': 'Moagem experimental para a faculdade',
    'evt-college-test-milling.text':
      'A faculdade de agronomia está testando novas variedades de trigo e pede ao moinho que processe seus lotes de amostra no moinho de laboratório e na linha principal. O trabalho reduz o ritmo da linha por um ou dois turnos. Os resultados voltam acompanhados da análise da faculdade.',
    'evt-college-test-milling.choices.run.label': 'Fazer a moagem experimental',
    'evt-college-test-milling.choices.run.effect.modifier.label': 'Testes de variedades',
    'evt-college-test-milling.choices.run.effect.result':
      'As amostras passam pela linha e a faculdade compartilha sua análise completa.',
    'evt-college-test-milling.choices.lab.label': 'Compartilhar apenas os dados do laboratório',
    'evt-college-test-milling.choices.lab.effect.result':
      'O moinho de laboratório processa as amostras e as medições seguem para a faculdade.',
    'evt-wet-intake.title': 'Grãos úmidos na recepção',
    'evt-wet-intake.text':
      'O medidor de umidade na recepção indica valores muito acima do limite seguro de armazenamento, carga após carga. O trigo úmido forma pontes nos silos e fica mole e pegajoso na moagem. É possível alugar um secador móvel ou misturar os lotes úmidos com grãos mais secos do estoque.',
    'evt-wet-intake.choices.dryer.label': 'Alugar um secador móvel',
    'evt-wet-intake.choices.dryer.effect.result':
      'O secador reduz a umidade do trigo recebido ao nível de armazenamento e elimina a penalidade da safra úmida.',
    'evt-wet-intake.choices.blend.label': 'Misturar com grãos do estoque',
    'evt-wet-intake.choices.blend.effect.modifier.label': 'Misturas em processamento',
    'evt-wet-intake.choices.blend.effect.result':
      'Os lotes úmidos são misturados com grãos mais secos do estoque; o manuseio extra reduz o ritmo da linha.',
    'evt-wet-intake.choices.mill-on.label': 'Moer como vier',
    'evt-wet-intake.choices.mill-on.effect.modifier.label': 'Estoque úmido',
    'evt-wet-intake.choices.mill-on.effect.result':
      'Os grãos úmidos são processados sem tratamento e as peneiras entopem com mais frequência.',
    'evt-low-falling-number.title': 'Baixo número de queda',
    'evt-low-falling-number.text':
      'O teste de número de queda do laboratório está abaixo do esperado: parte da colheita germinou na espiga antes do corte. O pão feito com esses grãos fica com miolo pegajoso. Misturá-los com grãos sadios do estoque corrige o problema, com um custo.',
    'evt-low-falling-number.choices.blend.label': 'Misturar com grãos sadios',
    'evt-low-falling-number.choices.blend.effect.result':
      'Grãos sadios do estoque são incorporados e o número de queda volta à faixa exigida pelos padeiros.',
    'evt-low-falling-number.choices.discount.label': 'Pedir desconto aos produtores',
    'evt-low-falling-number.choices.discount.effect.modifier.label': 'Grãos germinados',
    'evt-low-falling-number.choices.discount.effect.result':
      'Os produtores aceitam dar desconto nos lotes afetados, que seguem para a moagem sem mistura.',
    'evt-low-falling-number.choices.mill-on.label': 'Moer sem misturar',
    'evt-low-falling-number.choices.mill-on.effect.result':
      'Os padeiros de Riverside percebem o problema no miolo e reclamam.',
    'evt-sack-delivery-slips.title': 'A entrega de sacos atrasa',
    'evt-sack-delivery-slips.text':
      'O fornecedor de sacos de papel liga para avisar que a entrega desta semana está presa por uma pane na fábrica. As ensacadeiras têm sacos para apenas parte de um turno. Um adicional de frete urgente anteciparia a entrega.',
    'evt-sack-delivery-slips.choices.counted.label': 'Pedir fardos extras ao fornecedor conferido',
    'evt-sack-delivery-slips.choices.counted.effect.result':
      'O fornecedor cuja contagem foi conferida pelo moinho envia fardos extras do próprio estoque sem cobrar.',
    'evt-sack-delivery-slips.choices.rush.label': 'Pagar o frete urgente',
    'evt-sack-delivery-slips.choices.rush.effect.result':
      'A entrega programada chega a tempo com o frete urgente e as ensacadeiras não param.',
    'evt-sack-delivery-slips.choices.wait.label': 'Esperar a entrega',
    'evt-sack-delivery-slips.choices.wait.effect.result':
      'As ensacadeiras ficam sem sacos antes da entrega chegar.',
    'evt-lot-notification.title': 'Um aviso sobre um lote de produtor',
    'evt-lot-notification.text':
      'Um produtor liga: um campo vizinho foi pulverizado em um dia de vento, e um de seus lotes recentes pode ter recebido deriva. Seu próprio laboratório levará dias. Um teste rápido no laboratório do condado resolveria a dúvida antes do início do procedimento formal de retenção.',
    'evt-lot-notification.choices.test.label': 'Pagar por um teste rápido',
    'evt-lot-notification.choices.test.effect.result':
      'O teste rápido não encontra problemas e o lote é liberado com um registro de rastreabilidade.',
    'evt-lot-notification.choices.hold.label': 'Reter o lote e chamar o laboratório',
    'evt-lot-notification.choices.hold.effect.result':
      'O lote fica sob retenção formal e a expedição aguarda a análise de rastreabilidade.',
    'evt-lot-notification.choices.mill-on.label': 'Moer enquanto o laboratório do produtor analisa',
    'evt-lot-notification.choices.mill-on.effect.modifier.label': 'Lote não confirmado',
    'evt-lot-notification.choices.mill-on.effect.result':
      'O lote é moído enquanto o laboratório do produtor analisa, e o condado registra que um lote notificado foi processado sem teste.',
    'evt-haulier-breakdown.title': 'O caminhão da transportadora quebra',
    'evt-haulier-breakdown.text':
      'O caminhão de Valley Haulage para a coleta da tarde quebrou no contorno rodoviário. A oficina prevê seu retorno amanhã. É possível contratar um caminhão substituto na cidade vizinha.',
    'evt-haulier-breakdown.choices.relief.label': 'Contratar um caminhão substituto',
    'evt-haulier-breakdown.choices.relief.effect.result':
      'O caminhão substituto faz a coleta no horário.',
    'evt-haulier-breakdown.choices.wait.label': 'Esperar o conserto',
    'evt-haulier-breakdown.choices.wait.effect.result':
      'A coleta atrasa e os produtos acabados se acumulam na doca de carregamento. A transportadora se lembra da paciência.',
    'evt-dull-roll-flutes.title': 'Raiamento dos rolos desgastado',
    'evt-dull-roll-flutes.text':
      'Os rolos de ruptura de R.M. 101 estão consumindo mais corrente e liberando menos material: o raiamento perdeu o corte. Enviar os dois pares para refazer o raiamento resolve por completo. O par mais gasto pode ir primeiro.',
    'evt-dull-roll-flutes.choices.both.label': 'Refazer o raiamento dos dois pares',
    'evt-dull-roll-flutes.choices.both.effect.modifier.label': 'Rolos afiados',
    'evt-dull-roll-flutes.choices.both.effect.result':
      'Os dois pares voltam afiados e a liberação na ruptura se recupera.',
    'evt-dull-roll-flutes.choices.worst.label': 'Refazer o raiamento do pior par',
    'evt-dull-roll-flutes.choices.worst.effect.modifier.label': 'Par com raiamento renovado',
    'evt-dull-roll-flutes.choices.worst.effect.result':
      'O raiamento do pior par é refeito e a corrente do motor se estabiliza.',
    'evt-dull-roll-flutes.choices.run-on.label': 'Usar por mais uma semana',
    'evt-dull-roll-flutes.choices.run-on.effect.modifier.label': 'Raiamento gasto',
    'evt-dull-roll-flutes.choices.run-on.effect.result':
      'Os rolos gastos continuam em uso e consomem mais energia para liberar menos material.',
    'evt-school-specks.title': 'Pontos escuros na farinha da escola',
    'evt-school-specks.text':
      'County School Meals relata pontos escuros em uma entrega de farinha comunitária. É farelo, inofensivo, mas as cozinhas fizeram perguntas. Querem saber o que o moinho fará a respeito.',
    'evt-school-specks.choices.visit.label': 'Enviar os registros de CQ',
    'evt-school-specks.choices.visit.effect.result':
      'Os registros de CQ e a análise de peneiramento seguem para as cozinhas, que ficam tranquilizadas.',
    'evt-school-specks.choices.tighten.label': 'Usar telas mais finas nos plansifters',
    'evt-school-specks.choices.tighten.effect.modifier.label': 'Peneiramento mais fino',
    'evt-school-specks.choices.tighten.effect.result':
      'As telas dos plansifters são trocadas por malhas mais fechadas, com alguma perda de capacidade.',
    'evt-school-specks.choices.file.label': 'Arquivar a reclamação',
    'evt-school-specks.choices.file.effect.result':
      'A reclamação é arquivada sem resposta, e School Meals percebe.',
    'evt-pest-sign.title': 'Sinais de pragas no depósito de farelo',
    'evt-pest-sign.text':
      'A inspeção semanal de pragas encontra sacos roídos e fezes no depósito de farelo. O depósito fica ao lado da linha de ensaque. A empresa de controle de pragas contratada pode vedar o prédio nesta semana.',
    'evt-pest-sign.choices.firm.label': 'Chamar a empresa de controle de pragas',
    'evt-pest-sign.choices.firm.effect.result':
      'A empresa protege o depósito e veda as frestas sob as portas.',
    'evt-pest-sign.choices.in-house.label': 'Vedar o depósito com a equipe interna',
    'evt-pest-sign.choices.in-house.effect.modifier.label': 'Vedação do depósito',
    'evt-pest-sign.choices.in-house.effect.result':
      'A equipe veda o depósito entre as operações e a linha reduz o ritmo durante o serviço.',
    'evt-pest-sign.choices.note.label': 'Anotar para a próxima visita',
    'evt-pest-sign.choices.note.effect.modifier.label': 'Risco de pragas',
    'evt-pest-sign.choices.note.effect.result':
      'Os sinais são registrados e o depósito aguarda a próxima visita programada.',
    'evt-inspector-visit.title': 'A inspeção de segurança dos alimentos',
    'evt-inspector-visit.text':
      'Um inspetor de segurança dos alimentos do condado chega sem aviso e pede os registros de rastreabilidade, o cronograma de limpeza e uma visita ao salão de ensaque. A visita permanece aberta até sua aprovação. A forma como o moinho o recebe molda o relatório.',
    'evt-inspector-visit.choices.records.label': 'Apresentar os registros em detalhe',
    'evt-inspector-visit.choices.records.effect.result':
      'O inspetor acompanha um lote da recepção à expedição e encerra a inspeção sem pendências.',
    'evt-inspector-visit.choices.deep-clean.label': 'Fazer uma limpeza profunda antes da visita',
    'evt-inspector-visit.choices.deep-clean.effect.modifier.label': 'Limpeza profunda',
    'evt-inspector-visit.choices.deep-clean.effect.result':
      'O salão de ensaque recebe uma limpeza profunda antes da visita e o relatório sai sem pendências.',
    'evt-inspector-visit.choices.as-is.label': 'Deixar a visita seguir seu curso',
    'evt-inspector-visit.choices.as-is.effect.modifier.label': 'Ações da inspeção',
    'evt-inspector-visit.choices.as-is.effect.result':
      'O inspetor encerra a visita com uma breve lista de ações a concluir.',
    'evt-two-buyers-one-slot.title': 'Dois compradores, um horário',
    'evt-two-buyers-one-slot.text':
      'Riverside Bakers’ Cooperative e Community Pasta Works querem o primeiro horário de coleta na doca na próxima semana. Os padeiros querem farinha branca forte para um festival de fim de semana; a fábrica de massas quer sêmola antes de mudar o cardápio. Cada um pede prioridade ao moinho.',
    'evt-two-buyers-one-slot.choices.bakers.label': 'Priorizar os padeiros',
    'evt-two-buyers-one-slot.choices.bakers.effect.modifier.label':
      'Condicionamento de trigo forte',
    'evt-two-buyers-one-slot.choices.bakers.effect.result':
      'Os padeiros ficam com o primeiro horário; o condicionamento mais longo do trigo forte consome mais energia.',
    'evt-two-buyers-one-slot.choices.pasta.label': 'Priorizar a fábrica de massas',
    'evt-two-buyers-one-slot.choices.pasta.effect.modifier.label': 'Trigo durum nos rolos',
    'evt-two-buyers-one-slot.choices.pasta.effect.result':
      'A fábrica de massas fica com o primeiro horário; o durum duro exige mais dos rolos.',
    'evt-two-buyers-one-slot.choices.rota.label': 'Manter a ordem das reservas',
    'evt-two-buyers-one-slot.choices.rota.effect.result':
      'O horário segue a ordem das reservas e nenhum comprador recebe prioridade.',
    'evt-growers-weighbridge.title': 'Fazendas das colinas e do vale',
    'evt-growers-weighbridge.text':
      'Os produtores do vale e das colinas discutem quem deve passar primeiro pela balança no pico da colheita. As fazendas do vale oferecem desconto no transporte em troca de prioridade. As fazendas das colinas oferecem os dados de seus testes de variedades.',
    'evt-growers-weighbridge.choices.valley.label': 'Dar prioridade às fazendas do vale',
    'evt-growers-weighbridge.choices.valley.effect.modifier.label': 'Prioridade ao vale',
    'evt-growers-weighbridge.choices.valley.effect.result':
      'As fazendas do vale passam primeiro e o desconto no transporte é pago; os caminhões das colinas fazem fila na estrada.',
    'evt-growers-weighbridge.choices.hill.label': 'Dar prioridade às fazendas das colinas',
    'evt-growers-weighbridge.choices.hill.effect.modifier.label': 'Prioridade às colinas',
    'evt-growers-weighbridge.choices.hill.effect.result':
      'As fazendas das colinas passam primeiro e compartilham os dados dos testes; as cargas maiores do vale aguardam.',
    'evt-growers-weighbridge.choices.first-come.label': 'Manter a ordem de chegada',
    'evt-growers-weighbridge.choices.first-come.effect.result':
      'A balança mantém a ordem de chegada e os dois grupos reclamam por igual.',
    'evt-members-meeting.title': 'A assembleia dos cooperados',
    'evt-members-meeting.text':
      'Os cooperados se reúnem para decidir uma proposta: aumentar a parcela da contribuição de cada turno destinada ao reinvestimento ou mantê-la baixa para preservar os preços aos clientes do moinho. Os dois lados têm argumentos justos. A coordenação também pode adiar a proposta.',
    'evt-members-meeting.choices.reinvest.label': 'Aumentar a parcela de reinvestimento',
    'evt-members-meeting.choices.reinvest.effect.modifier.label':
      'Proposta de reinvestimento dos cooperados',
    'evt-members-meeting.choices.reinvest.effect.result':
      'A proposta é aprovada e uma parcela maior da contribuição de cada turno vai para o fundo.',
    'evt-members-meeting.choices.prices.label': 'Manter os preços baixos',
    'evt-members-meeting.choices.prices.effect.modifier.label': 'Proposta de preços dos cooperados',
    'evt-members-meeting.choices.prices.effect.result':
      'Os cooperados mantêm os preços baixos; os clientes percebem e o fundo cresce mais devagar.',
    'evt-members-meeting.choices.table.label': 'Adiar a proposta',
    'evt-members-meeting.choices.table.effect.result':
      'A proposta fica adiada até a próxima assembleia.',
    'evt-demand-response.title': 'Um chamado de resposta à demanda',
    'evt-demand-response.text':
      'O operador da rede está com pouca capacidade em uma noite fria e oferece pagamento às instalações que reduzirem a carga no pico. Reduzir a carga exige diminuir o ritmo da linha por um tempo. Recusar não custa nada.',
    'evt-demand-response.choices.shed.label': 'Reduzir a carga no pico',
    'evt-demand-response.choices.shed.effect.modifier.label': 'Redução de carga',
    'evt-demand-response.choices.shed.effect.result':
      'O moinho reduz o ritmo no pico e o pagamento do operador vai para o fundo.',
    'evt-demand-response.choices.decline.label': 'Recusar o chamado',
    'evt-demand-response.choices.decline.effect.result':
      'O moinho atravessa o pico operando no ritmo normal.',
  },
});
