import type { Response } from '../lib/definitions';
import { useRef, useContext } from 'react';
import { extractReplyTo, dayBuilder } from '../lib/utils';
import { UserContext } from '../page';
import { CardContext } from '../ui/Card';
import type { UserContextType } from '../lib/definitions';
import { v4 as uuidv4 } from 'uuid';

export default function Response({ setResponse, button, replyingTo, editMode, setEditMode, content, id, score }: Response) {
  let newResponse = useRef<HTMLTextAreaElement>(null);
  const { currentUser, setUserComments } = useContext<UserContextType>(UserContext);
  const { userReplies, setUserReplies } = useContext(CardContext);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let responseValue = newResponse.current?.value;
    if (!responseValue) {
      setResponse?.((prevResponse) => !prevResponse);
      return;
    }
    const replyTo = extractReplyTo(responseValue, replyingTo ? replyingTo : '');

    const newReply = {
      id: editMode ? id : uuidv4(),
      content: responseValue,
      createdAt: editMode ? `Edited: ${dayBuilder(new Date())}` : dayBuilder(new Date()),
      score: editMode ? score : 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
      currentUser: currentUser,
      replyingTo: replyTo,
    };

    if (editMode) {
      setUserReplies?.((prevReplies) => prevReplies.filter((reply) => reply.id !== id));
    }

    if (button === 'REPLY') {
      setUserReplies?.((prevReplies) => (prevReplies ? [...prevReplies, newReply] : [newReply]));
      setResponse?.((prevResponse) => !prevResponse);
      if (editMode) setEditMode(false);
    }

    if (button === 'SEND') {
      setUserComments?.((prevComments) => (prevComments ? [...prevComments, newReply] : [newReply]));
      if (newResponse.current) newResponse.current.value = '';
    }
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
            defaultValue={editMode ? content : ''}
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
