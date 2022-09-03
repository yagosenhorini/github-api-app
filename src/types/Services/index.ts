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
  };
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  html_url: string;
  language: string;
}[];
