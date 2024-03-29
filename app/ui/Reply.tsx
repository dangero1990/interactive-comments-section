import type { Reply } from '../lib/definitions';
import { Likes } from './Card';

export default function Reply({ id, content, createdAt, score, replyingTo, user }: Reply) {
  return (
    <article
      id={id}
      className='bg-White p-8 rounded-xl card mt-[2em] max-w-[90%] ml-auto'
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
        <button className='reply text-Moderate_blue mt-auto mb-auto ml-auto'>Reply</button>
      </div>
      <p className='comment mt-[1em]'>
        <span className='text-Moderate_blue font-bold'>{`@${replyingTo}`}</span>
        {` ${content}`}
      </p>
    </article>
  );
}
