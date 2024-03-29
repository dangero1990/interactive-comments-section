import { Comment } from '../lib/definitions';
import Reply from './Reply';

export function Likes({ score }: { score: number }) {
  return (
    <aside className='likes mr-[2em] bg-Very_light_gray p-[1em] rounded-xl h-min'>
      <button className='block mb-[1em] ml-auto mr-auto'>
        <svg
          width='11'
          height='11'
          xmlns='http://www.w3.org/2000/svg'
          className='text-[#C5C6EF] hover:text-Moderate_blue'
        >
          <path
            d='M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z'
            fill='currentColor'
          />
        </svg>
      </button>
      <span className='center text-Moderate_blue'>{score}</span>
      <button className='block mt-[1em] ml-auto mr-auto'>
        <svg
          width='11'
          height='3'
          xmlns='http://www.w3.org/2000/svg'
          className='text-[#C5C6EF] hover:text-Moderate_blue'
        >
          <path
            d='M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z'
            fill='currentColor'
          />
        </svg>
      </button>
    </aside>
  );
}

export default function Card({ id, content, createdAt, score, image, username, replies }: Comment) {
  return (
    <section>
      <article
        id={id}
        className='bg-White p-8 rounded-xl card mt-[2em] min-w-[100%]'
      >
        <Likes score={score} />
        <div className='flex flex-1 h-min'>
          <img
            src={image}
            className='user max-w-[50px] max-h-[50px]'
          />
          <span className='font-bold text-Moderate_blue mt-auto mb-auto ml-[1em]'>{username}</span>
          <span className='text-Light_grayish_blue mt-auto mb-auto ml-[1em]'>{createdAt}</span>
          <button className='reply text-Moderate_blue mt-auto mb-auto ml-auto'>Reply</button>
        </div>
        <p className='comment mt-[1em]'>{content}</p>
      </article>
      <article className='border-l-4 border-Grayish_blue max-w-[95%] ml-auto'>
        {replies &&
          replies.map((reply) => (
            <Reply
              id={reply.id}
              score={reply.score}
              content={reply.content}
              createdAt={reply.createdAt}
              username={reply.user.username}
              image={reply.user.image.png || reply.user.image.webp}
              replyingTo={reply.replyingTo}
            />
          ))}
      </article>
    </section>
  );
}
