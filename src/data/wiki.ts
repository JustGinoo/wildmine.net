import { extraWikiEntries } from "./wiki-extra";
import { f, wikiCategoryLabels, type WikiEntry } from "./wiki-types";

export { wikiCategoryLabels };
export type { WikiCategory, WikiEntry, WikiFact } from "./wiki-types";

const entries: WikiEntry[] = [
  // ---------------------------------------------------------------- network
  {
    id: "discord-link",
    icon: "link",
    category: "core",
    title: { de: "Discord-Linking", en: "Discord linking" },
    summary: {
      de: "Minecraft-Account mit Discord verknüpfen und Rollen freischalten.",
      en: "Link your Minecraft account to Discord and unlock roles.",
    },
    body: {
      de: "Mit /link bekommst du im Spiel einen Code, den du im Discord mit /verify einlöst. Danach folgen deine Discord-Rollen automatisch deinem Ingame-Rang. Umgekehrt geht es auch: Code im Discord holen, im Spiel mit /discord link eingeben.",
      en: "Run /link in game for a code and redeem it on Discord with /verify. Your Discord roles then follow your in-game rank automatically. It works the other way round too: grab a code on Discord and enter it in game with /discord link.",
    },
    facts: [
      f("Code-Cooldown", "Code cooldown", "30 Sekunden", "30 seconds"),
      f("Rollen-Sync", "Role sync", "Automatisch bei Rangänderung", "Automatic on rank change"),
      f("Nickname", "Nickname", "Wird auf den MC-Namen gesetzt", "Set to your MC name"),
      f("Nötig für", "Required for", "Tickets, Giveaways, Extra-Kanäle", "Tickets, giveaways, extra channels"),
    ],
    commands: ["/link", "/discord link", "/verify"],
  },
  {
    id: "voicechat",
    icon: "headphones",
    category: "core",
    title: { de: "VoiceChat", en: "Voice chat" },
    summary: {
      de: "Proximity-Voice im Spiel — je näher, desto lauter.",
      en: "In-game proximity voice — the closer, the louder.",
    },
    body: {
      de: "Installiere die Simple-Voice-Chat-Mod, betritt den Server und drück die Sprechtaste. Für Gespräche über Distanz erstellst du eine Gruppe. Ohne Mod spielst du normal weiter, hörst und sprichst aber nicht.",
      en: "Install the Simple Voice Chat mod, join the server and press the talk key. For conversations across distance you create a group. Without the mod you play normally, you just cannot hear or speak.",
    },
    facts: [
      f("Hörweite", "Hearing range", "48 Blöcke", "48 blocks"),
      f("Flüstern", "Whisper", "8 Blöcke", "8 blocks"),
      f("Gruppen", "Groups", "Erlaubt", "Allowed"),
      f("Aufnahme im Client", "Client recording", "Deaktiviert", "Disabled"),
      f("Zuschauer", "Spectators", "Können nicht mitreden", "Cannot talk"),
      f("Pflicht", "Mandatory", "Nein, rein optional", "No, entirely optional"),
    ],
  },
  {
    id: "voting",
    icon: "vote",
    category: "core",
    title: { de: "Voting", en: "Voting" },
    summary: {
      de: "Täglich voten, sofort Belohnung — und die VoteParty rückt näher.",
      en: "Vote daily for an instant reward — and the vote party gets closer.",
    },
    body: {
      de: "Mit /vote siehst du alle Vote-Seiten. Jede lässt sich einmal pro Tag nutzen, die Belohnung kommt sofort. Warst du offline, wird sie beim nächsten Login nachgeholt. Voten über Zweitaccounts ist verboten.",
      en: "/vote lists every voting site. Each can be used once per day and the reward arrives instantly. If you were offline it is handed out on your next login. Voting on alt accounts is forbidden.",
    },
    facts: [
      f("Pro Vote", "Per vote", "1.000 Münzen · 1 Frost-Key · 10 min Flugzeit", "1,000 coins · 1 frost key · 10 min fly time"),
      f("Nachholen", "Catch-up", "Automatisch beim Login", "Automatic on login"),
      f("Erinnerung", "Reminder", "Alle 45 min, bis du gevotet hast", "Every 45 min until you have voted"),
      f("Bestenliste", "Leaderboard", "Top 10, alle 30 min aktualisiert", "Top 10, refreshed every 30 min"),
    ],
    commands: ["/vote", "/vote top"],
  },
  {
    id: "bedrock",
    icon: "phone",
    category: "core",
    title: { de: "Bedrock-Support", en: "Bedrock support" },
    summary: {
      de: "Von Handy, Tablet oder Konsole mitspielen — Crossplay inklusive.",
      en: "Play from phone, tablet or console — crossplay included.",
    },
    body: {
      de: "Bedrock-Spieler landen auf denselben Servern wie alle anderen: gleiche Welten, gleicher Chat, gleiche Wirtschaft. Menüs sind für Touch angepasst. Dein Fortschritt hängt am Account, nicht an der Plattform.",
      en: "Bedrock players land on the same servers as everyone else: same worlds, same chat, same economy. Menus are adapted for touch. Your progress is tied to your account, not the platform.",
    },
    facts: [
      f("Adresse", "Address", "bedrock.wildmine.net", "bedrock.wildmine.net"),
      f("Port", "Port", "19132", "19132"),
      f("Java-Adresse", "Java address", "wildmine.net", "wildmine.net"),
    ],
  },
  {
    id: "chat",
    icon: "messages",
    category: "core",
    title: { de: "Chat & Nachrichten", en: "Chat & messages" },
    summary: {
      de: "Rangfarben, Filter, Privatnachrichten und Item-Vorschau.",
      en: "Rank colours, filters, private messages and item previews.",
    },
    body: {
      de: "Dein Rang bestimmt Präfix und Farbe, dazu kommt dein Tag. Ein Filter fängt Werbung, Caps-Spam, Flooding und Schimpfwörter ab. Mit /preview zeigst du ein Item oder ein ganzes Inventar klickbar im Chat.",
      en: "Your rank sets prefix and colour, joined by your tag. A filter catches advertising, caps spam, flooding and swearing. /preview shows an item or a whole inventory as a clickable preview in chat.",
    },
    facts: [
      f("Sprachen", "Languages", "Deutsch & Englisch", "German & English"),
      f("Filter", "Filter", "Werbung, Caps, Spam, Schimpfwörter", "Ads, caps, spam, swearing"),
      f("Gilt auch für", "Also covers", "Itemnamen, Schilder, Bücher, Warp-Namen", "Item names, signs, books, warp names"),
      f("Abschaltbar", "Can be muted", "Globalchat & PN in /settings", "Global chat & DMs in /settings"),
    ],
    commands: ["/msg", "/r", "/ignore", "/preview"],
  },
  {
    id: "settings",
    icon: "cog",
    category: "core",
    title: { de: "Einstellungen", en: "Settings" },
    summary: {
      de: "Scoreboard, Chat, Nachrichten und Anfragen nach deinem Geschmack.",
      en: "Scoreboard, chat, messages and requests to your taste.",
    },
    body: {
      de: "In /settings stellst du ein, was du sehen und empfangen willst. Alles wird pro Spieler gespeichert und gilt nach dem nächsten Login weiter.",
      en: "In /settings you decide what you see and receive. Everything is stored per player and still applies after your next login.",
    },
    facts: [
      f("Scoreboard", "Scoreboard", "An / Aus", "On / off"),
      f("Globaler Chat", "Global chat", "An / Aus", "On / off"),
      f("Privatnachrichten", "Private messages", "An / Aus", "On / off"),
      f("TPA-Anfragen", "TPA requests", "Annehmen / Sperren / Automatisch", "Accept / block / automatic"),
      f("Coinflip-Ansagen", "Coinflip broadcasts", "An / Aus", "On / off"),
      f("Standard", "Default", "Alles an, außer TPA-Automatik", "All on except TPA auto"),
    ],
    commands: ["/settings"],
  },
  {
    id: "inventory-restore",
    icon: "repeat",
    category: "core",
    title: { de: "Inventar-Sicherung", en: "Inventory backups" },
    summary: {
      de: "Automatische Sicherungen deines Inventars, zwei Wochen lang.",
      en: "Automatic snapshots of your inventory, kept two weeks.",
    },
    body: {
      de: "Bei einem nachweisbaren Serverfehler kann das Team damit genau den Stand von vorher wiederherstellen. Kein Freibrief: Verluste durch eigene Unachtsamkeit, Lava, Void oder einen verlorenen Kampf werden nicht zurückgeholt.",
      en: "If a provable server fault costs you something, the team can restore exactly the state from before. Not a free pass: losses from your own carelessness, lava, the void or a lost fight are not brought back.",
    },
    facts: [
      f("Aufbewahrung", "Retention", "14 Tage", "14 days"),
      f("Automatisch", "Automatic", "Alle 5 Minuten", "Every 5 minutes"),
      f("Auslöser", "Triggers", "Tod, Join, Quit, Weltwechsel, Spielmoduswechsel", "Death, join, quit, world change, gamemode change"),
      f("Enderchest", "Ender chest", "Wird mitgesichert", "Included"),
    ],
  },
  {
    id: "anti-afk",
    icon: "bell",
    category: "core",
    title: { de: "AFK-Erkennung", en: "AFK detection" },
    summary: {
      de: "Wer wirklich weg ist, wird als AFK erkannt — und geschützt.",
      en: "Genuinely away players are marked AFK — and protected.",
    },
    body: {
      de: "Bewegst du dich eine Weile nicht, wirst du als AFK markiert und siehst das an Titel und leichter Abdunklung. Solange du AFK bist, kannst du weder Schaden nehmen noch austeilen. Eine Bewegung reicht, um sofort wieder aktiv zu sein.",
      en: "If you do not move for a while you are marked AFK and see it via a title and a slight dimming. While AFK you can neither take nor deal damage. A single movement makes you active again instantly.",
    },
    facts: [
      f("AFK nach", "AFK after", "10 Minuten", "10 minutes"),
      f("Im Wasserbecken", "In a water pool", "60 Sekunden", "60 seconds"),
      f("Während AFK", "While AFK", "Kein Schaden, Spielzeit pausiert", "No damage, playtime paused"),
      f("Umgehen", "Circumventing", "Verboten (Makros, Wasser, Autoklicker)", "Forbidden (macros, water, auto-clickers)"),
    ],
  },
  {
    id: "voteparty",
    icon: "party",
    category: "core",
    title: { de: "VoteParty", en: "Vote party" },
    summary: {
      de: "Genug Votes gesammelt? Dann regnet es Belohnungen.",
      en: "Enough votes collected? Then it rains rewards.",
    },
    body: {
      de: "Nach dem Countdown regnen leuchtende Belohnungen herunter, die du im Flug treffen musst. Deine Drops sieht nur du — niemand kann dir etwas wegschnappen. Der Super-Meteor ist die Ausnahme: für alle sichtbar, für den, der zuerst da ist.",
      en: "After the countdown glowing rewards rain down and you have to hit them mid-air. Only you see your own drops — nobody can snatch anything. The super meteor is the exception: visible to everyone, for whoever gets there first.",
    },
    facts: [
      f("Votes nötig", "Votes needed", "30", "30"),
      f("Countdown", "Countdown", "10 Sekunden", "10 seconds"),
      f("Dauer", "Duration", "90 Sekunden", "90 seconds"),
      f("Drops", "Drops", "10 zum Start, dann 5 alle 3 s", "10 at the start, then 5 every 3 s"),
      f("Jackpot-Chance", "Jackpot chance", "15 % pro Drop", "15 % per drop"),
      f("Super-Meteor", "Super meteor", "7,5 % pro Sekunde, frühestens alle 15 s", "7.5 % per second, at most every 15 s"),
      f("Im Radius", "Inside the radius", "Speed III, keine Elytra", "Speed III, no elytra"),
      f("Größen-Perks", "Size perks", "Werden im Radius neutralisiert", "Neutralised inside the radius"),
      f("Meteor einsammeln", "Collecting the meteor", "Erst nah am Boden", "Only close to the ground"),
      f("Finale", "Finale", "50 Feuerwerke", "50 fireworks"),
    ],
    commands: ["/warp voteparty"],
  },

  // ------------------------------------------------------------ world/travel
  {
    id: "claims",
    icon: "mapPin",
    category: "world",
    title: { de: "Claim-System", en: "Claim system" },
    summary: {
      de: "Schütze dein Grundstück vor Griefing und Diebstahl.",
      en: "Protect your plot from griefing and theft.",
    },
    body: {
      de: "Mit der Claim-Schaufel markierst du dein Gebiet und legst fest, wer bauen, Kisten öffnen oder Tiere füttern darf. Über Flags regelst du Feuer, TNT und Flüssigkeiten. Zusätzliche Claim-Blöcke kaufst du im Menü, überschüssige verkaufst du zurück.",
      en: "Mark out your area with the claim shovel and decide who may build, open chests or feed animals. Flags control fire, TNT and fluids. Buy extra claim blocks in the menu and sell spare ones back.",
    },
    facts: [
      f("Startguthaben", "Starting blocks", "1.000 Blöcke", "1,000 blocks"),
      f("Mindestgröße", "Minimum size", "5 × 5 Blöcke", "5 × 5 blocks"),
      f("Schaufel-Reichweite", "Shovel range", "100 Blöcke", "100 blocks"),
      f("Blöcke kaufen", "Buying blocks", "25 Münzen pro Block", "25 coins per block"),
      f("Blöcke verkaufen", "Selling blocks", "5 Münzen pro Block", "5 coins per block"),
      f("Welten", "Worlds", "Bauwelt Oberwelt & Nether", "Build world overworld & nether"),
      f("Immer nutzbar", "Always usable", "Werkbank, Amboss, Enderchest u. a.", "Crafting table, anvil, ender chest and more"),
      f("Grenzanzeige", "Border display", "10 s sichtbar, Farbe je nach Recht", "Visible 10 s, colour by permission"),
      f("Schaufel-Cooldown", "Shovel cooldown", "5 Minuten", "5 minutes"),
    ],
    commands: ["/claim", "/gs"],
  },
  {
    id: "homes",
    icon: "house",
    category: "world",
    title: { de: "Homes", en: "Homes" },
    summary: {
      de: "Eigene Teleportpunkte, jederzeit anspringbar.",
      en: "Your own teleport points, reachable any time.",
    },
    body: {
      de: "Mit /sethome legst du einen Punkt an, mit /home kommst du zurück. Ohne Namen öffnet /home ein Menü mit allen Punkten, wo du sie auch umbenennen kannst. Auf fremdem Grundstück brauchst du die Erlaubnis des Besitzers.",
      en: "/sethome creates a point and /home takes you back. Without a name /home opens a menu with all your points where you can also rename them. On someone else's plot you need the owner's permission.",
    },
    facts: [
      f("Anzahl", "Amount", "Je nach Rang gestaffelt", "Graded by rank"),
      f("Teleport-Countdown", "Teleport countdown", "3 Sekunden", "3 seconds"),
      f("Bewegung", "Movement", "Bricht den Teleport ab", "Cancels the teleport"),
      f("Im Kampf", "In combat", "Gesperrt", "Blocked"),
    ],
    commands: ["/home", "/sethome", "/delhome", "/homes"],
  },
  {
    id: "tpa",
    icon: "send",
    category: "world",
    title: { de: "TPA-Commands", en: "TPA commands" },
    summary: {
      de: "Zu Freunden teleportieren — oder sie zu dir holen.",
      en: "Teleport to friends — or bring them to you.",
    },
    body: {
      de: "/tpa <Spieler> fragt an, dich zu teleportieren, /tpahere holt jemanden zu dir. Die Gegenseite nimmt mit /tpaccept an oder lehnt mit /tpdeny ab. Auf WildAttack ist TPA begrenzt: eine Nutzung pro Tag mit Premium-Rang, dazu eine pro Tag fürs Voten.",
      en: "/tpa <player> asks to teleport to someone, /tpahere brings them to you. The other side accepts with /tpaccept or declines with /tpdeny. On WildAttack TPA is rationed: one use a day with the premium rank, plus one a day for voting.",
    },
    facts: [
      f("Teleport-Countdown", "Teleport countdown", "3 Sekunden", "3 seconds"),
      f("Anfragen sperren", "Block requests", "/tpa toggle", "/tpa toggle"),
      f("Automatisch annehmen", "Auto accept", "/tpa auto", "/tpa auto"),
      f("Im Kampf", "In combat", "Gesperrt", "Blocked"),
    ],
    commands: ["/tpa", "/tpahere", "/tpaccept", "/tpdeny"],
  },
  {
    id: "spawn",
    icon: "compass",
    category: "world",
    title: { de: "Spawn", en: "Spawn" },
    summary: {
      de: "Der schnellste Weg zurück ins Zentrum.",
      en: "The fastest way back to the centre.",
    },
    body: {
      de: "Am Spawn findest du Shops, Auktionshaus, NPCs, Warps und den Einstieg in die Farmwelten gebündelt. Die Zone ist geschützt — hier kann dir niemand etwas nehmen oder Schaden zufügen.",
      en: "Spawn gathers shops, the auction house, NPCs, warps and the entrance to the farm worlds. The zone is protected — nobody can take anything from you or hurt you there.",
    },
    facts: [
      f("Teleport-Countdown", "Teleport countdown", "3 Sekunden", "3 seconds"),
      f("Schutz", "Protection", "Kein PvP, kein Schaden", "No PvP, no damage"),
      f("Extras", "Extras", "Doppelsprung, kein Hunger, Parkour", "Double jump, no hunger, parkour"),
      f("Flugzeit", "Fly time", "In der Spawnwelt gesperrt", "Blocked in the spawn world"),
    ],
    commands: ["/spawn"],
  },
  {
    id: "rtp",
    icon: "wind",
    category: "world",
    title: { de: "Random-Teleport (RTP)", en: "Random teleport (RTP)" },
    summary: {
      de: "Ein Menü, vier Welten, ein zufälliger sicherer Ort.",
      en: "One menu, four worlds, one random safe spot.",
    },
    body: {
      de: "/rtp öffnet ein Menü, in dem du zwischen Bauwelten und Farmwelten umschaltest und dann die Welt wählst. Du landest an einer zufälligen, sicheren Stelle innerhalb des jeweiligen Radius — weit weg von Spawn und fremden Claims.",
      en: "/rtp opens a menu where you switch between build worlds and farm worlds and then pick the world. You land at a random, safe spot inside that world's radius — far from spawn and other people's claims.",
    },
    facts: [
      f("Bauwelt Oberwelt", "Build world overworld", "100 – 15.900 Blöcke", "100 – 15,900 blocks"),
      f("Bauwelt Nether", "Build world nether", "100 – 2.400 Blöcke", "100 – 2,400 blocks"),
      f("Farmwelt Oberwelt", "Farm world overworld", "100 – 9.900 Blöcke", "100 – 9,900 blocks"),
      f("Farmwelt Nether", "Farm world nether", "100 – 4.900 Blöcke", "100 – 4,900 blocks"),
      f("Bauen erlaubt", "Building allowed", "Nur in den Bauwelten", "Build worlds only"),
      f("Countdown", "Countdown", "3 Sekunden", "3 seconds"),
      f("Cooldown", "Cooldown", "30 Sekunden", "30 seconds"),
    ],
    commands: ["/rtp"],
  },
  {
    id: "warps",
    icon: "footprints",
    category: "world",
    title: { de: "Server-Warps", en: "Server warps" },
    summary: {
      de: "Feste Anlaufstellen, die das Team eingerichtet hat.",
      en: "Fixed destinations set up by the team.",
    },
    body: {
      de: "/warp bringt dich zu den offiziellen Orten: Handelszone, Farmwelten, Event-Arena, VoteParty-Platz. Welche es gerade gibt, schlägt dir die Tab-Vervollständigung vor.",
      en: "/warp takes you to the official places: trading area, farm worlds, event arena, vote party grounds. Tab completion suggests what currently exists.",
    },
    facts: [
      f("Auswahl", "Selection", "Per Tab-Vervollständigung", "Via tab completion"),
      f("Countdown", "Countdown", "3 Sekunden", "3 seconds"),
      f("Im Kampf", "In combat", "Gesperrt", "Blocked"),
    ],
    commands: ["/warp"],
  },
  {
    id: "playerwarps",
    icon: "map",
    category: "world",
    title: { de: "Player-Warps", en: "Player warps" },
    summary: {
      de: "Mach deinen Shop oder dein Bauwerk für alle erreichbar.",
      en: "Make your shop or build reachable for everyone.",
    },
    body: {
      de: "Mit /pw set <name> machst du deinen Ort öffentlich anspringbar. Im Menü stöbern alle durch die Warps. Du kannst ein Icon aus deiner Hand setzen, eine Beschreibung schreiben, sperren, eine Whitelist führen, Spieler bannen und eine Gebühr verlangen, die an dich geht.",
      en: "/pw set <name> makes your spot publicly reachable. Everyone browses the warps in the menu. You can set an icon from your hand, write a description, lock it, keep a whitelist, ban players and charge a fee that goes to you.",
    },
    facts: [
      f("Name", "Name", "2 – 16 Zeichen", "2 – 16 characters"),
      f("Beschreibung", "Description", "Bis 75 Zeichen", "Up to 75 characters"),
      f("Maximale Gebühr", "Maximum fee", "500 Münzen", "500 coins"),
      f("Gebühr geht an", "Fee goes to", "Den Besitzer des Warps", "The warp owner"),
      f("Wartezeit", "Wait time", "3 Sekunden stillstehen", "Stand still for 3 seconds"),
      f("Sortierung", "Sorting", "Neueste zuerst, umschaltbar", "Newest first, switchable"),
      f("Kategorien", "Categories", "Bis zu 2 pro Warp", "Up to 2 per warp"),
      f("Gesperrte Welten", "Blocked worlds", "Spawn und alle Farmwelten", "Spawn and every farm world"),
      f("Löschen", "Deleting", "Mit Rückfrage, Gebühr wird erstattet", "With a confirmation, fee refunded"),
    ],
    commands: ["/pw", "/pw set", "/pw icon", "/pw cost"],
  },
  {
    id: "pvp-toggle",
    icon: "swords",
    category: "world",
    title: { de: "PvP-Schalter", en: "PvP toggle" },
    summary: {
      de: "PvP ist aus, bis du es für dich selbst einschaltest.",
      en: "PvP is off until you switch it on for yourself.",
    },
    body: {
      de: "Mit /pvp stellst du für dich um. Schaden zwischen zwei Spielern entsteht nur, wenn beide es anhaben. Nach jedem Umschalten läuft ein Cooldown, erst danach kannst du wieder wechseln.",
      en: "/pvp switches it for you. Damage between two players only happens when both have it on. Each switch starts a cooldown before you can change it again.",
    },
    facts: [
      f("Standard", "Default", "Aus", "Off"),
      f("Umschalten", "Switch", "/pvp", "/pvp"),
      f("Cooldown", "Cooldown", "12 Stunden", "12 hours"),
      f("Schaden", "Damage", "Nur wenn beide an haben", "Only when both have it on"),
    ],
    commands: ["/pvp"],
  },
  {
    id: "spawn-elytra",
    icon: "feather",
    category: "world",
    title: { de: "Spawn-Elytra", en: "Spawn elytra" },
    summary: {
      de: "Am Spawn abheben und über das Gelände gleiten.",
      en: "Take off at spawn and glide across the area.",
    },
    body: {
      de: "Im Spawnbereich bekommst du automatisch eine Leih-Elytra, mit der du losfliegen kannst — ohne eigene im Inventar. Beim Verlassen des Bereichs verschwindet sie wieder.",
      en: "In the spawn area you are automatically lent an elytra to take off with — no need for one of your own. It disappears again when you leave the area.",
    },
    facts: [
      f("Gilt in", "Applies in", "Nur im Spawnbereich", "Spawn area only"),
      f("Eigenes Inventar", "Your inventory", "Bleibt unberührt", "Left untouched"),
      f("Kosten", "Cost", "Keine", "None"),
    ],
  },
  {
    id: "storage",
    icon: "backpack",
    category: "world",
    title: { de: "Zwischenspeicher", en: "Overflow storage" },
    summary: {
      de: "Volles Inventar? Belohnungen gehen trotzdem nicht verloren.",
      en: "Inventory full? Rewards still do not get lost.",
    },
    body: {
      de: "Bekommst du eine Belohnung bei vollem Inventar, landet sie im Zwischenspeicher statt auf dem Boden. Mit /storage holst du sie später ab.",
      en: "If you receive a reward while your inventory is full, it goes into your overflow storage instead of onto the ground. Collect it later with /storage.",
    },
    facts: [
      f("Greift bei", "Applies to", "Crates, Quests, Skills, VoteParty", "Crates, quests, skills, vote party"),
      f("Selbst fallengelassen", "Dropped yourself", "Kein Ersatz", "Not replaced"),
    ],
    commands: ["/storage"],
  },
  {
    id: "virtual-workbenches",
    icon: "anvil",
    category: "world",
    title: { de: "Virtuelle Werkbänke", en: "Virtual workstations" },
    summary: {
      de: "Amboss, Werkbank und Co. überall — ohne einen Block zu setzen.",
      en: "Anvil, crafting table and friends anywhere — no block needed.",
    },
    body: {
      de: "Du brauchst unterwegs keine Blöcke mehr mitzuschleppen. Welche Befehle du nutzen darfst, hängt teilweise vom Rang ab. Auf WildAttack fehlen /loom, /repair, /trash und /enchanter.",
      en: "You no longer need to haul blocks around. Which commands you may use partly depends on your rank. On WildAttack /loom, /repair, /trash and /enchanter do not exist.",
    },
    facts: [
      f("Handwerk", "Crafting", "/craft · /anvil · /smithing", "/craft · /anvil · /smithing"),
      f("Verzaubern", "Enchanting", "/enchanter · /grindstone", "/enchanter · /grindstone"),
      f("Bauen", "Building", "/loom · /stonecutter", "/loom · /stonecutter"),
      f("Lagern", "Storage", "/enderchest · /trash", "/enderchest · /trash"),
      f("Sonstiges", "Other", "/hat · /repair · /rename", "/hat · /repair · /rename"),
    ],
    commands: ["/craft", "/anvil", "/enderchest"],
  },
  {
    id: "flytime",
    icon: "timer",
    category: "world",
    title: { de: "Flugzeit", en: "Fly time" },
    summary: {
      de: "Fliegen auf Guthaben — sekundengenau abgerechnet.",
      en: "Flying on credit — billed to the second.",
    },
    body: {
      de: "Mit /fly schaltest du das Fliegen an und aus, das Guthaben läuft nur währenddessen. Nachschub gibt es durchs Voten, aus Crates, im Kristall-Shop und bei der VoteParty.",
      en: "/fly toggles flying on and off and the balance only ticks while it is on. You top it up by voting, from crates, in the crystal shop and at the vote party.",
    },
    facts: [
      f("Startguthaben", "Starting balance", "10 Minuten", "10 minutes"),
      f("Abrechnung", "Billing", "Sekundengenau, nur wenn aktiv", "To the second, only while active"),
      f("Pro Vote", "Per vote", "+10 Minuten", "+10 minutes"),
      f("Gesperrte Welten", "Blocked worlds", "Spawn und alle Farmwelten", "Spawn and every farm world"),
      f("In den Bauwelten", "In the build worlds", "Kein Fallschaden während des Flugs", "No fall damage while flying"),
      f("Nach Zwangs-Aus", "After a forced stop", "15 s Fallschutz", "15 s fall protection"),
      f("Höhere Ränge", "Higher ranks", "Unbegrenzt", "Unlimited"),
    ],
    commands: ["/fly", "/flytime"],
  },

  // ---------------------------------------------------------------- basics
  {
    id: "getting-started",
    icon: "rocket",
    category: "basics",
    title: { de: "Erste Schritte", en: "Getting started" },
    summary: {
      de: "Verbinden, Modus wählen, loslegen.",
      en: "Connect, pick a mode, get going.",
    },
    body: {
      de: "Du landest zuerst in der Lobby und wählst dort deinen Spielmodus. Danach: Land suchen mit /rtp, Grundstück sichern mit /claim, Home setzen mit /sethome.",
      en: "You start in the lobby and pick your game mode there. Then: find land with /rtp, secure a plot with /claim, set a home with /sethome.",
    },
    facts: [
      f("Java", "Java", "wildmine.net", "wildmine.net"),
      f("Bedrock", "Bedrock", "bedrock.wildmine.net : 19132", "bedrock.wildmine.net : 19132"),
      f("Starterkit", "Starter kit", "Eisen-Set, Lederrüstung, 32 Brot, Claim-Schaufel", "Iron set, leather armour, 32 bread, claim shovel"),
      f("Erstbetritt", "First join", "Zusätzlich 10 Kristalle", "Plus 10 crystals"),
      f("Begrüßen lohnt sich", "Greeting pays", "30 s Zeit für eine Belohnung", "30 s window for a reward"),
    ],
    commands: ["/settings", "/rtp", "/claim", "/sethome"],
  },
  {
    id: "economy-basics",
    icon: "coins",
    category: "basics",
    title: { de: "Wirtschaft & Münzen", en: "Economy & coins" },
    summary: {
      de: "Wie du Geld verdienst und wofür du es ausgibst.",
      en: "How you earn money and what you spend it on.",
    },
    body: {
      de: "Münzen verdienst du durch Verkaufen, eigene ChestShops, das Auktionshaus und Belohnungen. Kristalle sind die zweite Währung für Booster, Keys und Kosmetik. Größere Deals laufen sicher über /trade.",
      en: "You earn coins by selling, running chest shops, using the auction house and collecting rewards. Crystals are the second currency for boosters, keys and cosmetics. Larger deals run safely through /trade.",
    },
    facts: [
      f("Währungen", "Currencies", "Münzen & Kristalle", "Coins & crystals"),
      f("Preise am Markt", "Market prices", "Von Spielern bestimmt", "Set by players"),
      f("Geldsenken", "Money sinks", "Schwarzmarkt, Perks, Claim-Blöcke", "Black market, perks, claim blocks"),
    ],
    commands: ["/coins", "/crystals", "/worth", "/trade"],
  },
  {
    id: "rewards",
    icon: "gift",
    category: "basics",
    title: { de: "Login- & Spielzeit-Belohnungen", en: "Login & playtime rewards" },
    summary: {
      de: "Fürs Dabeisein belohnt — täglich und nach gespielten Stunden.",
      en: "Rewarded for showing up — daily and by hours played.",
    },
    body: {
      de: "Der tägliche Login-Bonus wird mit jedem Tag in Folge wertvoller, eine unterbrochene Serie fängt von vorn an. Spielzeit-Belohnungen hängen an erreichten Stunden und gelten dauerhaft — die musst du nicht am Stück spielen.",
      en: "The daily login bonus gets better the longer your streak runs, and a broken streak starts over. Playtime rewards are tied to hours reached and stick permanently — you do not have to play them in one sitting.",
    },
    facts: [
      f("Login-Serie", "Login streak", "Bis Tag 63", "Up to day 63"),
      f("Login Tag 1", "Login day 1", "100 Münzen + 8 XP", "100 coins + 8 XP"),
      f("Spielzeit-Stufen", "Playtime tiers", "168 Stufen ab 1 Stunde", "168 tiers from 1 hour"),
      f("Spielzeit Stufe 1", "Playtime tier 1", "100 Münzen + 25 XP", "100 coins + 25 XP"),
      f("Extras", "Extras", "Kristalle und Crate-Keys ab Stufe 3", "Crystals and crate keys from tier 3"),
    ],
    commands: ["/rewards", "/playtime"],
  },
  {
    id: "quests",
    icon: "scroll",
    category: "basics",
    title: { de: "Quests", en: "Quests" },
    summary: {
      de: "Aufgaben in drei Schwierigkeiten mit gewürfelter Belohnung.",
      en: "Tasks in three difficulties with a rolled reward.",
    },
    body: {
      de: "Quests geben dir konkrete Aufgaben — abbauen, herstellen, erkunden, besiegen. Die Schwierigkeit wird ausgewürfelt und bestimmt die Belohnungsspanne. Deinen Fortschritt siehst du live unter /quests.",
      en: "Quests give you concrete tasks — mine, craft, explore, defeat. The difficulty is rolled and sets the reward range. Track your progress live under /quests.",
    },
    facts: [
      f("Einfach", "Easy", "50 % · 250 – 1.000 Münzen", "50 % · 250 – 1,000 coins"),
      f("Mittel", "Medium", "40 % · 1.000 – 1.500 Münzen · 5 – 25 Kristalle", "40 % · 1,000 – 1,500 coins · 5 – 25 crystals"),
      f("Schwer", "Hard", "10 % · 1.500 – 2.500 Münzen · 25 – 150 Kristalle", "10 % · 1,500 – 2,500 coins · 25 – 150 crystals"),
      f("Key-Chance", "Key chance", "20 % einfach · 45 % mittel · 75 % schwer", "20 % easy · 45 % medium · 75 % hard"),
    ],
    commands: ["/quests"],
  },
  {
    id: "skills",
    icon: "trophy",
    category: "basics",
    title: { de: "Skills", en: "Skills" },
    summary: {
      de: "Zehn Skills, die beim normalen Spielen von selbst leveln.",
      en: "Ten skills that level themselves as you play.",
    },
    body: {
      de: "Bergbau, Holzfällen, Landwirtschaft, Angeln, Töten, Bauen, Schmelzen, Erkunden, Verzaubern und Züchten steigen automatisch. Perk-Punkte fließen in dauerhafte Attribute. Je zwei Skills bilden ein Synergie-Paar und boosten sich gegenseitig.",
      en: "Mining, woodcutting, farming, fishing, combat, building, smelting, exploring, enchanting and breeding rise automatically. Perk points go into permanent attributes. Every two skills form a synergy pair that boosts each other.",
    },
    facts: [
      f("Skills", "Skills", "10", "10"),
      f("Maximallevel", "Max level", "200 je Skill", "200 per skill"),
      f("Jedes Level", "Every level", "Geld (Basis 10 + 2 × Level)", "Money (base 10 + 2 × level)"),
      f("Alle 3 Level", "Every 3 levels", "1 Perk-Punkt", "1 perk point"),
      f("Alle 5 Level", "Every 5 levels", "Bonusgeld (Basis 100 + 5 × Level)", "Bonus money (base 100 + 5 × level)"),
      f("Alle 10 Level", "Every 10 levels", "50 Kristalle", "50 crystals"),
      f("Alle 20 Level", "Every 20 levels", "1 Crate-Key", "1 crate key"),
      f("Meilensteine", "Milestones", "Level 50 · 100 · 150 · 200", "Level 50 · 100 · 150 · 200"),
      f("Attribut-Perks", "Attribute perks", "Schaden, Angriffstempo, Abbautempo, Lauftempo, +5 Herzen", "Damage, attack speed, mining speed, movement, +5 hearts"),
    ],
    commands: ["/skills", "/skills top"],
  },
  {
    id: "lobby-games",
    icon: "blocks",
    category: "basics",
    title: { de: "Lobby-Minispiele", en: "Lobby minigames" },
    summary: {
      de: "Cookie Clicker, Farming Simulator und ein Parkour zum Warten.",
      en: "Cookie clicker, farming simulator and a parkour to pass the time.",
    },
    body: {
      de: "Am Cookie Clicker klickst du dich hoch, kaufst Upgrades und triffst auf Zufalls-Events. Der Farming Simulator funktioniert genauso, nur mit Weizen. Dazu ein prozedural erzeugter Parkour mit Fortschrittsanzeige.",
      en: "At the cookie clicker you click your way up, buy upgrades and run into random events. The farming simulator works the same way, only with wheat. Plus a procedurally generated parkour with a progress bar.",
    },
    facts: [
      f("Event-Chance", "Event chance", "0,5 % pro Klick", "0.5 % per click"),
      f("Event-Pause", "Event cooldown", "2 Minuten", "2 minutes"),
      f("Multiplikator", "Multiplier", "2× für 15 Sekunden", "2× for 15 seconds"),
      f("Cookie-Regen", "Cookie rain", "15 Drops, nur für dich sichtbar", "15 drops, visible only to you"),
      f("Goldener Cookie", "Golden cookie", "25 Treffer in 10 Sekunden", "25 hits in 10 seconds"),
      f("Klick-Limit", "Click limit", "10 pro Sekunde", "10 per second"),
      f("Weizen-Respawn", "Wheat respawn", "10 s, per Upgrade bis 1 s", "10 s, down to 1 s with upgrades"),
    ],
  },
  {
    id: "support",
    icon: "lifebuoy",
    category: "basics",
    title: { de: "Support & Tickets", en: "Support & tickets" },
    summary: {
      de: "Probleme, Meldungen und Entbannungsanträge laufen über Discord.",
      en: "Issues, reports and unban requests go through Discord.",
    },
    body: {
      de: "Öffne ein Ticket pro Anliegen, beschreib es vollständig und häng unbearbeitete Beweise an. Cheater und Bugs meldest du grundsätzlich nur im Ticket, nie öffentlich.",
      en: "Open one ticket per issue, describe it fully and attach unedited evidence. Always report cheaters and bugs in a ticket only, never publicly.",
    },
    facts: [
      f("Weg", "Route", "Ticketsystem im Discord", "Ticket system on Discord"),
      f("Nicht per", "Not via", "Direktnachricht ans Team", "DM to the team"),
      f("Beweise", "Evidence", "Unbearbeitet, im Original", "Unedited, original"),
    ],
  },
];

export const wikiEntries: Record<string, WikiEntry> = Object.fromEntries(
  [...entries, ...extraWikiEntries].map((entry) => [entry.id, entry]),
);

function resolve(ids: string[]): WikiEntry[] {
  return ids.map((id) => wikiEntries[id]).filter(Boolean);
}

/** Features that exist across the whole network — shown on the home page too. */
export const networkFeatureIds = [
  "discord-link",
  "voicechat",
  "voting",
  "bedrock",
] as const;

export const networkFeatures = resolve([...networkFeatureIds]);

/** Systems that exist on every mode, so every mode wiki repeats them. */
const sharedFeatureIds = [
  ...networkFeatureIds,
  "chat",
  "settings",
  "inventory-restore",
];

/**
 * Everything on the /wiki page. It has to cover every mode feature, because
 * that page filters by game mode — anything missing here would be invisible
 * when a mode is selected.
 */
export const wikiPageEntries = resolve([
  ...sharedFeatureIds,
  "anti-afk",
  "voteparty",
  "getting-started",
  "claims",
  "homes",
  "tpa",
  "spawn",
  "rtp",
  "warps",
  "playerwarps",
  "spawn-elytra",
  "pvp-toggle",
  "storage",
  "virtual-workbenches",
  "flytime",
  "economy-basics",
  "sell",
  "sellsticks",
  "sellchests",
  "auction-house",
  "chestshops",
  "adminshop",
  "trade",
  "coinflip",
  "crystals",
  "boosters",
  "afk-shards",
  "perks",
  "tags",
  "skills",
  "quests",
  "rewards",
  "custom-enchants",
  "spawners",
  "combat-tag",
  "chunk-limits",
  "itemfilter",
  "entitynet",
  "storage-blocks",
  "chunkhopper",
  "superhopper",
  "storage-sorter",
  "furnace-upgrades",
  "events",
  "texturepack",
  "lobby-games",
  "support",
]);

/**
 * Per-mode wiki. The network-wide features are repeated in every mode on
 * purpose — they apply there and players look for them on the mode page.
 *
 * WildCity is deliberately absent while it is still far out; its mode page
 * stays a short info page until there is something real to document.
 */
const modeWikiIds: Record<string, string[]> = {
  wildattack: [
    ...sharedFeatureIds,
    "claims",
    "pvp-toggle",
    "tpa",
    "spawn-elytra",
    "virtual-workbenches",
    "combat-tag",
  ],
  wildsmp: [
    ...sharedFeatureIds,
    "anti-afk",
    "claims",
    "homes",
    "tpa",
    "spawn",
    "rtp",
    "warps",
    "playerwarps",
    "storage",
    "virtual-workbenches",
    "flytime",
    "sell",
    "sellsticks",
    "sellchests",
    "auction-house",
    "chestshops",
    "adminshop",
    "trade",
    "coinflip",
    "crystals",
    "boosters",
    "afk-shards",
    "perks",
    "tags",
    "skills",
    "rewards",
    "quests",
    "custom-enchants",
    "spawners",
    "combat-tag",
    "chunk-limits",
    "itemfilter",
    "entitynet",
    "storage-blocks",
    "chunkhopper",
    "superhopper",
    "storage-sorter",
    "furnace-upgrades",
    "events",
    "texturepack",
    "voteparty",
  ],
  wildblock: [...sharedFeatureIds, "anti-afk"],
};

/** Empty for modes without a wiki yet, so the page can skip the section. */
export function getModeWiki(slug: string): WikiEntry[] {
  return resolve(modeWikiIds[slug] ?? []);
}

/**
 * Game modes a feature belongs to. Empty for systems that exist everywhere —
 * naming all four modes on those would be noise.
 */
export function getFeatureModes(id: string): string[] {
  if (sharedFeatureIds.includes(id)) return [];
  return Object.entries(modeWikiIds)
    .filter(([, ids]) => ids.includes(id))
    .map(([slug]) => slug);
}
