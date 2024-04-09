export default function ContentBuilder(content: string, replyingTo?: string) {
  const usernameRef = `@${replyingTo}`;
  if (content.includes(usernameRef) && usernameRef.length > 2) {
    const partOne = content.slice(0, content.indexOf(usernameRef));
    const partTwo = content.slice(content.indexOf(usernameRef) + usernameRef.length, content.length);

    return (
      <p className='comment mt-[1em]'>
        {partOne}
        <span className='text-Moderate_blue font-bold'>{usernameRef}</span>
        {partTwo}
      </p>
    );
  } else if (replyingTo) {
    return (
      <p className='comment mt-[1em]'>
        <span className='text-Moderate_blue font-bold'>{`@${replyingTo} `}</span>
        {content}
      </p>
    );
  } else {
    return <p className='comment mt-[1em]'>{content}</p>;
  }
}
