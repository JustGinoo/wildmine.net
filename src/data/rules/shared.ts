import { n, p, r, type RuleItem, type RuleParagraph } from "./types";

/**
 * Rules that hold on every Minecraft mode. There is no network-wide ruleset
 * any more, so each mode carries these itself; they live here once so the
 * wording cannot drift apart between modes.
 *
 * Everything takes the paragraph or rule number it lands on, because every
 * mode numbers its own paragraphs.
 */

type ModsOptions = {
  /** Allows the Legacy Freecam mod, whose camera cannot pass through blocks. */
  legacyFreecam?: boolean;
};

/** Rule number of the Legacy Freecam exception inside the mods paragraph. */
const legacyFreecamRef = (num: string) => `${num}.7`;

const freecamWord = (num: string, legacyFreecam?: boolean) =>
  legacyFreecam
    ? {
        de: `Freecam (außer Legacy Freecam, §${legacyFreecamRef(num)})`,
        en: `freecam (except Legacy Freecam, §${legacyFreecamRef(num)})`,
      }
    : { de: "Freecam", en: "freecam" };

/** The banner line about forbidden mods, for a mode's red notice. */
export const modsNotice = (num: string, { legacyFreecam }: ModsOptions = {}) => {
  const freecam = freecamWord(num, legacyFreecam);
  return {
    de: `Verboten sind X-Ray, ${freecam.de}, Autoklicker, Auto-Totem, Makros, SeedCracker, MouseWheelie und jeder Hacked Client – schon das Betreten des Servers damit ist ein Bann. Die vollständige Liste steht in §${num}.`,
    en: `X-ray, ${freecam.en}, auto-clickers, auto-totem, macros, SeedCracker, MouseWheelie and every hacked client are forbidden – simply joining with one is a ban. The full list is in §${num}.`,
  };
};

export const ignoranceRule = (ref: string) =>
  r(
    ref,
    "Unwissenheit schützt nicht vor Strafe. Im Zweifel fragst du vorher im Support nach.",
    "Not knowing a rule is no defence. When in doubt, ask support beforehand.",
  );

export const modsParagraph = (
  num: string,
  { legacyFreecam }: ModsOptions = {},
): RuleParagraph => {
  const freecam = freecamWord(num, legacyFreecam);
  return p(num, "ban", "Verbotene & erlaubte Mods", "Forbidden & allowed mods", [
    r(
      `${num}.1`,
      "Verboten ist jede Modifikation, die dir einen Vorteil gegenüber anderen verschafft oder die Kommunikation zwischen Client und Server verändert.",
      "Any modification that gives you an advantage over others or alters the communication between client and server is forbidden.",
    ),
    r(
      `${num}.2`,
      `Namentlich verboten sind X-Ray in jeder Form, ${freecam.de}, Autoklicker, Auto-Totem, Makros, SeedCracker, MouseWheelie und alle Hacked Clients.`,
      `Explicitly forbidden are x-ray in any form, ${freecam.en}, auto-clickers, auto-totem, macros, SeedCracker, MouseWheelie and every hacked client.`,
      n(
        "Ebenso Killaura, Reach, Fly, Speed, NoFall, Tracer/ESP, Auto-Mining, Auto-Place und Schematica-Printer.",
        "Likewise killaura, reach, fly, speed, nofall, tracers/ESP, auto-mining, auto-place and the Schematica printer.",
      ),
    ),
    r(
      `${num}.3`,
      "Erlaubt ist alles, was keinen unfairen Vorteil verschafft und die Server-Client-Kommunikation unverändert lässt.",
      "Anything that gives no unfair advantage and leaves server-client communication untouched is allowed.",
      n(
        "Darunter Performance-Mods wie Sodium und Lithium, kosmetische Mods und Minimaps inklusive Entity- und Höhlenradar.",
        "That includes performance mods such as Sodium and Lithium, cosmetic mods and minimaps including entity and cave radar.",
      ),
    ),
    r(
      `${num}.4`,
      "Litematica und vergleichbare Schematic-Mods sind erlaubt, solange du KEINEN Printer und kein Auto-Place nutzt.",
      "Litematica and comparable schematic mods are allowed as long as you use NO printer and no auto-place.",
    ),
    r(
      `${num}.5`,
      "Als Clients sind Vanilla, Fabric, Quilt, Lunar, Feather, LabyMod, NoRisk und Essential ausdrücklich in Ordnung.",
      "Vanilla, Fabric, Quilt, Lunar, Feather, LabyMod, NoRisk and Essential are explicitly fine as clients.",
    ),
    r(
      `${num}.6`,
      "Das bloße Betreten des Servers mit einer verbotenen Modifikation ist bereits ein Verstoß. Bei Verdacht darf das Team einen Nachweis verlangen; eine Verweigerung gilt als Schuldeingeständnis.",
      "Simply joining with a forbidden modification is already an offence. On reasonable suspicion the team may request proof; refusing counts as an admission of guilt.",
    ),
    ...(legacyFreecam
      ? [
          r(
            legacyFreecamRef(num),
            "Erlaubt ist die Mod „Legacy Freecam“, weil die Kamera damit nicht durch Blöcke fliegen kann. Jede andere Freecam bleibt verboten – ebenso jede Version oder Einstellung, mit der die Kamera durch Blöcke, Wände oder den Boden fliegen oder hindurchsehen kann.",
            "The “Legacy Freecam” mod is allowed because its camera cannot fly through blocks. Every other freecam stays forbidden – as does any version or setting that lets the camera fly or see through blocks, walls or the ground.",
          ),
        ]
      : []),
  ]);
};

/** Account rules beyond the ones a mode already words for itself. */
export const accountItems = (num: string, start: number): RuleItem[] =>
  (
    [
      [
        "Das Umgehen der AFK-Erkennung ist auf jede Weise verboten.",
        "Circumventing the AFK detection in any way is forbidden.",
      ],
      [
        "Accounts zu teilen, zu verkaufen, zu tauschen oder zu verschenken ist verboten. Bist du auf einem Account gesperrt, ist das Weiterspielen auf jedem anderen untersagt.",
        "Sharing, selling, trading or giving away accounts is forbidden. If one account is banned, playing on any other is prohibited.",
      ],
      [
        "Name, Skin und Cape dürfen keine Werbung, Beleidigungen, Nacktheit oder politischen Inhalte zeigen.",
        "Your name, skin and cape must not show advertising, insults, nudity or political content.",
      ],
    ] as [string, string][]
  ).map(([de, en], i) => r(`${num}.${start + i}`, de, en));

export const accountsParagraph = (num: string): RuleParagraph =>
  p(num, "user", "Accounts", "Accounts", [
    r(
      `${num}.1`,
      "Du darfst höchstens drei eigene Accounts gleichzeitig online haben. Nur einer davon darf aktiv spielen.",
      "You may have at most three of your own accounts online at once. Only one of them may actively play.",
    ),
    r(
      `${num}.2`,
      "Zweitaccounts dürfen ausschließlich AFK stehen. Voten, Belohnungen abholen, Claimen, Handeln oder Fortschritt erzeugen ist über sie verboten.",
      "Alt accounts may only stand AFK. Voting, collecting rewards, claiming land, trading or generating progress on them is forbidden.",
    ),
    r(
      `${num}.3`,
      "Discord-Linking ist nur für deinen eigenen Hauptaccount erlaubt – weder für andere Spieler noch für Zweitaccounts, etwa um Booster-Belohnungen mehrfach abzuholen.",
      "Discord linking is only allowed for your own main account – neither on behalf of other players nor for alt accounts, for example to collect booster rewards more than once.",
    ),
    ...accountItems(num, 4),
  ]);

export const chatParagraph = (num: string): RuleParagraph =>
  p(num, "messages", "Chat & Umgang", "Chat & conduct", [
    r(
      `${num}.1`,
      "Beleidigungen, Diskriminierung, Drohungen und Belästigung sind verboten – im Chat wie im VoiceChat.",
      "Insults, discrimination, threats and harassment are forbidden — in chat and in voice chat alike.",
    ),
    r(
      `${num}.2`,
      "Spam, Dauer-Caps, Kettennachrichten und Fremdwerbung sind verboten.",
      "Spam, constant caps, chain messages and external advertising are forbidden.",
    ),
    r(
      `${num}.3`,
      "Persönliche Daten anderer gehören nicht in den Chat – auch nicht scherzhaft.",
      "Other people's personal data does not belong in chat — not even as a joke.",
    ),
    r(
      `${num}.4`,
      "Anweisungen des Teams sind im Spiel zu befolgen. Diskussionen darüber laufen danach über ein Ticket.",
      "Follow the team's instructions in game. Discussions about them happen afterwards via a ticket.",
    ),
  ]);

/**
 * Trust, from both sides: the owner trusts at their own risk, so the team
 * replaces nothing, and the trusted player who abuses it still pays for it.
 */
export const trustRiskRule = (ref: string) =>
  r(
    ref,
    "Trust ist reine Vertrauenssache. Wer andere auf seinem Claim trusted, tut das auf eigenes Risiko: Schäden und Diebstähle durch getrustete Spieler ersetzt das Team nicht.",
    "Trust is exactly that. Trusting someone on your claim is at your own risk: the team does not replace damage or theft caused by players you trusted.",
  );

export const trustAbuseRule = (ref: string) =>
  r(
    ref,
    "Wer getrustet wird und das ausnutzt, um Schäden anzurichten oder zu stehlen, wird bestraft und muss den Schaden gegenüber dem Claim-Besitzer ersetzen.",
    "Anyone who is trusted and abuses it to cause damage or steal is punished and has to make good the damage to the claim owner.",
  );

export const offensiveBuildsRule = (ref: string) =>
  r(
    ref,
    "Anstößige, beleidigende oder politische Bauten und Schilder sind verboten.",
    "Offensive, insulting or political builds and signs are forbidden.",
  );

export const scamRule = (ref: string) =>
  r(
    ref,
    "Scamming ist verboten. Getroffene Absprachen sind bindend.",
    "Scamming is forbidden. Agreements you make are binding.",
  );

export const realMoneyRule = (ref: string) =>
  r(
    ref,
    "Ingame-Werte dürfen ausschließlich gegen Ingame-Werte gehandelt werden. Echtgeld, Accounts oder Leistungen auf anderen Servern sind verboten.",
    "In-game values may only be traded for in-game values. Real money, accounts or services on other servers are forbidden.",
  );

export const tradeCommandRule = (ref: string) =>
  r(
    ref,
    "Größere Deals laufen über /trade. Wer daran vorbei handelt, hat bei einem Betrug keinen Anspruch auf Hilfe.",
    "Larger deals go through /trade. Trading around it means no claim to help if you get scammed.",
  );

export const coinflipRule = (ref: string) =>
  r(
    ref,
    "Coinflip und vergleichbare Systeme sind Unterhaltung. Verluste werden nicht erstattet.",
    "Coinflip and comparable systems are entertainment. Losses are not refunded.",
  );

export const lagMachineRule = (ref: string) =>
  r(
    ref,
    "Lag-Maschinen und mutwillige Serverbelastung sind verboten.",
    "Lag machines and deliberately straining the server are forbidden.",
  );

/** Bugs, duping and mistaken credits — two rules from `start` on. */
export const exploitItems = (num: string, start: number): RuleItem[] => [
  r(
    `${num}.${start}`,
    "Bugs und Exploits meldest du dem Team, statt sie zu nutzen. Item-Duping führt zum permanenten Bann.",
    "Report bugs and exploits to the team instead of using them. Item duping leads to a permanent ban.",
  ),
  r(
    `${num}.${start + 1}`,
    "Fehlerhaft gutgeschriebene Items oder Münzen sind zu melden. Wer sie behält oder ausgibt, wird wie ein Betrüger behandelt.",
    "Report items or coins credited to you by mistake. Keeping or spending them is treated as fraud.",
  ),
];

/** Opening rules of every mode's penalty paragraph; returns rules 1–4. */
export const penaltyItems = (num: string): RuleItem[] => [
  r(
    `${num}.1`,
    "Regelverstöße, die du mitbekommst, meldest du dem Team. Wer einen Verstoß deckt, verschweigt oder davon profitiert, wird mitbestraft.",
    "Report any rule breach you witness to the team. Covering one up, keeping quiet about it or profiting from it is punished as well.",
    n(
      "Gemeldet wird über ein Ticket auf unserem Discord, am besten mit Screenshot oder Video.",
      "Report it through a ticket on our Discord, ideally with a screenshot or video.",
    ),
  ),
  r(
    `${num}.2`,
    "Verstöße führen je nach Schwere zu Verwarnung, Mute, Kick, temporärer oder permanenter Sperre. Strafen wirken netzwerkweit, also auch auf unserem Discord.",
    "Depending on severity, offences lead to warnings, mutes, kicks, temporary or permanent bans. Penalties apply network-wide, so they reach our Discord too.",
  ),
  r(
    `${num}.3`,
    "Banumgehung über andere Accounts verlängert die Strafe.",
    "Evading a ban via other accounts extends the penalty.",
  ),
  r(
    `${num}.4`,
    "Beschwerden über eine Strafe laufen über ein Ticket, nicht über den öffentlichen Chat.",
    "Complaints about a penalty go through a ticket, not through public chat.",
  ),
];
