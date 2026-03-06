import { Prompt } from "@prisma/client";

interface PromptTableProps {
  prompts: Prompt[];
}

export function PromptTable({ prompts }: PromptTableProps) {
  if (!prompts || prompts.length === 0) {
    return (
      <div className="bg-white text-gray-600 rounded-lg shadow px-4 py-12 text-center">
        <span>No prompts found. Start by creating your first prompt!</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Model
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Tags
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Updated
            </th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {prompts.map((prompt) => (
            <tr key={prompt.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                {prompt.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                {prompt.model}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {prompt.tags.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                {new Date(prompt.updatedAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <a
                  href={`/dashboard/prompts/${prompt.id}`}
                  className="text-indigo-600 hover:text-indigo-900 font-semibold"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}