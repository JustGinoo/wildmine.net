# Changelog

## 01.11.2026 – Winter-Design

- **Neu: `SITE_SEASON` in der `.env`** erzwingt ein saisonales Design (`winter`, `halloween`, `default`). Ohne Eintrag entscheidet weiterhin das Datum.
- Auf wildmine.net ist ab sofort das Winter-Design aktiv (Winter-Logo, -Hintergrund, Schnee, Winterfarben).

## 01.11.2026 – WildSMP-Regelwerk kompakt

Wie bei WildAttack: Doppelungen zusammengefasst, vage Regeln gestrichen, **94 → 58 Regeln**. Die Nummern haben sich dadurch geändert.

### Geändert
- **Ohne Claim kein Schutz (§3.1):** Ungeclaimte Bauten und Kisten dürfen abgebaut und geplündert werden. Vorher war Diebstahl aus ungesicherten Kisten in der Hauptwelt verboten.
- **Trust (§3.3):** Wer Trust hat, darf auf dem Claim alles; nichts wird bestraft oder ersetzt. Vorher wurde Trust-Missbrauch bestraft und war ersatzpflichtig.
- **Combat-Logging (§5.3):** 15 Sekunden nach einem Treffer kein Ausloggen, Serverwechsel oder Teleport.
- **Fallen (§5.6):** kein Einsperren gegen den Willen, keine TPA-Fallen, keine Fallen zum Töten (löst den Widerspruch zwischen „Fallen in der Farmwelt erlaubt“ und „Fallen dürfen nicht schädigen“).
- **TNT-Duper (§7.5):** stationär und beweglich erlaubt, bei Nichtnutzung aus.
- **Ersatz (§8):** Nur Serverfehler werden ersetzt, alles andere ist Kulanz (vorher widersprachen sich „wird ersetzt“ und „jeder Ersatz ist Kulanz“).

### Zusammengefasst
- Accounts → §2.1–2.6, Claim-Blocking und öffentliche Bereiche → §3.4, Spawn/Straßen/Highways/Portale → §4.2
- PvP nur in Farmwelten inkl. indirekter Wege und Redstone-Anlagen → §5.1; Farmwelt-Einwilligung, Resets, kein Schutz, kein Ersatz → §5.2
- Scam, Wortbruch, falsche Shops, ChestShop-Miete → §6.1; Wetten und Coinflip → §6.6
- Clocks, Farmen, Hoppernetze → §7.3

### Entfernt
- „Grundgedanke“, „extrem unschöne Bauten“, „Dauerjagen“, „Im Zweifel fragen“ (steht in §0.1), eigene Regel zu Claim-Verkauf (deckt §6.5 ab)
- Ungenutzte gemeinsame Bausteine `trustRiskRule` und `trustAbuseRule`

## 01.11.2026 – WildAttack-Regelwerk kompakt

Doppelungen zusammengefasst und vage Regeln gestrichen: **87 → 57 Regeln**, 11 statt 12 Paragraphen. Die Nummern haben sich dadurch geändert.

### Geändert
- **PvP:** Cooldown (alle 12 Stunden per /pvp) und „im Kampf nicht ausschaltbar“ sind Systemverhalten und stehen nur noch im Infotext. Neu als Regel: 30 Sekunden nach einem Treffer kein Ausloggen, Serverwechsel oder Teleport (§1.3).
- **Fallen (§1.6):** Spieler dürfen nicht gegen ihren Willen eingesperrt werden, TPA-Fallen und Fallen zum Töten von Spielern sind verboten (ersetzt die alten Regeln zu Fallen und Einsperren).
- **Trust (§2.3):** Wer Trust hat, darf auf dem Claim alles; nichts davon wird bestraft oder ersetzt. Griefing-Verbot (§2.2) gilt nur ohne Trust.
- **Ohne Claim kein Schutz (§2.1)** steht nur noch einmal drin.

### Zusammengefasst
- PvP-Schutz umgehen inkl. Fallen und Redstone-Anlagen → §1.1
- Druck zu PvP und Schutzgeld/Erpressung → §1.4
- Claim-Blocking und blockierte öffentliche Bereiche → §2.4, Spawn/Straßen/Highways/Portale → §3.2
- Flächen- und Massenzerstörung → §3.3
- Scam, Wortbruch, falsche Shops → §4.1; Wetten und Coinflip → §4.4
- Performance: Clocks, Farmen, Hoppernetze → §5.2
- PvP-Verlust, Loot, Ersatz → §6.1–6.4

### Entfernt
- „Dauerjagen einzelner Spieler“, „bewusst unfaire Preise“, „Grundgedanke“ und „extrem unschöne Bauten“ (zu vage)
- Eigene Regeln zu Claim-Verkauf und Wetten nur gegen Ingame-Währung (deckt §4.3 ab)

## 01.11.2026 – WildAttack: TNT-Duper

- **Regel 6.3 neu:** TNT-Duper sind stationär **und** beweglich erlaubt (z. B. Tunnelbohrer, Flugmaschinen) und müssen bei Nichtnutzung abgeschaltet sein. Item-Duper bleiben verboten (§6.8, permanenter Bann).
- Hinweis dazu: Bewegliche Duper dürfen nicht in fremde Claims fahren und keine ganzen Gebiete zerstören (§4.1, §4.4).

## 31.10.2026 – WildAttack-Regelwerk

- **Regel 4.5 entfernt** (Bestrafung und Schadenersatz bei Trust-Missbrauch). Wer andere trustet, trägt das Risiko selbst.
- **Neue Regel 4.6:** Trusten auf dem eigenen Claim geschieht auf eigenes Risiko. Nimmt oder zerstört ein getrusteter Spieler etwas, wird das weder bestraft noch ersetzt.
- **Regel 4.5 (vorher 4.6):** Einsperren oder Festhalten ist nur noch verboten, wenn es *gegen den Willen* des Spielers passiert.
- WildSMP behält seine Trust-Regel (6.4) unverändert.

## 30.10.2026 – Spielerköpfe

- **Spielerköpfe kommen von minotar.net statt mc-heads.net.** mc-heads.net sperrt Anfragen vom Server per Cloudflare-Bot-Schutz (403), dadurch fehlten die Köpfe in der Spielzeit-Rangliste. Geladen wird weiterhin serverseitig, Besucher rufen den Dienst nicht selbst auf.

## 30.10.2026 – Aufräumen & Performance

### Neu
- **LiveMaps laden erst per Klick.** Vorher lud jede Modus-Seite die komplette Karte mit (die LiveMap-Seite bis zu 10 MB). Jetzt erscheint ein Vorschaubild mit „Karte laden“.
- **Hell/Dunkel nach Systemeinstellung**, der Schalter ist weg (kein Skript, nichts in `localStorage`).

### Verbessert
- **Logos** von 0,8–1,5 MB auf 33–56 KB, eigenes Favicon (5 KB) statt des 750-KB-Logos. Ungenutzte Logos (blau, gelb) entfernt.
- **Hintergründe** von 220–370 KB auf 30–85 KB.
- **Wiki:** Einträge werden auf dem Server in die aktuelle Sprache übersetzt; die Wiki-Daten beider Sprachen landen nicht mehr im Browser (komprimiert ~20 % kleiner).
- **Statistik:** Werte ohne Daten (z. B. registrierte Spieler, wenn die Proxy-API nicht antwortet) werden ausgeblendet statt als 0 angezeigt.
- **Serverlisten-Banner** im Footer lädt wieder (Sandbox mit `allow-same-origin`, bleibt aber ohne Zugriff auf die Seite).
- LiveMap-Adressen kommen aus der `.env` (`LIVEMAP_WILDSMP_URL`, `LIVEMAP_WILDATTACK_URL`).

### Entfernt
- Plan-Datenbank-Anbindung (war nie konfiguriert) samt `mysql2`; die Spielzeit kommt aus der Proxy-API.
- `AGENTS.md`, `CLAUDE.md`, `.claude/`, Standard-README.

## 30.10.2026 – Sicherheits-Update

Ergebnis eines Sicherheits-Audits der Website und des Servers.

### Behoben

- **Next.js 16.2.12 → 16.4.3.** 16.2.12 hatte mehrere kritische Lücken, über die sich ohne Login Code auf dem Server ausführen lässt, u. a.:
  - in der Bild-Optimierung (`/_next/image`), die die Seite für Spielerköpfe und das Discord-Icon nutzt;
  - in `next/og` `ImageResponse`, also den OpenGraph-Bildern.

  Dazu kamen SSRF in der Bild-Optimierung, Cache-Poisoning und ein DoS über Server Actions. `npm audit --omit=dev` meldet jetzt 0 Schwachstellen.
- **API-Routen mit Cache.** Bisher fragte jeder Aufruf direkt bei der Proxy-API, mcstatus.io und Discord an. Eine Anfrageflut hätte den Server dort sperren lassen.
  - `/api/status` wird 15 s gecacht, `/api/discord` 60 s.
  - Gleichzeitige Aufrufe teilen sich einen Abruf (`src/lib/memo.ts`).
  - `/api/stats/playtime` merkt sich auch leere Ergebnisse 60 s, damit ein Ausfall von Plan oder Proxy nicht bei jedem Aufruf neu versucht wird.
- **Serverlisten-Banner im Footer abgesichert.** Es läuft jetzt in einer Sandbox (`allow-scripts allow-popups`) und ohne Referrer. Die Seite wegnavigieren kann es nicht mehr.
- **`X-Powered-By: Next.js` entfernt** (`poweredByHeader: false`).

### Auf dem Server (nginx/systemd)

- **Sicherheits-Header:** HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` und eine CSP mit `frame-ancestors`, `object-src` und `base-uri`.
- **Echte Besucher-IP hinter Cloudflare:** `real_ip_header CF-Connecting-IP` mit den Cloudflare-Bereichen. `X-Forwarded-For` wird mit der echten IP überschrieben.
- **Rate-Limit auf `/api/`:** 10 Anfragen/s je IP, Burst 20.
- **Nur noch lokal und lesegeschützt:** Next.js lauscht nur noch auf `127.0.0.1` (`npm run start -- -H 127.0.0.1`), `.env` ist nur noch für www-data lesbar.

### Offen

- **Live-Maps:** `/maps/*` kommt per unverschlüsseltem HTTP vom Minecraft-Node (`src/data/livemaps.ts`) und läuft unter der wildmine.net-Origin. Besser wäre squaremap hinter TLS oder auf einer eigenen Subdomain.
- **Plan-Datenbank:** `PLAN_DB_*` ist nicht konfiguriert, die Playtime kommt dann nur aus der Proxy-API.
- **ProxySystem-API nicht erreichbar:** `/api/status` fällt deshalb auf mcstatus.io zurück und liefert keine Einzelserver.
