import { Metadata } from 'next';
import { getPromptsForTeam } from '@/lib/db/queries';
import { PromptTable } from '@/components/prompts'; // Use new index barrel
import { getSessionUserAndTeam } from '@/lib/auth/session';

export const metadata: Metadata = {
  title: 'Prompt Library – PromptHub',
  description: 'Browse, search, and manage your team\'s AI prompts.',
};

export default async function PromptLibraryPage() {
  const { team } = await getSessionUserAndTeam();
  const prompts = await getPromptsForTeam(team?.id);

  return (
    <main className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Prompt Library</h1>
      <PromptTable prompts={prompts} />
    </main>
  );
}