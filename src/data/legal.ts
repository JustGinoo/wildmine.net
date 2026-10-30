/**
 * Impressum, AGB and Datenschutzerklärung, exactly as the operator supplied
 * them. German only and on purpose: a translated set of terms would be a
 * second version somebody could argue is the binding one. The English routes
 * render the same German text under a notice saying so.
 *
 * Treat the wording here as fixed. Rephrasing it, tightening it or "fixing"
 * its inconsistencies is not an editorial call — it changes a legal document.
 */

const MAIL = "business.justgino@gmail.com";
const PHONE_DISPLAY = "+49 1523 3960916";
const PHONE_HREF = "tel:+4915233960916";

const TEBEX_PRIVACY = "https://store.wildmine.net/terms/privacy";
const TEBEX_TERMS = "https://store.wildmine.net/terms/checkout";

const SERVERLIST_PRIVACY = "https://best-minecraft-serverlist.com/datenschutz";

export type LegalRun = string | { href: string; label: string };

export type LegalBlock =
  | { kind: "text"; runs: LegalRun[] }
  /** Postal address — rendered in its own box as a real <address>. */
  | { kind: "address"; lines: string[] }
  | { kind: "list"; items: string[] }
  /** Smaller aside, like the phone hours under the number. */
  | { kind: "aside"; runs: LegalRun[] };

export type LegalSection = {
  heading?: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  /** Route segment and the key the footer links by. */
  slug: "impressum" | "agb" | "datenschutz";
  title: string;
  /** "Stand: …" line, where the document carries one. */
  updated?: string;
  sections: LegalSection[];
};

const text = (...runs: LegalRun[]): LegalBlock => ({ kind: "text", runs });
const aside = (...runs: LegalRun[]): LegalBlock => ({ kind: "aside", runs });
const address = (...lines: string[]): LegalBlock => ({ kind: "address", lines });
const list = (...items: string[]): LegalBlock => ({ kind: "list", items });
const link = (href: string, label: string) => ({ href, label });

const OPERATOR_ADDRESS_IMPRESSUM = address(
  "Gino Wild",
  "c/o Online-Impressum #1044",
  "Europaring 90",
  "53757 St Augustin",
);

const OPERATOR_ADDRESS = address(
  "Gino Wild",
  "c/o Online-Impressum #1044",
  "Europaring 90",
  "53757 Sankt Augustin",
);

export const impressum: LegalDocument = {
  slug: "impressum",
  title: "Impressum",
  sections: [
    {
      heading: "Angaben gemäß § 5 DDG",
      blocks: [OPERATOR_ADDRESS_IMPRESSUM],
    },
    {
      heading: "Kontakt",
      blocks: [
        text("E-Mail: ", link(`mailto:${MAIL}`, MAIL)),
        text("Telefon: ", link(PHONE_HREF, PHONE_DISPLAY)),
        aside(
          "(Erreichbar Mo–Fr 12-18 Uhr; bei Nichterreichbarkeit bitte Nachricht auf der Mailbox hinterlassen)",
        ),
      ],
    },
    {
      blocks: [
        text(
          "Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen (Kleinunternehmerregelung).",
        ),
      ],
    },
    {
      heading: "Streitschlichtung / Verbraucherstreitbeilegung",
      blocks: [
        text(
          "Nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ),
      ],
    },
  ],
};

export const datenschutz: LegalDocument = {
  slug: "datenschutz",
  title: "Datenschutzerklärung",
  updated: "Stand: Oktober 2026",
  sections: [
    {
      heading: "§ 1 Verantwortlicher",
      blocks: [
        text("(1) Verantwortlicher im Sinne der DSGVO ist:"),
        OPERATOR_ADDRESS,
        text("E-Mail: ", link(`mailto:${MAIL}`, MAIL)),
      ],
    },
    {
      heading: "§ 2 Datenerhebung und Verarbeitungszwecke",
      blocks: [
        text(
          "(1) Website & Hosting: Wir erfassen IP-Adresse, Zugriffszeit und Browserdaten zur technischen Bereitstellung und IT-Sicherheit (Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung der Logfiles erfolgt für maximal 90 Tage.",
        ),
        text(
          "(2) Minecraft-Server: Wir verarbeiten Spielername, UUID, IP-Adresse, Spielstatistiken und Chat-Nachrichten zur Bereitstellung des Spielbetriebs, zur Durchsetzung der Regeln und zur Betrugsprävention (Art. 6 Abs. 1 lit. b & f DSGVO).",
        ),
        text(
          "(3) Discord-Integration: Öffentliche Minecraft-Chats können freiwillig mit dem Discord-Server synchronisiert werden (Discord-Name/ID, Nachricht). Es gelten die Datenschutzrichtlinien von Discord Inc. (Art. 6 Abs. 1 lit. f DSGVO).",
        ),
        text(
          "(4) Support/Kontakt: Bei Anfragen per E-Mail oder Discord verarbeiten wir die gesendeten Daten (Name, E-Mail, Nachrichteninhalt) zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b & f DSGVO).",
        ),
        text(
          "(5) Serverlisten-Banner: Im Fußbereich der Website ist ein Banner der Serverliste Best Minecraft Serverlist (Leon Kruse, Best-Minecraft-Serverlist.com) eingebettet, das Spielerzahl, Votes und Platzierung unseres Servers anzeigt. Beim Laden der Seite ruft dein Browser das Banner direkt von best-minecraft-serverlist.com ab; dabei werden insbesondere deine IP-Adresse, Zugriffszeit und Browserdaten an den Betreiber der Serverliste und dessen Dienstleister Cloudflare übermittelt. Die Einbindung dient der Darstellung unseres Serverstatus und der Gewinnung neuer Spieler (Art. 6 Abs. 1 lit. f DSGVO). Für die weitere Verarbeitung ist der Betreiber der Serverliste selbst verantwortlich: ",
          link(SERVERLIST_PRIVACY, SERVERLIST_PRIVACY),
        ),
      ],
    },
    {
      heading: "§ 3 Online-Shop (Tebex)",
      blocks: [
        text(
          "(1) Alle Käufe werden vom eigenständigen Verantwortlichen Tebex Limited abgewickelt.",
        ),
        text(
          "(2) Wir erhalten lediglich Einsicht in Transaktionsdaten (z. B. Name, Kaufbetrag) für den Support und die Freischaltung im Spiel (Art. 6 Abs. 1 lit. b DSGVO).",
        ),
        text("(3) Tebex Datenschutz: ", link(TEBEX_PRIVACY, TEBEX_PRIVACY)),
        text("(4) Tebex AGB: ", link(TEBEX_TERMS, TEBEX_TERMS)),
      ],
    },
    {
      heading: "§ 4 Weitergabe von Daten",
      blocks: [
        text(
          "(1) Eine Weitergabe an Dritte erfolgt ausschließlich an vertraglich gebundene Auftragsverarbeiter (z. B. Server-Hoster) gemäß Art. 28 DSGVO oder wenn eine gesetzliche Verpflichtung besteht.",
        ),
      ],
    },
    {
      heading: "§ 5 Speicherdauer und Datensicherheit",
      blocks: [
        text(
          "(1) Daten werden gelöscht, sobald der Verarbeitungszweck entfällt und keine gesetzlichen Aufbewahrungsfristen entgegenstehen. IP-Logs und Server-Chats werden in der Regel nach 90 bis 180 Tagen anonymisiert oder gelöscht.",
        ),
        text(
          "(2) Wir schützen Daten durch technische Maßnahmen wie SSL/TLS-Verschlüsselung, Zugriffsbeschränkungen und regelmäßige Server-Updates.",
        ),
      ],
    },
    {
      heading: "§ 6 Deine Rechte (Betroffenenrechte)",
      blocks: [
        text(
          "(1) Nach der DSGVO hast du jederzeit das Recht auf Auskunft (Art. 15), Berichtigung und Löschung (Art. 16 & 17), Einschränkung und Widerspruch (Art. 18 & 21) sowie Datenübertragbarkeit (Art. 20).",
        ),
        text(
          "(2) Du hast zudem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77).",
        ),
        text(
          "(3) Zur Ausübung deiner Rechte genügt eine E-Mail an: ",
          link(`mailto:${MAIL}`, MAIL),
          ".",
        ),
      ],
    },
    {
      heading: "§ 7 Änderungen",
      blocks: [
        text(
          "(1) Wir behalten uns vor, diese Datenschutzerklärung bei rechtlichen oder technischen Änderungen anzupassen. Die jeweils aktuelle Fassung ist stets abrufbar.",
        ),
      ],
    },
  ],
};

export const agb: LegalDocument = {
  slug: "agb",
  title: "Allgemeine Geschäftsbedingungen (AGB)",
  updated: "Stand: September 2026",
  sections: [
    {
      heading: "§ 1 Anbieter und Vertragsgegenstand",
      blocks: [
        text(
          "(1) Diese AGB regeln die Nutzung des Minecraft-Servers WildMine und aller damit verbundenen Dienste.",
        ),
        text("(2) Anbieter ist:"),
        OPERATOR_ADDRESS,
        text(
          "(3) Durch den Beitritt zum Server kommt ein unentgeltlicher Nutzungsvertrag zwischen dem Anbieter und dem Spieler (nachfolgend „Nutzer“) zustande. Mit dem Verbinden erkennt der Nutzer diese AGB und die Datenschutzerklärung an.",
        ),
      ],
    },
    {
      heading: "§ 2 Käufe und Tebex-Store",
      blocks: [
        text(
          "Diese AGB beziehen sich ausschließlich auf die Nutzung des Minecraft-Servers. Für sämtliche Käufe, Zahlungen und Transaktionen im Store gelten ausschließlich die AGB der Plattform Tebex Limited, da alle Zahlungen über Tebex abgewickelt werden: ",
          link(TEBEX_TERMS, TEBEX_TERMS),
        ),
      ],
    },
    {
      heading: "§ 3 Leistungen und Verfügbarkeit",
      blocks: [
        text(
          "(1) Ein Anspruch auf permanente Verfügbarkeit, bestimmte Spielmodi oder Ingame-Vorteile besteht nicht.",
        ),
        text(
          "(2) Der Anbieter ist berechtigt, Inhalte, Welten, Plugins oder Spielstände jederzeit zu ändern, zu entfernen oder zurückzusetzen (z. B. für Updates oder bei technischen Störungen).",
        ),
      ],
    },
    {
      heading: "§ 4 Nutzerpflichten und Datenerhebung",
      blocks: [
        text(
          "(1) Voraussetzung ist ein gültiger und legitimer Minecraft-Account. Der Nutzer ist für die Sicherheit seines Accounts selbst verantwortlich.",
        ),
        text(
          "(2) Zur Bereitstellung und Absicherung des Servers werden Daten wie Spielername, UUID, IP-Adressen, Logins und Chat-Nachrichten verarbeitet. Details regelt die ",
          link("/datenschutz", "Datenschutzerklärung"),
          ".",
        ),
        text(
          "(3) Nutzer unter 18 Jahren versichern, dass die Zustimmung ihrer Erziehungsberechtigten für die Nutzung des Servers und insbesondere für Käufe vorliegt.",
        ),
      ],
    },
    {
      heading: "§ 5 Verhaltensregeln",
      blocks: [
        text("(1) Der Nutzer verpflichtet sich, Folgendes zu unterlassen:"),
        list(
          "Verwendung unerlaubter Modifikationen, Hacks, Cheats oder Macro-Tools",
          "Umgehung oder Manipulation von Anti-Cheat-Systemen",
          "Beleidigungen, Drohungen, Diskriminierung oder Spam",
          "Werbung für externe Server oder Dienste ohne Erlaubnis",
          "Ausnutzung von Bugs oder Glitches",
        ),
        text(
          "(2) Zusätzlich gelten die ",
          // Every mode carries its own ruleset; the mode list is the way in.
          link("/#spielmodi", "Ingame-Serverregeln"),
          ".",
        ),
        text(
          "(3) Für den verknüpften ",
          link("https://discord.gg/Yt9KuKm76E", "Discord-Server"),
          " gelten zudem die offiziellen Discord-Nutzungsbedingungen sowie die internen ",
          link("https://discord.gg/Yt9KuKm76E", "Discord-Regeln"),
          ".",
        ),
      ],
    },
    {
      heading: "§ 6 Sanktionen",
      blocks: [
        text(
          "(1) Bei Verstößen kann der Anbieter Verwarnungen aussprechen, Nutzer temporär oder permanent vom Server ausschließen (Banns) sowie Spielstände oder Items löschen.",
        ),
        text(
          "(2) Ein Serverausschluss begründet keinen Anspruch auf Rückerstattung von Zahlungen, die über Tebex getätigt wurden.",
        ),
        text(
          "(3) Der Anbieter übt das virtuelle Hausrecht aus und behält sich das Recht vor, Nutzern auch ohne Angabe von Gründen den Zugang zum Server zu verwehren.",
        ),
      ],
    },
    {
      heading: "§ 7 Haftung",
      blocks: [
        text(
          "(1) Der Anbieter haftet bei unentgeltlicher Nutzung nur für Vorsatz und grobe Fahrlässigkeit.",
        ),
        text(
          "(2) Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt hiervon unberührt.",
        ),
        text(
          "(3) Für Datenverlust, Server-Ausfälle oder für von Nutzern erstellte Inhalte wird keine Haftung übernommen.",
        ),
      ],
    },
    {
      heading: "§ 8 Rechte an Inhalten",
      blocks: [
        text(
          "(1) Die Rechte an den spezifischen serverseitigen Inhalten (Welten, Designs, eigene Plugins und Server-Konfigurationen) liegen beim Anbieter. Für lizenzierte Drittanbieter-Plugins gelten die Bestimmungen der jeweiligen Urheber. Jegliches Kopieren, Extrahieren oder die Nutzung der Serverinhalte für externe Projekte (z. B. eigene Server oder Werbezwecke) ist ohne ausdrückliche Erlaubnis untersagt. Nutzer erhalten lediglich ein nicht-übertragbares, widerrufliches Nutzungsrecht für den Zugang zum Server. Eine kommerzielle Nutzung ist untersagt.",
        ),
        text(
          "(2) Der Nutzer räumt dem Anbieter ein dauerhaftes, unentgeltliches Nutzungsrecht an allen von ihm auf dem Server erstellten Ingame-Inhalten (z. B. Bauwerken) ein. Dies gilt auch bei einem Server-Reset oder für Werbezwecke.",
        ),
      ],
    },
    {
      heading: "§ 9 Schlussbestimmungen",
      blocks: [
        text(
          "(1) Der Minecraft-Server WildMine steht in keiner Verbindung zu Mojang Studios oder Microsoft. Alle Marken sind Eigentum der jeweiligen Rechteinhaber.",
        ),
        text(
          "(2) Änderungen der AGB werden in geeigneter Form (z. B. über den Discord-Server) bekanntgegeben.",
        ),
        text(
          "(3) Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
        ),
      ],
    },
  ],
};

/** Every legal document, in the order the footer lists them. */
export const legalDocuments = [impressum, agb, datenschutz] as const;
