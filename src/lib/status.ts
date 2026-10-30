/** Shape returned by /api/status — shared between the route handler and the UI. */

export type StatusServer = {
  name: string;
  display: string;
  state: "ONLINE" | "OFFLINE" | "MAINTENANCE";
  online: number;
  max: number;
  pingMs: number;
  queue: number;
  tps: number | null;
};

export type StatusResponse = {
  online: boolean;
  players: { online: number; max: number };
  /** Where the numbers came from, so the UI can degrade gracefully. */
  source: "proxysystem" | "mcstatus" | "none";
  maintenance: { active: boolean; remaining: string | null };
  registeredPlayers: number | null;
  uptimeSeconds: number | null;
  servers: StatusServer[];
};

export const emptyStatus: StatusResponse = {
  online: false,
  players: { online: 0, max: 0 },
  source: "none",
  maintenance: { active: false, remaining: null },
  registeredPlayers: null,
  uptimeSeconds: null,
  servers: [],
};
