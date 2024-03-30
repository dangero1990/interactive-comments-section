import type { Response } from '../lib/definitions';

export default function Response({ currentUser }: Response) {
  return (
    <>
      <li className='bg-White p-8 rounded-xl mt-[2em] ml-auto flex'>
        <img
          src={currentUser.image.png || currentUser.image.webp}
          alt={currentUser.username}
          className='user max-w-[50px] max-h-[50px] mr-[1em]'
        />
        <textarea className='resize-none border-2 border-Grayish_blue min-h-10 rounded-md p-2 w-full'></textarea>
        <button className='bg-Moderate_blue text-White w-min h-min px-4 py-2 ml-[1em] rounded-xl hover:bg-Light_grayish_blue'>REPLY</button>
      </li>
    </>
  );
}
