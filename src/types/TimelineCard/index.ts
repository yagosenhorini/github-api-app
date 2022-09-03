export type TimelineCardProps = {
  created_at: Date;
  updated_at: Date;
  name: string;
  owner: {
    login: string;
  };
  html_url: string;
};
