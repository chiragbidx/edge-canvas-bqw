import { Metadata } from 'next';
import { getPromptsForTeam } from '@/lib/db/queries'; // To be implemented
import { PromptTable } from '@/components/prompts/PromptTable'; // To be implemented
import { getSessionUserAndTeam } from '@/lib/auth/session'; // To be implemented

export const metadata: Metadata = {
  title: 'Prompt Library – PromptHub',
  description: 'Browse, search, and manage your team\'s AI prompts.',
};

export default async function PromptLibraryPage() {
  // Assume server-side session helper provides user/team context
  const { team } = await getSessionUserAndTeam();
  const prompts = await getPromptsForTeam(team?.id);

  return (
    <main className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Prompt Library</h1>
      {/* Filters and search components will go here */}
      {/* Table or list component showing prompts */}
      <PromptTable prompts={prompts} />
    </main>
  );
}