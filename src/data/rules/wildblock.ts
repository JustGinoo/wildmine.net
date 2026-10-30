import { n, p, r, type RuleSet } from "./types";
import {
  accountsParagraph,
  chatParagraph,
  coinflipRule,
  exploitItems,
  ignoranceRule,
  lagMachineRule,
  modsNotice,
  modsParagraph,
  offensiveBuildsRule,
  penaltyItems,
  realMoneyRule,
  scamRule,
} from "./shared";

/** OneBlock — solo progression, PvP fully disabled. */
export const wildblockRules: RuleSet = {
  key: "wildblock",
  title: {
    de: "WildBlock-Regelwerk",
    en: "WildBlock rules",
  },
  scope: {
    de: "Gilt für den OneBlock-Modus inklusive aller Inseln, der Wirtschaft und aller zugehörigen Systeme.",
    en: "Applies to the OneBlock mode including all islands, the economy and every related system.",
  },
  notice: {
    de: `${modsNotice("9").de} WildBlock ist ein Solo-Spielmodus. Jeder Spieler baut seine eigene Insel allein auf. PvP ist vollständig deaktiviert.`,
    en: `${modsNotice("9").en} WildBlock is a solo mode. Every player builds their own island alone. PvP is fully disabled.`,
  },
  paragraphs: [
    p("0", "scale", "Geltungsbereich & Grundgedanke", "Scope & core idea", [
      ignoranceRule("0.1"),
      r(
        "0.2",
        "WildBlock ist als reiner Einzelspieler-Fortschritt konzipiert: Jeder Spieler besitzt genau eine eigene Insel und erspielt seinen Fortschritt selbst.",
        "WildBlock is designed as pure single-player progression: every player owns exactly one island and earns their progress themselves.",
      ),
      r(
        "0.3",
        "PvP ist auf WildBlock vollständig deaktiviert. Kämpfe zwischen Spielern finden nicht statt.",
        "PvP is fully disabled on WildBlock. There is no player versus player combat.",
      ),
      r(
        "0.4",
        "Ziel des Modus ist der faire Vergleich der eigenen Leistung. Jede Form der Zusammenarbeit, die diesen Vergleich verfälscht, gilt als Regelverstoß.",
        "The mode is about comparing your own achievement fairly. Any cooperation that distorts that comparison is an offence.",
      ),
    ]),
    p("1", "user", "Solo-Prinzip", "Solo principle", [
      r(
        "1.1",
        "Jede Insel gehört genau einem Spieler. Team-, Coop- und Gemeinschaftsinseln sind nicht vorgesehen und dürfen nicht über Umwege gebildet werden.",
        "Every island belongs to exactly one player. Team, co-op and shared islands are not supported and must not be created through workarounds.",
      ),
      r(
        "1.2",
        "Das Übertragen von Ressourcen, Items oder Geld zwischen Spielern zum Beschleunigen des Fortschritts (Boosting) ist verboten.",
        "Transferring resources, items or money between players to speed up progress (boosting) is forbidden.",
        n(
          "Beispiel: Ein Spieler farmt Ressourcen und legt sie einem anderen in eine Kiste oder wirft sie ihm zu.",
          "Example: one player farms resources and drops them for another or leaves them in a chest.",
        ),
      ),
      r(
        "1.3",
        "Zweitaccounts dürfen nicht genutzt werden, um Vorteile zu erzeugen – dazu zählen Level, Geld, Items, Belohnungen, Missionen und Voting-Rewards.",
        "Alt accounts must not be used to generate advantages — including levels, money, items, rewards, missions and voting rewards.",
      ),
      r(
        "1.4",
        "Das Verkaufen, Tauschen oder Verschenken kompletter Inseln oder von Insel-Accounts ist verboten.",
        "Selling, trading or giving away whole islands or island accounts is forbidden.",
      ),
      r(
        "1.5",
        "Absprachen zwischen Spielern mit dem Ziel, das Solo-Prinzip auszuhebeln, werden wie ein Verstoß beider Beteiligten behandelt.",
        "Arrangements between players aimed at undermining the solo principle are treated as an offence by both parties.",
      ),
      r(
        "1.6",
        "Gemeinsames Spielen im Sinne von Besuchen, Anschauen und Austausch bleibt ausdrücklich erlaubt.",
        "Playing together in the sense of visiting, watching and chatting stays explicitly allowed.",
      ),
    ]),
    p("2", "box", "Insel & Fortschritt", "Island & progression", [
      r(
        "2.1",
        "Deine Insel ist dein Verantwortungsbereich. Was dort geschieht, wird dir zugerechnet.",
        "Your island is your responsibility. Whatever happens there is attributed to you.",
      ),
      r(
        "2.2",
        "Die Manipulation des OneBlock-Phasensystems durch Bugs oder Exploits ist strengstens verboten.",
        "Manipulating the OneBlock phase system with bugs or exploits is strictly forbidden.",
        n(
          "Dazu zählt das mehrfache Abbauen eines Blocks, das Überspringen von Phasen und das Zurücksetzen von Zählern.",
          "This includes mining a block multiple times, skipping phases and resetting counters.",
        ),
      ),
      r(
        "2.3",
        "Der OneBlock darf nicht automatisiert abgebaut werden. Autoklicker, Makros und AFK-Abbau am OneBlock sind verboten.",
        "The OneBlock must not be mined automatically. Auto-clickers, macros and AFK mining at the OneBlock are forbidden.",
      ),
      r(
        "2.4",
        "Insel-Level und Inselwert dürfen nicht durch Bugs, Dupes oder platzierte Fremd-Items künstlich erhöht werden.",
        "Island level and island value must not be inflated with bugs, dupes or items placed by others.",
      ),
      r(
        "2.5",
        "Bauten müssen innerhalb deiner Inselgrenzen bleiben. Bauwerke außerhalb der Grenzen können ohne Vorwarnung entfernt werden.",
        "Builds must stay inside your island borders. Anything outside can be removed without warning.",
      ),
      r(
        "2.6",
        "Deine Insel darf die Serverleistung nicht unangemessen belasten.",
        "Your island must not put an unreasonable load on server performance.",
      ),
      r(
        "2.7",
        "Items, die in die Leere fallen, gehen unwiederbringlich verloren und werden nicht ersetzt.",
        "Items that fall into the void are lost for good and are not replaced.",
      ),
      r(
        "2.8",
        "Das absichtliche Zubauen oder Verdecken des OneBlocks zum Ausnutzen von Spawnmechaniken ist untersagt.",
        "Deliberately covering or boxing in the OneBlock to abuse spawn mechanics is prohibited.",
      ),
      offensiveBuildsRule("2.9"),
    ]),
    p("3", "swords", "PvP & Schaden zwischen Spielern", "PvP & player damage", [
      r(
        "3.1",
        "PvP ist auf WildBlock vollständig deaktiviert. Direkter Spielerschaden ist technisch nicht möglich.",
        "PvP is fully disabled on WildBlock. Direct player damage is technically impossible.",
      ),
      r(
        "3.2",
        "Das Umgehen des PvP-Schutzes ist strengstens verboten.",
        "Circumventing the PvP protection is strictly forbidden.",
        n(
          "Lava, Wasser, Feuer, TNT, Endkristalle, Fallen, Angeln, Boote, Loren, Pushing, Mobs, Ersticken sowie das Stoßen in die Leere.",
          "Lava, water, fire, TNT, end crystals, traps, fishing rods, boats, minecarts, pushing, mobs, suffocation and knocking someone into the void.",
        ),
      ),
      r(
        "3.3",
        "Wer einen anderen Spieler dadurch tötet, ihm Items entzieht oder ihn behindert, begeht einen schweren Regelverstoß und muss mit einem Bann rechnen.",
        "Killing, robbing or obstructing another player this way is a severe offence and can result in a ban.",
      ),
      r(
        "3.4",
        "Fallen an Insel-Warps, Besucherpunkten oder Spawnpunkten sind grundsätzlich verboten.",
        "Traps at island warps, visitor points or spawn points are forbidden.",
      ),
      r(
        "3.5",
        "Das Einsperren, Blockieren oder Festhalten von Besuchern ist untersagt.",
        "Trapping, blocking or holding visitors is prohibited.",
      ),
      r(
        "3.6",
        "Verlorene Items durch einen Verstoß gegen §3 werden dem Opfer nach Prüfung ersetzt und dem Täter entzogen.",
        "Items lost through a breach of §3 are restored to the victim after review and taken from the offender.",
      ),
    ]),
    p("4", "compass", "Besuche & fremde Inseln", "Visits & other islands", [
      r(
        "4.1",
        "Fremde Inseln dürfen ausschließlich über die offiziellen Systeme betreten werden.",
        "Only enter other islands through the official systems.",
      ),
      r(
        "4.2",
        "Als Besucher gilt: nichts abbauen, platzieren, öffnen, mitnehmen oder töten – auch dann nicht, wenn es technisch möglich ist.",
        "As a visitor: do not mine, place, open, take or kill anything — not even when it is technically possible.",
      ),
      r(
        "4.3",
        "Das Ausnutzen von Bugs zum Betreten geschützter oder geschlossener Inseln ist verboten.",
        "Using bugs to enter protected or closed islands is forbidden.",
      ),
      r(
        "4.4",
        "Fordert dich ein Inselbesitzer zum Verlassen auf, verlässt du die Insel unverzüglich.",
        "If an island owner asks you to leave, leave immediately.",
      ),
      r(
        "4.5",
        "Besucher- und Trust-Rechte vergibst du auf eigene Gefahr. Für dadurch entstandene Schäden gibt es keinen Ersatz.",
        "You grant visitor and trust permissions at your own risk. Damage caused that way is not compensated.",
      ),
      r(
        "4.6",
        "Das Verfolgen, Belästigen oder wiederholte Aufsuchen eines Spielers gegen dessen Willen ist verboten.",
        "Following, harassing or repeatedly visiting a player against their will is forbidden.",
      ),
    ]),
    p("5", "coins", "Handel & Wirtschaft", "Trading & economy", [
      r(
        "5.1",
        "Handel ist ausschließlich über die offiziellen Systeme erlaubt (Servershop, Auktionshaus).",
        "Trading is only allowed through the official systems (server shop, auction house).",
      ),
      r(
        "5.2",
        "Das direkte Übertragen von Items oder Geld zwischen Spielern ist verboten, da es das Solo-Prinzip aushebelt.",
        "Transferring items or money directly between players is forbidden because it undermines the solo principle.",
      ),
      r(
        "5.3",
        "Die Manipulation des Auktionshauses ist untersagt – insbesondere Selbstkäufe über Zweitaccounts, abgesprochene Scheingeschäfte und künstlich verfälschte Preise.",
        "Manipulating the auction house is prohibited — especially self-purchases via alt accounts, arranged sham deals and artificially distorted prices.",
      ),
      r(
        "5.4",
        "Fehlerhafte Shop-Preise sind zu melden und dürfen nicht ausgenutzt werden.",
        "Report incorrect shop prices instead of exploiting them.",
      ),
      scamRule("5.5"),
      realMoneyRule("5.6"),
      coinflipRule("5.7"),
      r(
        "5.8",
        "Bei Verstößen gegen §5 können Geld, Items und Insel-Level ersatzlos entzogen werden.",
        "Breaching §5 can cost you money, items and island levels without replacement.",
      ),
    ]),
    p("6", "cog", "Technik, Farmen & Performance", "Tech, farms & performance", [
      r(
        "6.1",
        "Chunkloader jeglicher Art sind strengstens verboten und werden ohne Vorwarnung entfernt.",
        "Chunk loaders of any kind are strictly forbidden and removed without warning.",
      ),
      r(
        "6.2",
        "Redstone-Clocks darfst du in jeder Geschwindigkeit bauen, solange sie die Serverleistung nicht beeinträchtigen.",
        "You may build redstone clocks at any speed, as long as they do not affect server performance.",
        n(
          "Fällt eine Anlage auf, bittet dich das Team, die Clock langsamer zu takten oder abzuschalten.",
          "If a contraption stands out, the team will ask you to slow the clock down or switch it off.",
        ),
      ),
      r(
        "6.3",
        "Farmen und Redstone-Anlagen dürfen die Serverleistung nicht unangemessen belasten. Das Team kann Einschränkungen oder den Rückbau verlangen.",
        "Farms and redstone contraptions must not put an unreasonable load on the server. The team can require limits or removal.",
      ),
      r(
        "6.4",
        "Übermäßige Entity-Ansammlungen (Tier-, Item- und Mob-Massen) sind zu vermeiden und können ohne Vorwarnung bereinigt werden.",
        "Excessive entity build-ups (animals, items, mobs) must be avoided and can be cleared without warning.",
      ),
      r(
        "6.5",
        "Lagintensive Anlagen können vom Team teilweise oder vollständig abgeschaltet oder entfernt werden.",
        "Lag-heavy contraptions can be partially or fully disabled or removed by the team.",
      ),
      r(
        "6.6",
        "AFK-Farmen sind erlaubt, solange das Anti-AFK-System nicht umgangen wird.",
        "AFK farms are allowed as long as the anti-AFK system is not circumvented.",
      ),
      lagMachineRule("6.7"),
      ...exploitItems("6", 8),
    ]),
    p("7", "clock", "Inaktivität, Reset & Datenverlust", "Inactivity, resets & data loss", [
      r(
        "7.1",
        "Inseln von Spielern, die länger als 90 Tage inaktiv sind, können ohne weitere Ankündigung gelöscht werden.",
        "Islands of players inactive for more than 90 days can be deleted without further notice.",
      ),
      r(
        "7.2",
        "Saison- und Modusresets sind möglich. Es besteht kein Anspruch auf den Erhalt von Fortschritt, Items oder Insel-Level.",
        "Season and mode resets are possible. There is no entitlement to keeping progress, items or island levels.",
      ),
      r(
        "7.3",
        "Das manuelle Zurücksetzen der eigenen Insel ist endgültig und kann nicht rückgängig gemacht werden.",
        "Resetting your own island manually is final and cannot be undone.",
      ),
      r(
        "7.4",
        "Es besteht kein Anspruch auf Backups oder Wiederherstellungen. Jede Wiederherstellung erfolgt aus Kulanz.",
        "There is no entitlement to backups or restores. Any restore is a goodwill gesture.",
      ),
    ]),
    p("8", "trophy", "Ranglisten & Fairness", "Leaderboards & fairness", [
      r(
        "8.1",
        "Die Manipulation der Insel-Rangliste ist in jeder Form verboten.",
        "Manipulating the island leaderboard is forbidden in every form.",
      ),
      r(
        "8.2",
        "Absprachen zwischen Spielern zur Verbesserung von Platzierungen sind untersagt.",
        "Arrangements between players to improve rankings are prohibited.",
      ),
      r(
        "8.3",
        "An Events und Wettbewerben darf nur mit einem Account teilgenommen werden.",
        "Enter events and competitions with one account only.",
      ),
      r(
        "8.4",
        "Das Team darf Platzierungen korrigieren und Spieler bei begründetem Verdacht aus der Wertung nehmen.",
        "The team may correct rankings and remove players from the standings on reasonable suspicion.",
      ),
    ]),
    modsParagraph("9"),
    accountsParagraph("10"),
    chatParagraph("11"),
    p("12", "gavel", "Support & Strafen", "Support & penalties", [
      ...penaltyItems("12"),
      r(
        "12.5",
        "Verstöße gegen §1 (Solo-Prinzip), §3 (PvP-Umgehung) und §8 (Ranglisten) werden auf WildBlock besonders streng geahndet.",
        "Breaches of §1 (solo principle), §3 (PvP circumvention) and §8 (leaderboards) are punished especially harshly on WildBlock.",
      ),
      r(
        "12.6",
        "Zusätzlich möglich sind: Entzug von Items, Geld und Insel-Level, Rückbau von Bauwerken sowie das Zurücksetzen der Insel.",
        "Additional measures: removal of items, money and island levels, demolition of builds and resetting the island.",
      ),
    ]),
  ],
};
