'use client';

import Card from './ui/Card';
import Response from './ui/Reponse';
import data from './lib/data.json';
import { useState } from 'react';

export default function Home() {
  const dataComments: any[] = data.comments;
  const [userComments, setUserComments] = useState(dataComments);

  return (
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
            currentUser={data.currentUser}
          />
        ))}
      </ul>
      <Response
        currentUser={data.currentUser}
        button={'SEND'}
        userComments={userComments}
        setUserComments={setUserComments}
      />
    </main>
  );
}
