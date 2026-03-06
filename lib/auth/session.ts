import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";
import { prisma } from "@/lib/db";

/**
 * Get current session user and default team.
 * Throws or returns undefined values if unauthenticated.
 */
export async function getSessionUserAndTeam() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) throw new Error("Not authenticated");
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { teams: true },
  });
  if (!user) throw new Error("User not found");
  // For now, pick the first team as default context
  const teamMember = user.teams[0];
  const team = teamMember
    ? await prisma.team.findUnique({
        where: { id: teamMember.teamId },
      })
    : null;
  return { user, team };
}

// ...other exports