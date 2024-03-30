export interface CurrentUser {
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
  currentUser: CurrentUser;
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
  replyingTo?: string | undefined;
  currentUser: CurrentUser;
}

export interface Response {
  currentUser: CurrentUser;
  setUserReplies?: (replies: Reply[]) => void;
  userReplies?: Reply[];
}
