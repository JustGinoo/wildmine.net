# WildMine.net

Website des Minecraft-Netzwerks **WildMine** – Wiki, Live-Status, Spielmodi und LiveMaps.

**Live:** [wildmine.net](https://wildmine.net) · **Discord:** [discord.gg/Yt9KuKm76E](https://discord.gg/Yt9KuKm76E) · **Store:** [store.wildmine.net](https://store.wildmine.net)

## Der Server

WildMine ist ein deutsches Survival-Netzwerk für **Java und Bedrock**, online seit dem 18. Juni 2025. Mehrere Spielmodi laufen hinter einem Velocity-Proxy, auf Paper und Folia, mit selbst entwickelten Plugins.

| | Adresse |
|---|---|
| Java Edition | `wildmine.net` |
| Bedrock Edition | `bedrock.wildmine.net` |

### Spielmodi

| Modus | |
|---|---|
| **WildSMP** | Das Herzstück: entspanntes Survival mit fairer Wirtschaft, Claims und Community-Events. PvP nur in den Farmwelten. |
| **WildBlock** | OneBlock – starte auf einem einzigen Block und schalte immer neue Phasen frei. |
| **WildAttack** | Von CraftAttack inspiriertes, offenes Survival mit Claim-System und PvP-Schalter. |
| **WildCity** | In Planung: ein Rollenspiel-Modus in einer riesigen Stadt. |

## Die Website

- **Startseite** mit Live-Spielerzahlen, Discord-Stats und Spielzeit-Rangliste
- **Spielmodi** mit eigenem Wiki, Regelwerk und LiveMap
- **Wiki** mit allen Features und Befehlen, durchsuchbar und filterbar
- **Status** aller Server in Echtzeit
- Deutsch und Englisch, Hell/Dunkel nach Systemeinstellung, saisonale Designs (Winter, Halloween)

Reine Infoseite: kein Login, kein Admin-Bereich, keine Cookies für Tracking.

### Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · next-intl

### Starten

```bash
npm install
cp .env.example .env
npm run dev
```

| Variable | Zweck |
|---|---|
| `PROXY_API_URL`, `PROXY_API_TOKEN` | Status- und Spielzeit-API des Proxys (ohne: Fallback auf mcstatus.io) |
| `LIVEMAP_WILDSMP_URL`, `LIVEMAP_WILDATTACK_URL` | squaremap-Server, die unter `/maps/…` eingebunden werden |
| `SITE_SEASON` | Design erzwingen: `winter`, `halloween` oder `default`. Leer = nach Datum (Winter 1.12.–6.1., Halloween 15.–31.10.) |

Logos, Hintergründe und Favicons gehören nicht zum Repository; ohne sie läuft die Seite, zeigt aber leere Bildflächen.

### Aufbau

```
messages/          Texte de/en
public/            Logos und Hintergründe (nicht im Repo)
src/app/           Seiten und API-Routen (/api/status, /api/discord, /api/stats/playtime)
src/components/    UI-Bausteine
src/data/          Inhalte: Spielmodi, Wiki, Regelwerke, LiveMaps, Rechtstexte
src/lib/           Proxy-API, Status, Hilfsfunktionen
```

## Lizenz

Code zur Ansicht. Name, Logos, Bilder und Texte von WildMine sind nicht zur Weiterverwendung freigegeben.
