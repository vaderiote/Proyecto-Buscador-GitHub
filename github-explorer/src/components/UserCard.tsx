import type { GithubUser } from '../types/github';

interface Props {
  user: GithubUser;
}

export function UserCard({ user }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 bg-white rounded-xl border border-gray-200">
      <img
        src={user.avatar_url}
        alt={`Avatar de ${user.login}`}
        className="w-24 h-24 rounded-full flex-shrink-0"
      />
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl font-semibold text-gray-900">
          {user.name ?? user.login}
        </h2>
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          @{user.login}
        </a>
        {user.bio && (
          <p className="mt-2 text-gray-600 text-sm">{user.bio}</p>
        )}
        <div className="flex justify-center sm:justify-start gap-6 mt-4">
          <Stat label="Repos" value={user.public_repos} />
          <Stat label="Seguidores" value={user.followers} />
          <Stat label="Siguiendo" value={user.following} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}