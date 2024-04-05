import { Dispatch, SetStateAction } from 'react';

export interface UserContextType {
  currentUser: CurrentUser;
  userComments: Comment[];
  setUserComments: Dispatch<SetStateAction<Comment[]>>;
}

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
  createdAt: string | undefined;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: Reply[];
}

export interface Reply {
  id: number | undefined;
  content: string;
  createdAt: string | undefined;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replyingTo?: string | null;
}

export interface Response {
  setUserReplies?: Dispatch<SetStateAction<Reply[]>>;
  setResponse?: Dispatch<SetStateAction<boolean>>;
  userComments?: Comment[];
  setUserComments?: Dispatch<SetStateAction<Comment[]>>;
  userReplies?: Reply[];
  button: string;
}
