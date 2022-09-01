import { GithubResponseProps } from '@Types/Services';

export const orderByDate = (repos: GithubResponseProps) => {
  const orderedRepos = repos.sort((older, newest) => {
    const oldDate = new Date(older.created_at);
    const newDate = new Date(newest.created_at);
    return oldDate.getTime() - newDate.getTime();
  });
  return orderedRepos;
};
