import { n, p, r, type RuleSet } from "./types";
import {
  accountsParagraph,
  chatParagraph,
  exploitItems,
  ignoranceRule,
  lagMachineRule,
  modsNotice,
  modsParagraph,
  penaltyItems,
  realMoneyRule,
  tradeCommandRule,
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
    de: `${modsNotice("7", { legacyFreecam: true }).de} PvP ist auf WildAttack standardmäßig aus. Mit /pvp schaltest du es alle 12 Stunden für dich an oder aus, im Kampf geht das nicht. Schaden zwischen zwei Spielern gibt es nur, wenn beide PvP an haben.`,
    en: `${modsNotice("7", { legacyFreecam: true }).en} PvP is off by default on WildAttack. Use /pvp to switch it on or off for yourself every 12 hours; this is not possible during a fight. Players only damage each other when both have PvP on.`,
  },
  paragraphs: [
    p("0", "scale", "Grundsätzliches", "Basics", [ignoranceRule("0.1")]),
    p("1", "swords", "PvP", "PvP", [
      r(
        "1.1",
        "Spieler mit deaktiviertem PvP dürfen auf keine Weise geschädigt oder getötet werden, auch nicht indirekt.",
        "Players with PvP off must not be harmed or killed in any way, not even indirectly.",
        n(
          "Zum Beispiel über Lava, Wasser, Feuer, TNT, Endkristalle, Angeln, Boote, Loren, Pushen in Void, Lava oder Abgründe, Mobs, Ersticken, Fallschaden oder Redstone-Anlagen.",
          "For example via lava, water, fire, TNT, end crystals, fishing rods, boats, minecarts, pushing into the void, lava or drops, mobs, suffocation, fall damage or redstone contraptions.",
        ),
      ),
      r(
        "1.2",
        "Wer PvP aus hat, darf diesen Schutz nicht ausnutzen, um andere zu provozieren, Kämpfe zu stören, Projektile abzufangen oder fremden Loot einzusammeln.",
        "Players with PvP off must not abuse that protection to provoke others, disrupt fights, block projectiles or pick up other players' loot.",
      ),
      r(
        "1.3",
        "Nach einem Treffer bist du 30 Sekunden im Kampf. In dieser Zeit sind Ausloggen, Serverwechsel und Teleportieren verboten.",
        "After a hit you are in combat for 30 seconds. During that time logging out, switching servers and teleporting are forbidden.",
      ),
      r(
        "1.4",
        "Niemand darf durch Druck, Drohungen oder Erpressung zu etwas gezwungen werden, weder zum Aktivieren von PvP noch zur Herausgabe von Items, Geld oder Land („Schutzgeld“).",
        "Nobody may be forced into anything through pressure, threats or blackmail, neither into enabling PvP nor into handing over items, money or land (\"protection money\").",
      ),
      r(
        "1.5",
        "Spawn- und Portalcamping sind verboten. Halte zu Spawn und öffentlichen Portalen mindestens 100 Blöcke Abstand.",
        "Spawn and portal camping are forbidden. Keep at least 100 blocks away from spawn and public portals.",
      ),
      r(
        "1.6",
        "Spieler dürfen nicht gegen ihren Willen eingesperrt werden. TPA-Fallen und andere Fallen, um Spieler zu töten, sind verboten.",
        "Players must not be trapped against their will. TPA traps and any other traps for killing players are forbidden.",
      ),
    ]),
    p("2", "mapPin", "Claims & Trust", "Claims & trust", [
      r(
        "2.1",
        "Geschützt ist nur, was geclaimt ist. Ungeclaimte Bauten und Kisten dürfen abgebaut und geplündert werden. Wer nicht claimt, ist selbst schuld.",
        "Only claimed land is protected. Unclaimed builds and chests may be mined and looted. If you do not claim, that is on you.",
      ),
      r(
        "2.2",
        "Griefing und Diebstahl auf fremden Claims sind verboten, ebenso das Ausnutzen von Lücken im Claimschutz (Bugs, Kolben, Wasser, Lava, TNT über Claimgrenzen hinweg).",
        "Griefing and stealing on other players' claims are forbidden, as is exploiting gaps in claim protection (bugs, pistons, water, lava, TNT across claim borders).",
      ),
      r(
        "2.3",
        "Wer auf einem Claim Trust hat, darf dort alles. Trust vergibst du auf eigenes Risiko: Was getrustete Spieler nehmen oder zerstören, wird weder bestraft noch ersetzt.",
        "Anyone trusted on a claim may do anything there. You trust at your own risk: whatever trusted players take or destroy is neither punished nor replaced.",
      ),
      r(
        "2.4",
        "Claims dürfen keine fremden Claims einschließen, keine Wege, Zugänge, Straßen, Portale oder öffentlichen Bereiche blockieren und die Erweiterung anderer nicht mutwillig verhindern.",
        "Claims must not enclose other claims, block paths, entrances, roads, portals or public areas, or deliberately prevent others from expanding.",
      ),
      r(
        "2.5",
        "Halte zu fremden Claims mindestens 50 Blöcke Abstand, sofern nichts anderes abgesprochen ist.",
        "Keep at least 50 blocks away from other claims unless agreed otherwise.",
      ),
      r(
        "2.6",
        "Claim-Abusing ist verboten: einen Claim setzen, Ressourcen abbauen und sofort wieder unclaimen.",
        "Claim abuse is forbidden: setting a claim, harvesting resources and unclaiming straight away.",
      ),
      r(
        "2.7",
        "Du darfst dich auf deinen Claim zurückziehen, aber nicht aus dem geschützten Claim heraus angreifen.",
        "You may retreat onto your claim, but you must not attack from inside the protected claim.",
        n("Gilt für Bogen, Dreizack, Wurftränke und Endkristalle.", "Applies to bows, tridents, splash potions and end crystals."),
      ),
      r(
        "2.8",
        "Claims von Spielern, die länger als 60 Tage inaktiv sind, können ohne Ankündigung entfernt werden. Das Team darf Claims außerdem verschieben, verkleinern oder entfernen, wenn sie gegen Regeln verstoßen oder Serverbauten im Weg stehen.",
        "Claims of players inactive for more than 60 days can be removed without notice. The team may also move, shrink or remove claims that break the rules or get in the way of server builds.",
      ),
    ]),
    p("3", "hammer", "Bauen & Welten", "Building & worlds", [
      r(
        "3.1",
        "Beleidigende, politische oder NSFW-Bauten und -Schilder sind verboten.",
        "Offensive, political or NSFW builds and signs are forbidden.",
      ),
      r(
        "3.2",
        "Spawn, Serverbauten, Hauptstraßen, Nether-Highways und öffentliche Portale dürfen nicht zugebaut, blockiert, umgeleitet oder verunstaltet werden.",
        "Spawn, server builds, main roads, Nether highways and public portals must not be built over, blocked, rerouted or defaced.",
      ),
      r(
        "3.3",
        "Mutwillige Massenzerstörung ohne Spielzweck ist überall verboten, auch außerhalb von Claims.",
        "Wanton mass destruction with no gameplay purpose is forbidden everywhere, outside claims too.",
        n(
          "Zum Beispiel ganze Gebiete wegsprengen, großflächige Lava-Fluten oder Weltbrand.",
          "For example blowing up whole areas, large-scale lava floods or setting the world on fire.",
        ),
      ),
      r(
        "3.4",
        "Die Farmwelt ist zum Abbauen da. Bauten dort werden beim Reset ersatzlos gelöscht.",
        "The farm world is for mining. Builds there are deleted on reset without replacement.",
      ),
    ]),
    p("4", "coins", "Handel & Wirtschaft", "Trading & economy", [
      r(
        "4.1",
        "Betrug und Scamming sind verboten. Dazu zählen gebrochene Absprachen bei einem laufenden Handel und falsch beschriftete ChestShops.",
        "Fraud and scamming are forbidden. This includes breaking agreements mid-trade and mislabelled chest shops.",
      ),
      tradeCommandRule("4.2"),
      realMoneyRule("4.3"),
      r(
        "4.4",
        "Wetten und Glücksspiel sind nur mit fairen, transparenten Bedingungen erlaubt. Verluste bei Coinflip und ähnlichen Systemen werden nicht erstattet.",
        "Bets and gambling are only allowed on fair, transparent terms. Losses from coinflip and similar systems are not refunded.",
      ),
      r(
        "4.5",
        "Fehlerhafte Shop- und Systempreise meldest du dem Team, statt sie auszunutzen.",
        "Report wrong shop and system prices to the team instead of exploiting them.",
      ),
    ]),
    p("5", "cog", "Technik & Redstone", "Tech & redstone", [
      r(
        "5.1",
        "Chunkloader jeglicher Art sind verboten und werden ohne Vorwarnung entfernt.",
        "Chunk loaders of any kind are forbidden and removed without warning.",
      ),
      r(
        "5.2",
        "Redstone-Clocks, Farmen und Hoppernetze sind erlaubt, solange sie die Serverleistung nicht spürbar belasten. Sonst kann das Team sie drosseln, abschalten oder entfernen.",
        "Redstone clocks, farms and hopper networks are allowed as long as they do not noticeably load the server. Otherwise the team can slow them down, switch them off or remove them.",
      ),
      lagMachineRule("5.3"),
      r(
        "5.4",
        "TNT-Duper sind erlaubt, stationär wie beweglich (z. B. Tunnelbohrer oder Flugmaschinen). Bei Nichtnutzung müssen sie abgeschaltet sein und dürfen nicht in fremde Claims fahren (§2.2, §3.3).",
        "TNT dupers are allowed, stationary as well as moving ones (e.g. tunnel bores or flying machines). They must be switched off when not in use and must not enter other claims (§2.2, §3.3).",
      ),
      ...exploitItems("5", 5),
    ]),
    p("6", "package", "Tod, Loot & Ersatz", "Death, loot & replacement", [
      r(
        "6.1",
        "Wer PvP an hat, willigt in Kampf und Itemverlust ein. Der Loot gehört dem Sieger, PvP-Verluste werden nicht ersetzt.",
        "Having PvP on means agreeing to fights and item loss. The loot belongs to the winner; PvP losses are not replaced.",
      ),
      r(
        "6.2",
        "Items, die nachweisbar durch einen Serverfehler verloren gehen, werden nach Prüfung ersetzt.",
        "Items lost through a provable server error are replaced after review.",
      ),
      r(
        "6.3",
        "Items, die durch einen Verstoß gegen §1.1 verloren gehen, bekommt das Opfer zurück; dem Täter werden sie entzogen.",
        "Items lost through a breach of §1.1 are returned to the victim and taken from the offender.",
      ),
      r(
        "6.4",
        "Alles andere, etwa Verluste durch Lava, Void, Despawn oder volles Inventar, wird nicht ersetzt. Ausnahmen sind reine Kulanz.",
        "Anything else, such as losses to lava, the void, despawning or a full inventory, is not replaced. Exceptions are a goodwill gesture only.",
      ),
    ]),
    modsParagraph("7", { legacyFreecam: true }),
    accountsParagraph("8"),
    chatParagraph("9"),
    p("10", "gavel", "Support & Strafen", "Support & penalties", [
      ...penaltyItems("10"),
      r(
        "10.5",
        "Verstöße gegen §1.1 (PvP-Schutz umgehen), §1.2 (Schutz ausnutzen) und §2.2 (Griefing auf Claims) werden auf WildAttack besonders streng bestraft.",
        "Breaches of §1.1 (circumventing PvP protection), §1.2 (abusing protection) and §2.2 (griefing claims) are punished especially harshly on WildAttack.",
      ),
      r(
        "10.6",
        "Zusätzlich möglich sind der Entzug von Items und Geld, der Rückbau von Bauten, das Entfernen von Claims, die dauerhafte Sperre des PvP-Toggles und eine Ersatzpflicht.",
        "Additional measures include taking away items and money, removing builds, deleting claims, permanently locking the PvP toggle and an obligation to compensate.",
      ),
    ]),
  ],
};
