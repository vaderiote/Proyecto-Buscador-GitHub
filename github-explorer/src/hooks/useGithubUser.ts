import { useState, useCallback } from 'react';
import type { GithubUser, GithubRepo } from '../types/github';
interface State {
  user: GithubUser | null;
  repos: GithubRepo[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  user: null,
  repos: [],
  loading: false,
  error: null,
};

export function useGithubUser() {
  const [state, setState] = useState<State>(initialState);

  const fetchUser = useCallback(async (username: string) => {
    if (!username.trim()) return;

    setState({ ...initialState, loading: true });

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=stars`),
      ]);

      if (!userRes.ok) {
        throw new Error(userRes.status === 404 ? 'Usuario no encontrado' : 'Error al buscar usuario');
      }

      const user: GithubUser = await userRes.json();
      const repos: GithubRepo[] = await reposRes.json();

      setState({
        user,
        repos: repos.filter(r => !r.fork),
        loading: false,
        error: null,
      });
    } catch (err) {
      setState({
        ...initialState,
        error: err instanceof Error ? err.message : 'Error desconocido',
      });
    }
  }, []);

  return { ...state, fetchUser };
}