import { n, p, r, type RuleSet } from "./types";
import {
  chatParagraph,
  exploitItems,
  ignoranceRule,
  lagMachineRule,
  penaltyItems,
  realMoneyRule,
  tradeCommandRule,
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
    p("0", "scale", "Grundsätzliches", "Basics", [ignoranceRule("0.1")]),
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
    ]),
    p("2", "user", "Accounts", "Accounts", [
      r(
        "2.1",
        "Du darfst höchstens drei eigene Accounts gleichzeitig online haben. Nur einer davon darf aktiv spielen, die anderen dürfen nur AFK stehen, etwa an einer Farm auf deinem Claim.",
        "You may have at most three of your own accounts online at once. Only one of them may actively play; the others may only stand AFK, for example at a farm on your claim.",
      ),
      r(
        "2.2",
        "Über Zweitaccounts darfst du nicht voten, keine Belohnungen abholen, nicht claimen, nicht handeln und keinen Fortschritt erzeugen. Im AFK-Kristallbereich zählt nur dein Hauptaccount.",
        "Alt accounts must not vote, collect rewards, claim, trade or make progress. In the AFK crystal area only your main account counts.",
      ),
      r(
        "2.3",
        "Die AFK-Erkennung darf auf keine Weise umgangen werden.",
        "The AFK detection must not be bypassed in any way.",
      ),
      r(
        "2.4",
        "Discord-Linking ist nur für deinen eigenen Hauptaccount erlaubt, nicht für andere Spieler oder Zweitaccounts.",
        "Discord linking is only allowed for your own main account, not for other players or alt accounts.",
      ),
      r(
        "2.5",
        "Du bist für alles verantwortlich, was über deine Accounts passiert. Accounts zu teilen, zu verkaufen, zu tauschen oder zu verschenken ist verboten. Bist du auf einem Account gesperrt, darfst du auf keinem anderen weiterspielen.",
        "You are responsible for everything done through your accounts. Sharing, selling, swapping or giving away accounts is forbidden. If one of your accounts is banned, you must not keep playing on any other.",
      ),
      r(
        "2.6",
        "Name, Skin und Cape dürfen keine Werbung, Beleidigungen, Nacktheit oder politischen Inhalte zeigen.",
        "Names, skins and capes must not show advertising, insults, nudity or political content.",
      ),
    ]),
    p("3", "mapPin", "Claims & Trust", "Claims & trust", [
      r(
        "3.1",
        "Geschützt ist nur, was geclaimt ist. Ungeclaimte Bauten und Kisten dürfen abgebaut und geplündert werden. Wer nicht claimt, ist selbst schuld.",
        "Only claimed land is protected. Unclaimed builds and chests may be mined and looted. If you do not claim, that is on you.",
      ),
      r(
        "3.2",
        "Griefing und Diebstahl auf fremden Claims sind verboten, ebenso das Ausnutzen von Lücken im Claimschutz (Bugs, Kolben, Wasser, Lava, TNT über Claimgrenzen hinweg).",
        "Griefing and stealing on other players' claims are forbidden, as is exploiting gaps in claim protection (bugs, pistons, water, lava, TNT across claim borders).",
        n(
          "Dazu zählen auch das Töten fremder Tiere, das Zerstören fremder Farmen und das Ableiten von Wasser oder Lava auf fremde Claims.",
          "This includes killing other players' animals, destroying their farms and directing water or lava onto their claims.",
        ),
      ),
      r(
        "3.3",
        "Wer auf einem Claim Trust hat, darf dort alles. Trust vergibst du auf eigenes Risiko: Was getrustete Spieler nehmen oder zerstören, wird weder bestraft noch ersetzt.",
        "Anyone trusted on a claim may do anything there. You trust at your own risk: whatever trusted players take or destroy is neither punished nor replaced.",
      ),
      r(
        "3.4",
        "Claims dürfen keine fremden Claims einschließen, keine Wege, Zugänge, Straßen, Portale, Handelszonen oder öffentlichen Bereiche blockieren und die Erweiterung anderer nicht mutwillig verhindern.",
        "Claims must not enclose other claims, block paths, entrances, roads, portals, trading zones or public areas, or deliberately prevent others from expanding.",
      ),
      r(
        "3.5",
        "Halte zu fremden Claims mindestens 50 Blöcke Abstand, sofern nichts anderes abgesprochen ist.",
        "Keep at least 50 blocks away from other claims unless agreed otherwise.",
      ),
      r(
        "3.6",
        "Claim-Abusing ist verboten: einen Claim setzen, Ressourcen abbauen und sofort wieder unclaimen.",
        "Claim abuse is forbidden: setting a claim, harvesting resources and unclaiming straight away.",
      ),
      r(
        "3.7",
        "Attraktive Bereiche nur zu claimen, um sie weiterzuverkaufen, ist verboten.",
        "Claiming attractive areas only to resell them is forbidden.",
      ),
      r(
        "3.8",
        "Claims von Spielern, die länger als 60 Tage inaktiv sind, und verlassene Bauprojekte können ohne Ankündigung entfernt werden. Das Team darf Claims außerdem verschieben, verkleinern oder entfernen, wenn sie gegen Regeln verstoßen oder Serverbauten im Weg stehen.",
        "Claims of players inactive for more than 60 days and abandoned builds can be removed without notice. The team may also move, shrink or remove claims that break the rules or get in the way of server builds.",
      ),
    ]),
    p("4", "hammer", "Bauen in der Hauptwelt", "Building in the main world", [
      r(
        "4.1",
        "Beleidigende, politische oder NSFW-Bauten und -Schilder sind verboten.",
        "Offensive, political or NSFW builds and signs are forbidden.",
      ),
      r(
        "4.2",
        "Spawn, Serverbauten, Hauptstraßen, Nether-Highways und öffentliche Portale dürfen nicht zugebaut, blockiert, umgeleitet, verunstaltet oder als Falle gestaltet werden.",
        "Spawn, server builds, main roads, Nether highways and public portals must not be built over, blocked, rerouted, defaced or turned into traps.",
      ),
      r(
        "4.3",
        "Homes auf fremden Claims darfst du nur mit Erlaubnis des Besitzers setzen.",
        "You may only set homes on other players' claims with the owner's permission.",
      ),
      r(
        "4.4",
        "Großflächige Landschaftszerstörung ohne Bauabsicht ist in der Hauptwelt verboten. Ressourcen baust du in der Farmwelt ab.",
        "Large-scale terrain destruction without building intent is forbidden in the main world. Mine your resources in the farm world.",
      ),
    ]),
    p("5", "swords", "PvP & Farmwelten", "PvP & farm worlds", [
      r(
        "5.1",
        "PvP gibt es nur in den Farmwelten. Außerhalb ist es verboten, auch indirekt.",
        "PvP only exists in the farm worlds. Outside them it is forbidden, indirectly too.",
        n(
          "Zum Beispiel über Lava, Wasser, Feuer, TNT, Endkristalle, Fallen, Angeln, Boote, Loren, Pushen, Mobs, Ersticken oder Redstone-Anlagen.",
          "For example via lava, water, fire, TNT, end crystals, traps, fishing rods, boats, minecarts, pushing, mobs, suffocation or redstone contraptions.",
        ),
      ),
      r(
        "5.2",
        "Wer eine Farmwelt betritt, willigt in PvP ein. Dort gibt es keinen Claimschutz, Bauten sind temporär und Resets kommen ohne Vorwarnung. Was dort verloren geht, wird nicht ersetzt.",
        "Entering a farm world means agreeing to PvP. There is no claim protection there, builds are temporary and resets come without warning. Nothing lost there is replaced.",
      ),
      r(
        "5.3",
        "Nach einem Treffer bist du 15 Sekunden im Kampf. In dieser Zeit sind Ausloggen, Serverwechsel und Teleportieren verboten.",
        "After a hit you are in combat for 15 seconds. During that time logging out, switching servers and teleporting are forbidden.",
      ),
      r(
        "5.4",
        "Spawncamping ist verboten. Halte zu Farmwelt-Spawns, Portalen und Eingangspunkten mindestens 100 Blöcke Abstand.",
        "Spawn camping is forbidden. Keep at least 100 blocks away from farm world spawns, portals and entry points.",
      ),
      r(
        "5.5",
        "Corpse-Camping ist verboten: einen Spieler immer wieder töten, der zu seinem Todespunkt zurückkehrt.",
        "Corpse camping is forbidden: repeatedly killing a player who returns to where they died.",
      ),
      r(
        "5.6",
        "Spieler dürfen nicht gegen ihren Willen eingesperrt werden. TPA-Fallen und andere Fallen, um Spieler zu töten, sind verboten.",
        "Players must not be trapped against their will. TPA traps and any other traps for killing players are forbidden.",
      ),
    ]),
    p("6", "coins", "Handel & Wirtschaft", "Trading & economy", [
      r(
        "6.1",
        "Betrug und Scamming sind verboten. Dazu zählen gebrochene Absprachen bei einem laufenden Handel, falsch beschriftete ChestShops und das Ausnutzen von Features wie „ChestShops mieten“ zur Täuschung.",
        "Fraud and scamming are forbidden. This includes breaking agreements mid-trade, mislabelled chest shops and abusing features such as \"renting chest shops\" to deceive others.",
      ),
      r(
        "6.2",
        "Unerfahrene Spieler durch bewusst unfaire Preise oder Täuschung auszunutzen ist verboten.",
        "Exploiting inexperienced players through deliberately unfair prices or deception is forbidden.",
      ),
      r(
        "6.3",
        "Im Auktionshaus werden nur Items gehandelt. Werbung und Nachrichten über Item-Namen sind dort verboten.",
        "The auction house is for trading items only. Advertising and messages via item names are forbidden there.",
        n(
          "Gemeint sind umbenannte Items mit Nachrichten, Links, Shop-Werbung oder Beleidigungen.",
          "This means renamed items carrying messages, links, shop advertising or insults.",
        ),
      ),
      tradeCommandRule("6.4"),
      realMoneyRule("6.5"),
      r(
        "6.6",
        "Wetten und Glücksspiel sind nur mit fairen, transparenten Bedingungen erlaubt. Verluste bei Coinflip und ähnlichen Systemen werden nicht erstattet.",
        "Bets and gambling are only allowed on fair, transparent terms. Losses from coinflip and similar systems are not refunded.",
      ),
      r(
        "6.7",
        "Fehlerhafte Shop- und Systempreise meldest du dem Team, statt sie auszunutzen.",
        "Report wrong shop and system prices to the team instead of exploiting them.",
      ),
    ]),
    p("7", "cog", "Technik & Redstone", "Tech & redstone", [
      r(
        "7.1",
        "Chunkloader jeglicher Art sind verboten und werden ohne Vorwarnung entfernt.",
        "Chunk loaders of any kind are forbidden and removed without warning.",
      ),
      r(
        "7.2",
        "Enderpearl-Chambers sind verboten, sowohl der Bau als auch die Nutzung.",
        "Ender pearl chambers are forbidden, both building and using them.",
        n(
          "Gemeint ist jede Konstruktion, die geworfene Enderperlen in der Schwebe hält, um später an den Zielort zu teleportieren.",
          "This means any contraption that keeps thrown ender pearls suspended so you can teleport to the target later.",
        ),
      ),
      r(
        "7.3",
        "Redstone-Clocks, Farmen und Hoppernetze sind erlaubt, solange sie die Serverleistung nicht spürbar belasten. Sonst kann das Team sie drosseln, abschalten oder entfernen.",
        "Redstone clocks, farms and hopper networks are allowed as long as they do not noticeably load the server. Otherwise the team can slow them down, switch them off or remove them.",
      ),
      lagMachineRule("7.4"),
      r(
        "7.5",
        "TNT-Duper sind erlaubt, stationär wie beweglich (z. B. Tunnelbohrer oder Flugmaschinen). Bei Nichtnutzung müssen sie abgeschaltet sein und dürfen nicht in fremde Claims fahren (§3.2, §4.4).",
        "TNT dupers are allowed, stationary as well as moving ones (e.g. tunnel bores or flying machines). They must be switched off when not in use and must not enter other claims (§3.2, §4.4).",
      ),
      ...exploitItems("7", 6),
    ]),
    p("8", "package", "Verlust & Ersatz", "Loss & replacement", [
      r(
        "8.1",
        "Items, die nachweisbar durch einen Serverfehler verloren gehen, werden nach Prüfung ersetzt.",
        "Items lost through a provable server error are replaced after review.",
      ),
      r(
        "8.2",
        "Alles andere wird nicht ersetzt, etwa Verluste in Farmwelten, durch PvP, durch Getrustete oder durch Lava, Void, Despawn und volles Inventar. Ausnahmen sind reine Kulanz.",
        "Anything else is not replaced, such as losses in farm worlds, through PvP, through trusted players or to lava, the void, despawning and a full inventory. Exceptions are a goodwill gesture only.",
      ),
    ]),
    chatParagraph("9"),
    p("10", "gavel", "Support & Strafen", "Support & penalties", [
      ...penaltyItems("10"),
      r(
        "10.5",
        "Verstöße gegen §1 (verbotene Mods), §5.1 (PvP außerhalb der Farmwelten, auch erzwungen oder vorgetäuscht) und §3.2 (Griefing auf Claims) werden auf WildSMP besonders streng bestraft.",
        "Breaches of §1 (forbidden mods), §5.1 (PvP outside the farm worlds, including forced or faked) and §3.2 (griefing claims) are punished especially harshly on WildSMP.",
      ),
      r(
        "10.6",
        "Zusätzlich möglich sind der Entzug von Items und Geld, der Rückbau von Bauten, das Entfernen von Claims und eine Ersatzpflicht gegenüber dem Geschädigten.",
        "Additional measures include taking away items and money, removing builds, deleting claims and an obligation to compensate the injured party.",
      ),
    ]),
  ],
};
