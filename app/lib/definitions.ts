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
  id: number | string;
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
  id: number | string;
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
  replyingTo: string;
  userReplies?: Reply[] | undefined;
  setUserReplies?: Dispatch<SetStateAction<Reply[]>>;
}

export interface Response {
  userReplies?: Reply[];
  setUserReplies?: Dispatch<SetStateAction<Reply[]>>;
  setResponse?: Dispatch<SetStateAction<boolean>>;
  button: string;
  replyingTo?: string;
}
