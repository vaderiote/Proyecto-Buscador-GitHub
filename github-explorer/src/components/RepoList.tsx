import type { GithubRepo } from '../types/github';
import { RepoCard } from './RepoCard';

interface Props {
  repos: GithubRepo[];
}

export function RepoList({ repos }: Props) {
  if (repos.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-3">
        Repositorios ({repos.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {repos.map(repo => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}