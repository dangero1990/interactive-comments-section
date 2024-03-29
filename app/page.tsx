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
          user={comment.user}
          replies={comment.replies}
        />
      ))}
    </main>
  );
}
