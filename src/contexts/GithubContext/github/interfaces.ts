import { GithubResponseProps } from '@Types/Services';

export type InitialStateProps = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  repos: GithubResponseProps | null;
};
