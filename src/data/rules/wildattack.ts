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
  penaltyItems,
  realMoneyRule,
  tradeCommandRule,
  trustRiskRule,
} from "./shared";

/** CraftAttack-style survival — claiming plus a per-player PvP toggle. */
export const wildattackRules: RuleSet = {
  key: "wildattack",
  title: {
    de: "WildAttack-Regelwerk",
    en: "WildAttack rules",
  },
  scope: {
    de: "Gilt für WildAttack inklusive Hauptwelt, Nether, End, Farmwelt und der zugehörigen Wirtschaft.",
    en: "Applies to WildAttack including the main world, Nether, End, farm world and the economy.",
  },
  notice: {
    de: `${modsNotice("8", { legacyFreecam: true }).de} Auf WildAttack ist PvP standardmäßig deaktiviert. Mit /pvp schaltest du es für dich selbst frei, danach läuft ein Cooldown von 12 Stunden. Schaden zwischen zwei Spielern entsteht nur, wenn beide PvP aktiviert haben.`,
    en: `${modsNotice("8", { legacyFreecam: true }).en} PvP is disabled by default on WildAttack. Use /pvp to enable it for yourself; each switch starts a 12 hour cooldown. Damage between two players only happens when both have PvP enabled.`,
  },
  paragraphs: [
    p("0", "scale", "Geltungsbereich & Grundgedanke", "Scope & core idea", [
      ignoranceRule("0.1"),
      r(
        "0.2",
        "WildAttack ist ein offener Survival-Modus mit Wettbewerbscharakter. Konflikte, Rivalitäten und Kämpfe gehören dazu – Betrug, Belästigung und Griefing nicht.",
        "WildAttack is an open, competitive survival mode. Conflict, rivalry and fighting are part of it — fraud, harassment and griefing are not.",
      ),
      r(
        "0.3",
        "Deine Bauten und Besitztümer schützt du selbst durch Claiming.",
        "You protect your builds and belongings yourself by claiming land.",
      ),
      r(
        "0.4",
        "Jeder Spieler entscheidet über den PvP-Toggle selbst, ob er am PvP teilnimmt. Diese Entscheidung ist von allen zu respektieren.",
        "Every player decides via the PvP toggle whether they take part in PvP. Everyone has to respect that decision.",
      ),
    ]),
    p("1", "swords", "PvP & PvP-Toggle", "PvP & the PvP toggle", [
      r(
        "1.1",
        "PvP ist auf WildAttack standardmäßig deaktiviert. Du nimmst erst daran teil, wenn du es selbst freischaltest.",
        "PvP is disabled by default on WildAttack. You only take part once you enable it yourself.",
      ),
      r(
        "1.2",
        "Mit dem Befehl /pvp schaltest du PvP für dich selbst ein und wieder aus. Nach jedem Umschalten gilt ein Cooldown von 12 Stunden.",
        "Use /pvp to switch PvP on and back off for yourself. Each switch starts a 12 hour cooldown.",
      ),
      r(
        "1.3",
        "Schaden zwischen Spielern entsteht ausschließlich, wenn beide Beteiligten PvP aktiviert haben.",
        "Damage between players only occurs when both parties have PvP enabled.",
      ),
      r(
        "1.4",
        "Wer PvP deaktiviert hat, kann selbst keinen Spielerschaden verursachen und keinen erleiden.",
        "With PvP disabled you can neither deal nor take player damage.",
      ),
      r(
        "1.5",
        "Das Umschalten unterliegt einem Cooldown von 5 Minuten und ist im Kampf nicht möglich.",
        "Toggling has a 5 minute cooldown and is not possible while in combat.",
      ),
      r(
        "1.6",
        "Combat-Logging – das Ausloggen, Serverwechseln oder Teleportieren während eines laufenden Kampfes – ist verboten.",
        "Combat logging — disconnecting, switching servers or teleporting mid-fight — is forbidden.",
      ),
      r(
        "1.7",
        "Das Umgehen des PvP-Toggles ist strengstens verboten. Dazu zählt jede Methode, mit der ein Spieler mit deaktiviertem PvP geschädigt oder getötet wird.",
        "Circumventing the PvP toggle is strictly forbidden. This covers every method of harming or killing a player who has PvP disabled.",
        n(
          "Lava, Wasser, Feuer, TNT, Endkristalle, Fallen, Angeln, Boote, Loren, Pushing in Void, Lava oder Abgründe, Mobs, Ersticken und Fallschaden.",
          "Lava, water, fire, TNT, end crystals, traps, fishing rods, boats, minecarts, pushing into the void, lava or a drop, mobs, suffocation and fall damage.",
        ),
      ),
      r(
        "1.8",
        "Schutz-Abuse ist verboten. Wer PvP deaktiviert hat, darf diesen Schutz nicht ausnutzen, um andere zu provozieren, Kämpfe zu stören, Projektile abzufangen oder fremden Loot abzugreifen.",
        "Protection abuse is forbidden. With PvP disabled you must not use that protection to provoke others, disrupt fights, block projectiles or grab other people's loot.",
        n(
          "Beispiel: Sich mit deaktiviertem PvP in einen laufenden Kampf stellen, um Pfeile zu blocken oder Drops einzusammeln.",
          "Example: standing in an ongoing fight with PvP disabled to block arrows or collect drops.",
        ),
      ),
      r(
        "1.9",
        "Es ist verboten, andere Spieler durch Druck, Drohungen oder Erpressung zum Aktivieren von PvP zu bewegen.",
        "Pressuring, threatening or blackmailing others into enabling PvP is forbidden.",
      ),
      r(
        "1.10",
        "Spawncamping und Portalcamping sind verboten. Halte zu Spawn und öffentlichen Portalen einen Mindestabstand von 100 Blöcken.",
        "Spawn and portal camping are forbidden. Keep at least 100 blocks from spawn and public portals.",
      ),
      r(
        "1.11",
        "Das gezielte Dauerjagen einzelner Spieler über längere Zeit ist verboten, insbesondere nach der Bitte, damit aufzuhören.",
        "Relentlessly hunting one specific player over a longer period is forbidden, especially after being asked to stop.",
      ),
      r(
        "1.12",
        "Wer PvP aktiviert hat, willigt in Kampf und Item-Verlust ein. Ein Ersatz durch das Team findet nicht statt.",
        "Having PvP enabled means consenting to fights and item loss. The team does not compensate for it.",
      ),
      r(
        "1.13",
        "Fallen sind erlaubt, dürfen jedoch keine Spieler mit deaktiviertem PvP schädigen und niemanden dauerhaft und ausweglos einsperren.",
        "Traps are allowed, but must not harm players with PvP disabled and must not lock anyone in permanently with no way out.",
      ),
    ]),
    p("2", "mapPin", "Claiming & Grundstücke", "Claiming & plots", [
      r(
        "2.1",
        "Baue nur innerhalb eines geclaimten Gebiets. Ungeschützte Bauten und Kisten sind dein eigenes Risiko.",
        "Only build inside claimed land. Unprotected builds and chests are your own risk.",
      ),
      r(
        "2.2",
        "Claim-Blocking ist verboten. Claims dürfen fremde Claims nicht einschließen, Zugänge oder Wege blockieren oder die Erweiterung anderer mutwillig verhindern.",
        "Claim blocking is forbidden. Claims must not enclose other claims, block access or paths, or maliciously prevent others from expanding.",
      ),
      r(
        "2.3",
        "Halte zu fremden Claims einen Mindestabstand von 50 Blöcken ein, sofern nichts anderes abgesprochen ist.",
        "Keep a minimum distance of 50 blocks to other claims unless agreed otherwise.",
      ),
      r(
        "2.4",
        "Claim-Abusing ist verboten: einen Claim setzen, Ressourcen abgreifen und sofort wieder unclaimen.",
        "Claim abusing is forbidden: claiming land, stripping resources and immediately unclaiming.",
      ),
      r(
        "2.5",
        "Claims dürfen nicht dazu genutzt werden, öffentliche Bereiche, Spawns, Straßen, Portale oder Handelszonen zu blockieren.",
        "Claims must not be used to block public areas, spawns, roads, portals or trading zones.",
      ),
      r(
        "2.6",
        "Claim-Camping ist verboten. Der Rückzug auf den eigenen Claim ist erlaubt, das Angreifen aus dem geschützten Claim heraus jedoch nicht.",
        "Claim camping is forbidden. Retreating onto your own claim is fine, attacking out of the protected claim is not.",
        n(
          "Gilt für Bogen, Dreizack, Wurftränke und Endkristalle.",
          "Applies to bows, tridents, splash potions and end crystals.",
        ),
      ),
      trustRiskRule("2.7"),
      r(
        "2.8",
        "Claims von Spielern, die länger als 60 Tage inaktiv sind, können ohne weitere Ankündigung entfernt werden.",
        "Claims of players inactive for more than 60 days can be removed without further notice.",
      ),
      r(
        "2.9",
        "Der Verkauf oder die Vermietung von Claims ist ausschließlich gegen Ingame-Währung erlaubt.",
        "Selling or renting claims is only allowed for in-game currency.",
      ),
      r(
        "2.10",
        "Das Team darf Claims verschieben, verkleinern oder entfernen, wenn sie gegen Regeln verstoßen oder Serverbauten im Weg stehen.",
        "The team may move, shrink or remove claims that break the rules or block server builds.",
      ),
    ]),
    p("3", "hammer", "Bauen & Welten", "Building & worlds", [
      r(
        "3.1",
        "Bauten dürfen nicht gegen die allgemeinen Regeln verstoßen – keine Beleidigungen, politischen Symbole oder NSFW-Inhalte.",
        "Builds must not break the general rules — no insults, political symbols or NSFW content.",
      ),
      r(
        "3.2",
        "Extrem unschöne, störende oder absichtlich provokante Bauten können vom Team entfernt werden.",
        "Extremely ugly, disruptive or deliberately provocative builds can be removed by the team.",
      ),
      r(
        "3.3",
        "Öffentliche Bereiche, Serverbauten, der Spawn und Hauptstraßen dürfen nicht zugebaut, blockiert oder verunstaltet werden.",
        "Public areas, server builds, spawn and main roads must not be built over, blocked or defaced.",
      ),
      r(
        "3.4",
        "Nether-Highways und öffentliche Portale dürfen nicht blockiert, umgeleitet oder als Falle gestaltet werden.",
        "Nether highways and public portals must not be blocked, rerouted or turned into traps.",
      ),
      r(
        "3.5",
        "Die Farmwelt dient dem Abbau und Sammeln. Bauten dort sind temporär und werden beim Reset ersatzlos gelöscht.",
        "The farm world is for mining and gathering. Builds there are temporary and deleted on reset without replacement.",
      ),
      r(
        "3.6",
        "Großflächige Landschaftszerstörung in Spawnnähe und entlang öffentlicher Wege ist zu unterlassen.",
        "Avoid large-scale terrain destruction near spawn and along public paths.",
      ),
    ]),
    p("4", "shield", "Griefing, Diebstahl & Trust", "Griefing, theft & trust", [
      r(
        "4.1",
        "Griefing an geclaimten Gebieten ist in jeder Form verboten.",
        "Griefing claimed land is forbidden in every form.",
      ),
      r(
        "4.2",
        "Das Ausnutzen von Lücken im Claimschutz (Bugs, Kolben, Wasser, Lava, TNT über Claimgrenzen hinweg) ist strengstens verboten.",
        "Exploiting gaps in claim protection (bugs, pistons, water, lava, TNT across claim borders) is strictly forbidden.",
      ),
      r(
        "4.3",
        "Ungeclaimtes Gebiet ist ungeschützt: Diebstahl aus ungeclaimten Kisten und der Abbau ungeclaimter Bauten sind erlaubt. Sichere deinen Besitz selbst.",
        "Unclaimed land is unprotected: taking from unclaimed chests and mining unclaimed builds is allowed. Secure your property yourself.",
      ),
      r(
        "4.4",
        "Mutwillige Massenzerstörung ohne Spielzweck ist auch außerhalb von Claims verboten.",
        "Wanton mass destruction with no gameplay purpose is forbidden outside claims too.",
        n(
          "Cratern ganzer Gebiete, großflächige Lava-Fluten, Weltbrand.",
          "Cratering whole areas, large-scale lava floods, setting the world on fire.",
        ),
      ),
      r(
        "4.5",
        "Das dauerhafte Einsperren oder Festhalten von Spielern gegen ihren Willen ist verboten.",
        "Permanently trapping or holding players against their will is forbidden.",
      ),
      r(
        "4.6",
        "Wer andere Spieler auf seinem Claim trustet, tut das auf eigenes Risiko. Nimmt oder zerstört ein getrusteter Spieler etwas, wird das weder bestraft noch ersetzt.",
        "Trusting other players on your claim is at your own risk. If a trusted player takes or destroys something, it is neither punished nor replaced.",
      ),
    ]),
    p("5", "coins", "Handel, Wirtschaft & Scamming", "Trading, economy & scamming", [
      r(
        "5.1",
        "Betrug und Scamming jeglicher Art sind verboten und werden streng geahndet.",
        "Fraud and scamming of any kind are forbidden and punished severely.",
      ),
      r(
        "5.2",
        "Getroffene Absprachen sind bindend. Ein Wortbruch bei einem laufenden Handel gilt als Scam.",
        "Agreements are binding. Breaking your word mid-trade counts as a scam.",
      ),
      r(
        "5.3",
        "ChestShops müssen korrekt beschriftet sein. Täuschung über Item, Menge oder Preis ist verboten.",
        "Chest shops must be labelled correctly. Misleading about item, quantity or price is forbidden.",
      ),
      r(
        "5.4",
        "Das Ausnutzen unerfahrener Spieler durch bewusst unfaire Preise oder Täuschung ist verboten.",
        "Taking advantage of inexperienced players with deliberately unfair prices or deception is forbidden.",
      ),
      r(
        "5.5",
        "„Schutzgeld“-Forderungen und das Erpressen von Items, Geld oder Land sind untersagt.",
        "Demanding protection money and extorting items, money or land are prohibited.",
      ),
      r(
        "5.6",
        "Wetten und Glücksspiel sind nur mit Ingame-Währung und fairen, transparenten Bedingungen erlaubt.",
        "Bets and gambling are only allowed with in-game currency and fair, transparent terms.",
      ),
      r(
        "5.7",
        "Fehlerhafte Shop- und Systempreise sind zu melden und dürfen nicht ausgenutzt werden.",
        "Report incorrect shop and system prices instead of exploiting them.",
      ),
      realMoneyRule("5.8"),
      tradeCommandRule("5.9"),
      coinflipRule("5.10"),
    ]),
    p("6", "cog", "Technik, Redstone & Performance", "Tech, redstone & performance", [
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
        "Stationäre TNT-Duper ohne Bewegung sind erlaubt, müssen bei Nichtnutzung jedoch deaktiviert sein.",
        "Stationary TNT dupers without movement are allowed, but must be switched off when not in use.",
      ),
      r(
        "6.4",
        "Farmen und Redstone-Anlagen dürfen die Serverleistung nicht unangemessen belasten. Das Team kann Einschränkungen oder den Rückbau verlangen.",
        "Farms and redstone contraptions must not put an unreasonable load on the server. The team can require limits or removal.",
      ),
      r(
        "6.5",
        "Übermäßige Entity-Ansammlungen und massive Hoppernetze können abgeschaltet oder entfernt werden.",
        "Excessive entity build-ups and massive hopper networks can be disabled or removed.",
      ),
      r(
        "6.6",
        "Automatisierte Anlagen dürfen keine Spieler mit deaktiviertem PvP schädigen (§1.7).",
        "Automated contraptions must not harm players who have PvP disabled (§1.7).",
      ),
      lagMachineRule("6.7"),
      ...exploitItems("6", 8),
    ]),
    p("7", "package", "Tod, Loot & Ersatz", "Death, loot & replacement", [
      r(
        "7.1",
        "Items, die durch PvP verloren gehen, werden nicht ersetzt.",
        "Items lost to PvP are not replaced.",
      ),
      r(
        "7.2",
        "Der Loot gefallener Spieler darf mitgenommen werden und gehört dem Sieger.",
        "The loot of fallen players may be taken and belongs to the winner.",
      ),
      r(
        "7.3",
        "Items, die durch eigene Unachtsamkeit verloren gehen (Lava, Void, Despawn, volles Inventar), werden nicht ersetzt.",
        "Items lost through your own carelessness (lava, void, despawn, full inventory) are not replaced.",
      ),
      r(
        "7.4",
        "Items, die durch einen nachweisbaren Serverfehler verloren gehen, werden nach Prüfung ersetzt.",
        "Items lost to a provable server fault are replaced after review.",
      ),
      r(
        "7.5",
        "Items, die durch einen Verstoß gegen §1.7 verloren gehen, werden dem Opfer ersetzt und dem Täter entzogen.",
        "Items lost through a breach of §1.7 are restored to the victim and taken from the offender.",
      ),
      r(
        "7.6",
        "Jeder weitere Ersatz erfolgt aus Kulanz. Ein Anspruch darauf besteht nicht.",
        "Any further replacement is a goodwill gesture. There is no entitlement to it.",
      ),
    ]),
    modsParagraph("8", { legacyFreecam: true }),
    accountsParagraph("9"),
    chatParagraph("10"),
    p("11", "gavel", "Support & Strafen", "Support & penalties", [
      ...penaltyItems("11"),
      r(
        "11.5",
        "Verstöße gegen §1.7 (Umgehen des PvP-Toggles), §1.8 (Schutz-Abuse) und §4 (Griefing an Claims) werden auf WildAttack besonders streng geahndet.",
        "Breaches of §1.7 (circumventing the PvP toggle), §1.8 (protection abuse) and §4 (griefing claims) are punished especially harshly on WildAttack.",
      ),
      r(
        "11.6",
        "Zusätzlich möglich sind: Entzug von Items und Geld, Rückbau von Bauten, Entfernung von Claims, dauerhafte Sperrung des PvP-Toggles sowie Ersatzpflicht.",
        "Additional measures: removal of items and money, demolition of builds, removal of claims, permanently locking the PvP toggle and liability for compensation.",
      ),
    ]),
  ],
};
