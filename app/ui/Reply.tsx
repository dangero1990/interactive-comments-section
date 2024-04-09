import type { Reply } from '../lib/definitions';
import { Likes } from './Card';
import ContentBuilder from './ContentBuilder';
import { useContext, useState } from 'react';
import { UserContext } from '../page';
import Response from './Reponse';

export default function Reply({ id, content, createdAt, score, replyingTo, user, userReplies, setUserReplies }: Reply) {
  const { currentUser } = useContext(UserContext);
  const [response, setResponse] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function edit() {
    setEditMode(true);
    setResponse(true);
  }

  return (
    <>
      {!editMode && (
        <li
          id={`${user.username}${id}`}
          className='bg-White p-8 rounded-xl card mt-[2em] ml-auto'
        >
          <Likes score={score} />
          <div className='flex flex-1 h-min'>
            <img
              src={user.image.png || user.image.webp}
              className='user max-w-[50px] max-h-[50px]'
              alt={user.username}
            />
            <span className='font-bold text-Moderate_blue mt-auto mb-auto ml-[1em]'>{user.username}</span>
            <span className='text-Light_grayish_blue mt-auto mb-auto ml-[1em]'>{createdAt}</span>
            <div className='ml-auto mt-auto mb-auto'>
              {currentUser.username === user.username && <button className='delete text-Soft_Red'>DELETE</button>}
              {currentUser.username === user.username ? (
                <button
                  className='edit ml-4 text-Moderate_blue'
                  onClick={edit}
                >
                  EDIT
                </button>
              ) : (
                <button
                  className='reply text-Moderate_blue'
                  onClick={() => setResponse((prevResponse) => !prevResponse)}
                >
                  Reply
                </button>
              )}
            </div>
          </div>
          {ContentBuilder(content, replyingTo)}
        </li>
      )}
      {response && (
        <Response
          id={id}
          content={content}
          score={score}
          replyingTo={editMode ? replyingTo : user.username}
          userReplies={userReplies}
          setUserReplies={setUserReplies}
          button='REPLY'
          setResponse={setResponse}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      )}
    </>
  );
}
