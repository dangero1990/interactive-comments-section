import Card from './ui/Card';
import data from './lib/data.json';

export default function Home() {
  const userComments: any[] = data.comments;

  return (
    <main className='w-[80%] m-auto'>
      {userComments.map((comment) => (
        <Card
          key={comment.id}
          id={comment.id}
          content={comment.content}
          createdAt={comment.createdAt}
          score={comment.score}
          username={comment.user.username}
          image={comment.user.image.png || comment.user.image.webp}
          replies={comment.replies}
        />
      ))}
    </main>
  );
}
