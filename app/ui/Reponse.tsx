import type { Response } from '../lib/definitions';
import { useRef } from 'react';

export default function Response({ currentUser, userReplies, setUserReplies, setResponse, userComments, setUserComments, button }: Response) {
  let newResponse = useRef<HTMLTextAreaElement>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const responseValue = newResponse.current?.value;
    if (!responseValue) return;

    const newReply = {
      id: button === 'REPLY' ? (userReplies ? userReplies.length + 1 : 1) : userComments ? userComments.length + 1 : 1,
      content: responseValue,
      createdAt: new Date().toLocaleString(),
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
      currentUser: currentUser,
    };

    if (button === 'REPLY') {
      setUserReplies?.((prevReplies) => (prevReplies ? [...prevReplies, newReply] : [newReply]));
    }

    if (button === 'SEND') {
      setUserComments?.((prevComments) => (prevComments ? [...prevComments, newReply] : [newReply]));
    }
    setResponse?.((prevResponse) => !prevResponse);
  }

  return (
    <>
      <li className='bg-White p-8 rounded-xl mt-[2em] ml-auto flex'>
        <form
          onSubmit={submit}
          className='flex flex-1'
        >
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
            type='submit'
            className='bg-Moderate_blue text-White w-min h-min px-4 py-2 ml-[1em] rounded-xl hover:bg-Light_grayish_blue'
          >
            {button}
          </button>
        </form>
      </li>
    </>
  );
}
