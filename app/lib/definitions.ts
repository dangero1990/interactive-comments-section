export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies?: Reply[];
}

export interface Reply {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replyingTo: string;
}
