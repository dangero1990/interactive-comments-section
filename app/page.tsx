'use client';

import Card from './ui/Card';
import Response from './ui/Reponse';
import data from './lib/data.json';
import { useState, createContext } from 'react';
import { UserContextType } from './lib/definitions';

const defaultValues: UserContextType = {
  userComments: data.comments,
  setUserComments: () => {},
  currentUser: data.currentUser,
};

export const UserContext = createContext(defaultValues);

export default function Home() {
  const [userComments, setUserComments] = useState(defaultValues.userComments);
  const currentUser = defaultValues.currentUser;

  return (
    <UserContext.Provider value={{ userComments, setUserComments, currentUser }}>
      <main className='w-[80%] m-auto'>
        <ul>
          {userComments.map((comment) => (
            <Card
              key={Number(comment.id)}
              id={Number(comment.id)}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              user={comment.user}
              replies={comment.replies}
            />
          ))}
        </ul>
        <Response button={'SEND'} />
      </main>
    </UserContext.Provider>
  );
}
