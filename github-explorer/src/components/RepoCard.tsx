import type { GithubRepo } from '../types/github';

interface Props {
  repo: GithubRepo;
}

export function RepoCard({ repo }: Props) {
  return (
    <a href={repo.html_url}target="_blank"rel="noreferrer"className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-blue-600 truncate">
          {repo.name}
        </h3>
        <span className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
          ⭐ {repo.stargazers_count}
        </span>
      </div>
      {repo.description && (
        <p className="mt-1 text-xs text-gray-600 line-clamp-2">
          {repo.description}
        </p>
      )}
      {repo.language && (
        <span className="inline-block mt-2 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">
          {repo.language}
        </span>
      )}
    </a>
  );
}