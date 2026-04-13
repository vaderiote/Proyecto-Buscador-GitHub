import { useGithubUser } from './hooks/useGithubUser';
import { SearchBar } from './components/SearchBar';
import { UserCard } from './components/UserCard';
import { RepoList } from './components/RepoList';

export default function App() {
  const { user, repos, loading, error, fetchUser } = useGithubUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          GitHub Explorer
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Buscá cualquier usuario de GitHub
        </p>

        <SearchBar onSearch={fetchUser} loading={loading} />

        <div className="mt-8 flex flex-col gap-6">
          {loading && (
            <p className="text-center text-gray-500">Cargando...</p>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {user && !loading && (
            <>
              <UserCard user={user} />
              <RepoList repos={repos} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}