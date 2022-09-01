export type GithubResponseProps = {
  id: number;
  name: string;
  private: boolean;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
  };
  created_at: Date | string;
  updated_at: Date | string;
  pushed_at: Date | string;
  language: string;
}[];
