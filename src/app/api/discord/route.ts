import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { memo } from "@/lib/memo";

export const dynamic = "force-dynamic";

type DiscordResponse = {
  memberCount: number;
  onlineCount: number;
  guildName: string | null;
  iconUrl: string | null;
};

export async function GET() {
  return NextResponse.json<DiscordResponse>(await memo("discord", 60_000, loadDiscord));
}

async function loadDiscord(): Promise<DiscordResponse> {
  try {
    const res = await fetch(
      `https://discord.com/api/v10/invites/${site.discordInviteCode}?with_counts=true`,
      { cache: "no-store", signal: AbortSignal.timeout(5000) },
    );

    if (!res.ok) {
      return {
        memberCount: 0,
        onlineCount: 0,
        guildName: null,
        iconUrl: null,
      };
    }

    const data = await res.json();
    const guild = data.guild;

    return {
      memberCount: data.approximate_member_count ?? 0,
      onlineCount: data.approximate_presence_count ?? 0,
      guildName: guild?.name ?? null,
      iconUrl:
        guild?.id && guild?.icon
          ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
          : null,
    };
  } catch {
    return {
      memberCount: 0,
      onlineCount: 0,
      guildName: null,
      iconUrl: null,
    };
  }
}
