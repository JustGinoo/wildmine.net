import { n, p, r, type RuleSet } from "./types";
import {
  accountItems,
  chatParagraph,
  coinflipRule,
  exploitItems,
  ignoranceRule,
  lagMachineRule,
  penaltyItems,
  realMoneyRule,
  tradeCommandRule,
  trustAbuseRule,
  trustRiskRule,
} from "./shared";

/** Friendly SMP — claiming, PvP only inside the farm worlds. */
export const wildsmpRules: RuleSet = {
  key: "wildsmp",
  title: {
    de: "WildSMP-Regelwerk",
    en: "WildSMP rules",
  },
  scope: {
    de: "Gilt für WildSMP inklusive Hauptwelt, Nether, aller Farmwelten und der zugehörigen Wirtschaft.",
    en: "Applies to WildSMP including the main world, Nether, all farm worlds and the economy.",
  },
  notice: {
    de: "Verboten sind X-Ray, Freecam, Autoklicker, Auto-Totem, Makros, SeedCracker, MouseWheelie und jeder Hacked Client – schon das Betreten des Servers damit ist ein Bann. Die vollständige Liste steht in §1. Ansonsten gilt: WildSMP ist ein friedliches Miteinander, PvP findet ausschließlich in den Farmwelten statt.",
    en: "X-ray, freecam, auto-clickers, auto-totem, macros, SeedCracker, MouseWheelie and every hacked client are forbidden – simply joining with one is a ban. The full list is in §1. Otherwise: WildSMP is about playing together peacefully, and PvP happens only inside the farm worlds.",
  },
  paragraphs: [
    p("0", "scale", "Geltungsbereich & Grundgedanke", "Scope & core idea", [
      ignoranceRule("0.1"),
      r(
        "0.2",
        "WildSMP ist ein kooperativer Survival-Modus. Rücksicht, Fairness und ein friedliches Miteinander stehen an erster Stelle.",
        "WildSMP is a cooperative survival mode. Consideration, fairness and peaceful coexistence come first.",
      ),
      r(
        "0.3",
        "Deine Bauten und Besitztümer schützt du selbst durch Claiming.",
        "You protect your builds and belongings yourself by claiming land.",
      ),
      r(
        "0.4",
        "PvP ist ausschließlich in den ausgewiesenen Farmwelten aktiv. In Hauptwelt, Nether und Spawn ist PvP verboten.",
        "PvP is only active inside the designated farm worlds. It is forbidden in the main world, Nether and at spawn.",
      ),
    ]),
    p("1", "ban", "Verbotene & erlaubte Mods", "Forbidden & allowed mods", [
      r(
        "1.1",
        "Verboten ist jede Modifikation, die dir einen Vorteil gegenüber anderen verschafft oder die Kommunikation zwischen Client und Server verändert.",
        "Any modification that gives you an advantage over others or alters the communication between client and server is forbidden.",
      ),
      r(
        "1.2",
        "Namentlich verboten sind X-Ray in jeder Form, Freecam, Autoklicker, Auto-Totem, Makros, SeedCracker, MouseWheelie und alle Hacked Clients.",
        "Explicitly forbidden are x-ray in any form, freecam, auto-clickers, auto-totem, macros, SeedCracker, MouseWheelie and every hacked client.",
        n(
          "Ebenso Killaura, Reach, Fly, Speed, NoFall, Tracer/ESP, Auto-Mining, Auto-Place und Schematica-Printer.",
          "Likewise killaura, reach, fly, speed, nofall, tracers/ESP, auto-mining, auto-place and the Schematica printer.",
        ),
      ),
      r(
        "1.3",
        "Jede Modifikation, die das Anti-Cheat umgeht oder täuscht, führt zum permanenten Bann.",
        "Any modification that bypasses or deceives the anti-cheat leads to a permanent ban.",
      ),
      r(
        "1.4",
        "Erlaubt ist alles, was keinen unfairen Vorteil verschafft und die Server-Client-Kommunikation unverändert lässt.",
        "Anything that gives no unfair advantage and leaves server-client communication untouched is allowed.",
        n(
          "Darunter Performance-Mods wie Sodium und Lithium, kosmetische Mods und Minimaps inklusive Entity- und Höhlenradar.",
          "That includes performance mods such as Sodium and Lithium, cosmetic mods and minimaps including entity and cave radar.",
        ),
      ),
      r(
        "1.5",
        "Litematica und vergleichbare Schematic-Mods sind erlaubt, solange du KEINEN Printer und kein Auto-Place nutzt.",
        "Litematica and comparable schematic mods are allowed as long as you use NO printer and no auto-place.",
        n(
          "Die Bauvorlage anzeigen zu lassen ist in Ordnung – die Blöcke müssen von Hand gesetzt werden.",
          "Displaying the build template is fine – the blocks have to be placed by hand.",
        ),
      ),
      r(
        "1.6",
        "Als Clients sind Vanilla, Fabric, Quilt, Lunar, Feather, LabyMod, NoRisk und Essential ausdrücklich in Ordnung.",
        "Vanilla, Fabric, Quilt, Lunar, Feather, LabyMod, NoRisk and Essential are explicitly fine as clients.",
      ),
      r(
        "1.7",
        "Das bloße Betreten des Servers mit einer verbotenen Modifikation ist bereits ein Regelverstoß. Bei Verdacht darf das Team einen Nachweis verlangen; eine Verweigerung gilt als Schuldeingeständnis.",
        "Simply joining the server with a forbidden modification is already an offence. On reasonable suspicion the team may request proof; refusing counts as an admission of guilt.",
      ),
      r(
        "1.8",
        "Im Zweifel fragst du vorher im Support nach, statt es darauf ankommen zu lassen.",
        "When in doubt, ask support beforehand rather than taking the risk.",
      ),
    ]),
    p("2", "user", "Accounts", "Accounts", [
      r(
        "2.1",
        "Du darfst höchstens drei eigene Accounts gleichzeitig online haben.",
        "You may have at most three of your own accounts online at the same time.",
      ),
      r(
        "2.2",
        "Nur einer davon darf aktiv spielen. Die anderen beiden dürfen ausschließlich AFK stehen, etwa an einer Farm auf deinem eigenen Claim.",
        "Only one of them may actively play. The other two may only stand AFK, for example at a farm on your own claim.",
      ),
      r(
        "2.3",
        "Zweitaccounts im AFK-Kristallbereich sind strengstens verboten. Dort zählt ausschließlich dein Hauptaccount.",
        "Alt accounts in the AFK crystal area are strictly forbidden. Only your main account counts there.",
      ),
      r(
        "2.4",
        "Voten, Belohnungen abholen, Claimen, Handeln oder Fortschritt erzeugen über Zweitaccounts ist verboten.",
        "Voting, claiming rewards, claiming land, trading or generating progress on alt accounts is forbidden.",
      ),
      r(
        "2.5",
        "Discord-Linking ist nur für deinen eigenen Hauptaccount erlaubt – weder für andere Spieler noch für Zweitaccounts, etwa um Booster-Belohnungen mehrfach abzuholen.",
        "Discord linking is only allowed for your own main account – neither on behalf of other players nor for alt accounts, for example to collect booster rewards more than once.",
      ),
      r(
        "2.6",
        "Du trägst die Verantwortung für alles, was über deine Accounts passiert. Bist du auf einem gesperrt, ist das Weiterspielen auf jedem anderen untersagt.",
        "You are responsible for everything that happens through your accounts. If one of them is banned, playing on any other is prohibited.",
      ),
      ...accountItems("2", 7),
    ]),
    p("3", "mapPin", "Claiming & Grundstücke", "Claiming & plots", [
      r(
        "3.1",
        "Baue nur innerhalb eines geclaimten Gebiets. Ungeschützte Bauten und Kisten sind dein eigenes Risiko; es besteht kein Anspruch auf Ersatz.",
        "Only build inside claimed land. Unprotected builds and chests are your own risk; there is no right to replacement.",
      ),
      r(
        "3.2",
        "Claim-Blocking ist verboten. Claims dürfen fremde Claims nicht einschließen, Zugänge oder Wege blockieren oder die Erweiterung anderer mutwillig verhindern.",
        "Claim blocking is forbidden. Claims must not enclose other claims, block access or paths, or maliciously prevent others from expanding.",
      ),
      r(
        "3.3",
        "Halte zu fremden Claims einen Mindestabstand von 50 Blöcken ein, sofern nichts anderes abgesprochen ist.",
        "Keep a minimum distance of 50 blocks to other claims unless agreed otherwise.",
      ),
      r(
        "3.4",
        "Claim-Abusing ist verboten: einen Claim setzen, Ressourcen abgreifen und sofort wieder unclaimen.",
        "Claim abusing is forbidden: claiming land, stripping resources and immediately unclaiming.",
        n(
          "Beispiel: Kleinen Claim setzen, Erze und Kisten looten, direkt danach unclaimen.",
          "Example: setting a small claim, looting ores and chests, then unclaiming right away.",
        ),
      ),
      r(
        "3.5",
        "Claims dürfen nicht dazu genutzt werden, öffentliche Bereiche, Spawns, Straßen, Portale oder Handelszonen zu blockieren.",
        "Claims must not be used to block public areas, spawns, roads, portals or trading zones.",
      ),
      trustRiskRule("3.6"),
      r(
        "3.7",
        "Claims von Spielern, die länger als 60 Tage inaktiv sind, können ohne weitere Ankündigung entfernt werden.",
        "Claims of players inactive for more than 60 days can be removed without further notice.",
      ),
      r(
        "3.8",
        "Der Verkauf von Claims ist ausschließlich gegen Ingame-Währung erlaubt.",
        "Selling claims is only allowed for in-game currency.",
      ),
      r(
        "3.9",
        "Das gezielte Claimen attraktiver Bereiche ohne eigene Bauabsicht und zum reinen Weiterverkauf ist untersagt.",
        "Deliberately claiming prime locations with no intent to build, purely to resell them, is prohibited.",
      ),
      r(
        "3.10",
        "Das Team darf Claims verschieben, verkleinern oder entfernen, wenn sie gegen Regeln verstoßen oder Serverbauten im Weg stehen.",
        "The team may move, shrink or remove claims that break the rules or block server builds.",
      ),
    ]),
    p("4", "hammer", "Bauen in der Hauptwelt", "Building in the main world", [
      r(
        "4.1",
        "Bauten dürfen nicht gegen die allgemeinen Regeln verstoßen – keine Beleidigungen, politischen Symbole oder NSFW-Inhalte.",
        "Builds must not break the general rules — no insults, political symbols or NSFW content.",
      ),
      r(
        "4.2",
        "Extrem unschöne, störende oder absichtlich provokante Bauten können vom Team ohne Vorwarnung entfernt werden.",
        "Extremely ugly, disruptive or deliberately provocative builds can be removed by the team without warning.",
        n(
          "1-Block-Säulen, Dirt-Türme, Bauschrott.",
          "Single-block pillars, dirt towers, build litter.",
        ),
      ),
      r(
        "4.3",
        "Öffentliche Bereiche, Serverbauten, der Spawn und Hauptstraßen dürfen nicht zugebaut, blockiert oder verunstaltet werden.",
        "Public areas, server builds, spawn and main roads must not be built over, blocked or defaced.",
      ),
      r(
        "4.4",
        "Homes auf fremden Grundstücken dürfen nur mit Erlaubnis des Besitzers gesetzt werden.",
        "Only set homes on someone else's land with the owner's permission.",
      ),
      r(
        "4.5",
        "Verlassene oder nie fertiggestellte Bauprojekte in der Hauptwelt können nach längerer Inaktivität entfernt werden.",
        "Abandoned or never-finished projects in the main world can be removed after longer inactivity.",
      ),
      r(
        "4.6",
        "Nether-Highways und öffentliche Portale dürfen nicht blockiert, umgeleitet oder abgeschottet werden.",
        "Nether highways and public portals must not be blocked, rerouted or sealed off.",
      ),
      r(
        "4.7",
        "Großflächige Landschaftszerstörung ohne Bauabsicht ist in der Hauptwelt verboten. Ressourcen werden in der Farmwelt abgebaut.",
        "Large-scale terrain destruction without building intent is forbidden in the main world. Gather resources in the farm world.",
      ),
      r(
        "4.8",
        "Portale müssen frei zugänglich bleiben und dürfen nicht als Falle gestaltet werden.",
        "Portals must stay freely accessible and must not be turned into traps.",
      ),
    ]),
    p("5", "swords", "Farmwelten & PvP", "Farm worlds & PvP", [
      r(
        "5.1",
        "Die Farmwelten dienen dem Abbau und Sammeln. Alle Bauten dort sind temporär und werden beim Reset ersatzlos gelöscht.",
        "Farm worlds are for mining and gathering. Everything built there is temporary and deleted on reset without replacement.",
      ),
      r(
        "5.2",
        "In den Farmwelten ist PvP aktiv. Wer eine Farmwelt betritt, willigt damit ausdrücklich in PvP ein.",
        "PvP is active in the farm worlds. Entering one is explicit consent to PvP.",
      ),
      r(
        "5.3",
        "In Farmwelten gibt es keinen Claimschutz. Kisten, Bauten und Ausrüstung dort sind dein eigenes Risiko.",
        "There is no claim protection in farm worlds. Chests, builds and gear there are your own risk.",
      ),
      r(
        "5.4",
        "Der Loot gefallener Spieler darf mitgenommen werden. Ein Ersatz durch das Team findet nicht statt.",
        "You may take the loot of fallen players. The team does not replace it.",
      ),
      r(
        "5.5",
        "Spawncamping ist verboten. Halte zu Farmwelt-Spawns, Portalen und Eingangspunkten einen Mindestabstand von 100 Blöcken.",
        "Spawn camping is forbidden. Keep at least 100 blocks from farm world spawns, portals and entry points.",
      ),
      r(
        "5.6",
        "Das gezielte Dauerjagen einzelner Spieler über längere Zeit ist verboten, insbesondere nach der Bitte, damit aufzuhören.",
        "Relentlessly hunting one specific player over a longer period is forbidden, especially after being asked to stop.",
      ),
      r(
        "5.7",
        "Corpse-Camping – das wiederholte Töten eines Spielers, der zu seinem Todespunkt zurückkehrt – ist untersagt.",
        "Corpse camping — repeatedly killing a player returning to their death point — is prohibited.",
      ),
      r(
        "5.8",
        "Es ist verboten, Spieler unter Vorspiegelung falscher Tatsachen per /tpa oder /tpahere in eine Farmwelt zu holen, um sie dort zu töten.",
        "Luring players into a farm world under false pretences via /tpa or /tpahere to kill them is forbidden.",
      ),
      r(
        "5.9",
        "Fallen in der Farmwelt sind erlaubt, dürfen Spieler aber nicht dauerhaft und ausweglos einsperren.",
        "Traps in the farm world are allowed, but must not lock players in permanently with no way out.",
      ),
      r(
        "5.10",
        "Farmwelt-Resets erfolgen regelmäßig. Es besteht kein Anspruch auf Vorwarnung oder auf den Erhalt von Bauten und Kisteninhalten.",
        "Farm worlds reset regularly. There is no entitlement to advance warning or to keeping builds and chest contents.",
      ),
      r(
        "5.11",
        "PvP außerhalb der Farmwelten ist verboten – auch indirekt.",
        "PvP outside the farm worlds is forbidden — indirect PvP included.",
        n(
          "Lava, Wasser, Feuer, TNT, Endkristalle, Fallen, Angeln, Boote, Loren, Pushing, Mobs und Ersticken.",
          "Lava, water, fire, TNT, end crystals, traps, fishing rods, boats, minecarts, pushing, mobs and suffocation.",
        ),
      ),
      r(
        "5.12",
        "Wer außerhalb der Farmwelten PvP erzwingt oder simuliert, wird wie bei einem schweren Griefing-Verstoß bestraft.",
        "Forcing or simulating PvP outside the farm worlds is punished like a severe griefing offence.",
      ),
      r(
        "5.13",
        "Combat-Logging – Ausloggen, Serverwechsel oder Teleportieren während eines laufenden Kampfes – ist verboten.",
        "Combat logging — disconnecting, switching servers or teleporting mid-fight — is forbidden.",
      ),
    ]),
    p("6", "shield", "Griefing, Diebstahl & Trust", "Griefing, theft & trust", [
      r(
        "6.1",
        "Griefing außerhalb der Farmwelten ist in jeder Form verboten.",
        "Griefing outside the farm worlds is forbidden in every form.",
      ),
      r(
        "6.2",
        "Diebstahl aus ungesicherten Kisten in der Hauptwelt ist verboten – auch dann, wenn er technisch möglich ist.",
        "Stealing from unsecured chests in the main world is forbidden — even where it is technically possible.",
      ),
      r(
        "6.3",
        "Das Ausnutzen von Lücken im Claimschutz (Bugs, Kolben, Wasser, Lava, TNT über Claimgrenzen hinweg) ist strengstens verboten.",
        "Exploiting gaps in claim protection (bugs, pistons, water, lava, TNT across claim borders) is strictly forbidden.",
      ),
      trustAbuseRule("6.4"),
      r(
        "6.5",
        "Das Einsperren, Blockieren oder Festhalten von Spielern ist außerhalb der Farmwelten verboten.",
        "Trapping, blocking or holding players is forbidden outside the farm worlds.",
      ),
      r(
        "6.6",
        "Das Töten fremder Tiere, das Zerstören fremder Farmen und das Ableiten von Wasser oder Lava auf fremdes Gebiet gilt als Griefing.",
        "Killing someone's animals, destroying their farms and diverting water or lava onto their land counts as griefing.",
      ),
    ]),
    p("7", "coins", "Handel, Wirtschaft & Scamming", "Trading, economy & scamming", [
      r(
        "7.1",
        "Betrug und Scamming jeglicher Art sind verboten und werden streng geahndet.",
        "Fraud and scamming of any kind are forbidden and punished severely.",
      ),
      r(
        "7.2",
        "Getroffene Absprachen sind bindend. Ein Wortbruch bei einem laufenden Handel gilt als Scam.",
        "Agreements are binding. Breaking your word mid-trade counts as a scam.",
      ),
      r(
        "7.3",
        "ChestShops müssen korrekt beschriftet sein. Täuschung über Item, Menge oder Preis ist verboten.",
        "Chest shops must be labelled correctly. Misleading about item, quantity or price is forbidden.",
      ),
      r(
        "7.4",
        "Im Auktionshaus sind Werbung und jede Form von Kommunikation über Item-Namen verboten. Dort werden ausschließlich Items gehandelt.",
        "Advertising and any form of communication through item names are forbidden in the auction house. It is there to trade items, nothing else.",
        n(
          "Gemeint sind umbenannte Items, die Nachrichten, Links, Shop-Werbung oder Beleidigungen transportieren.",
          "That covers renamed items carrying messages, links, shop advertising or insults.",
        ),
      ),
      r(
        "7.5",
        "Das Ausnutzen von Features wie „ChestShops mieten“ zu Täuschungszwecken ist untersagt.",
        "Abusing features such as renting chest shops to deceive others is prohibited.",
      ),
      r(
        "7.6",
        "Das Ausnutzen unerfahrener Spieler durch bewusst unfaire Preise oder Täuschung ist verboten.",
        "Taking advantage of inexperienced players with deliberately unfair prices or deception is forbidden.",
      ),
      r(
        "7.7",
        "Wetten und Glücksspiel sind nur mit Ingame-Währung und fairen, transparenten Bedingungen erlaubt.",
        "Bets and gambling are only allowed with in-game currency and fair, transparent terms.",
      ),
      r(
        "7.8",
        "Fehlerhafte Shop- und Systempreise sind zu melden und dürfen nicht ausgenutzt werden.",
        "Report incorrect shop and system prices instead of exploiting them.",
      ),
      realMoneyRule("7.9"),
      tradeCommandRule("7.10"),
      coinflipRule("7.11"),
    ]),
    p("8", "cog", "Technik, Redstone & Performance", "Tech, redstone & performance", [
      r(
        "8.1",
        "Chunkloader jeglicher Art sind strengstens verboten und werden ohne Vorwarnung entfernt.",
        "Chunk loaders of any kind are strictly forbidden and removed without warning.",
      ),
      r(
        "8.2",
        "Enderpearl-Chambers sind verboten. Sowohl das Bauen als auch das Nutzen einer solchen Anlage wird geahndet.",
        "Enderpearl chambers are forbidden. Both building and using such a contraption is punished.",
        n(
          "Gemeint ist jede Konstruktion, die geworfene Enderperlen in der Schwebe hält, um später an den Zielort zu teleportieren.",
          "That means any construction keeping thrown ender pearls suspended so you can teleport to that spot later.",
        ),
      ),
      r(
        "8.3",
        "Redstone-Clocks darfst du in jeder Geschwindigkeit bauen, solange sie die Serverleistung nicht beeinträchtigen.",
        "You may build redstone clocks at any speed, as long as they do not affect server performance.",
        n(
          "Fällt eine Anlage auf, bittet dich das Team, die Clock langsamer zu takten oder abzuschalten.",
          "If a contraption stands out, the team will ask you to slow the clock down or switch it off.",
        ),
      ),
      r(
        "8.4",
        "Stationäre TNT-Duper ohne Bewegung sind erlaubt, müssen bei Nichtnutzung jedoch deaktiviert sein.",
        "Stationary TNT dupers without movement are allowed, but must be switched off when not in use.",
      ),
      r(
        "8.5",
        "Farmen und Redstone-Anlagen dürfen die Serverleistung nicht unangemessen belasten. Das Team kann Einschränkungen oder den Rückbau verlangen.",
        "Farms and redstone contraptions must not put an unreasonable load on the server. The team can require limits or removal.",
      ),
      r(
        "8.6",
        "Übermäßige Entity-Ansammlungen und massive Hoppernetze können abgeschaltet oder entfernt werden.",
        "Excessive entity build-ups and massive hopper networks can be disabled or removed.",
      ),
      r(
        "8.7",
        "Automatisierte Anlagen und Fallen dürfen keine anderen Spieler schädigen.",
        "Automated contraptions and traps must not harm other players.",
      ),
      lagMachineRule("8.8"),
      ...exploitItems("8", 9),
    ]),
    p("9", "package", "Tod, Verlust & Ersatz", "Death, loss & replacement", [
      r(
        "9.1",
        "Items, die in einer Farmwelt oder durch PvP verloren gehen, werden nicht ersetzt.",
        "Items lost in a farm world or to PvP are not replaced.",
      ),
      r(
        "9.2",
        "Items, die durch eigene Unachtsamkeit verloren gehen (Lava, Void, Despawn, volles Inventar), werden nicht ersetzt.",
        "Items lost through your own carelessness (lava, void, despawn, full inventory) are not replaced.",
      ),
      r(
        "9.3",
        "Items, die durch einen nachweisbaren Serverfehler verloren gehen, werden nach Prüfung ersetzt.",
        "Items lost to a provable server fault are replaced after review.",
      ),
      r(
        "9.4",
        "Schäden durch getrustete Spieler ersetzt das Team nicht (§3.6). Ersatzpflichtig ist der Täter (§6.4).",
        "The team does not replace damage caused by trusted players (§3.6). The offender is liable for it (§6.4).",
      ),
      r(
        "9.5",
        "Jeder Ersatz erfolgt aus Kulanz. Ein Anspruch darauf besteht nicht.",
        "Any replacement is a goodwill gesture. There is no entitlement to it.",
      ),
    ]),
    chatParagraph("10"),
    p("11", "gavel", "Support & Strafen", "Support & penalties", [
      ...penaltyItems("11"),
      r(
        "11.5",
        "Verstöße gegen §1 (verbotene Mods), §5.11 (PvP außerhalb der Farmwelten) und §6 (Griefing) werden auf WildSMP besonders streng geahndet.",
        "Breaches of §1 (forbidden mods), §5.11 (PvP outside the farm worlds) and §6 (griefing) are punished especially harshly on WildSMP.",
      ),
      r(
        "11.6",
        "Zusätzlich möglich sind: Entzug von Items und Geld, Rückbau von Bauten, Entfernung von Claims sowie Ersatzpflicht gegenüber dem Geschädigten.",
        "Additional measures: removal of items and money, demolition of builds, removal of claims and liability towards the injured party.",
      ),
    ]),
  ],
};
