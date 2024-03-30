import type { Response, Reply } from '../lib/definitions';
import { useRef } from 'react';

export default function Response({ currentUser, userReplies, setUserReplies }: Response) {
  let newResponse = useRef('');

  function submit(e) {
    e.preventDefault();
    newResponse = newResponse.current.value;
    const newReply: Reply = {
      id: userReplies.id ? userReplies.id + 1 : 1,
      content: newResponse,
      createdAt: Date.now(),
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
    };

    setUserReplies([...userReplies, newReply]);
  }

  return (
    <>
      <li className='bg-White p-8 rounded-xl mt-[2em] ml-auto flex'>
        <img
          src={currentUser.image.png || currentUser.image.webp}
          alt={currentUser.username}
          className='user max-w-[50px] max-h-[50px] mr-[1em]'
        />
        <textarea
          ref={newResponse}
          className='resize-none border-2 border-Grayish_blue min-h-10 rounded-md p-2 w-full'
        ></textarea>
        <button
          onClick={submit}
          className='bg-Moderate_blue text-White w-min h-min px-4 py-2 ml-[1em] rounded-xl hover:bg-Light_grayish_blue'
        >
          REPLY
        </button>
      </li>
    </>
  );
}
