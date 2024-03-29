export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export type Comment = {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  image: string;
  username: string;
  replies?: object[];
  replyingTo?: string;
};
