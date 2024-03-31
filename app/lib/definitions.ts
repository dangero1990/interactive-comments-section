import { Dispatch, SetStateAction } from 'react';

export interface CurrentUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Comment {
  id: number;
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
  replies: Reply[];
  currentUser: CurrentUser;
}

export interface Reply {
  id: number | undefined;
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
  currentUser?: CurrentUser;
}

export interface Response {
  currentUser: CurrentUser;
  setUserReplies?: Dispatch<SetStateAction<Reply[]>>;
  setResponse?: Dispatch<SetStateAction<boolean>>;
  userComments?: Comment[];
  setUserComments?: Dispatch<SetStateAction<Comment[]>>;
  userReplies?: Reply[];
  button: string;
}
