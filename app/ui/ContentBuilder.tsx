import React from 'react';

export default function buildContent(content: string, username?: string) {
  const usernameRef = `@${username}`;
  if (content.includes(usernameRef)) {
    const partOne = content.slice(0, content.indexOf(usernameRef));
    const partTwo = content.slice(content.indexOf(usernameRef) + usernameRef.length, content.length);

    return (
      <p className='comment mt-[1em]'>
        {partOne}
        <span className='text-Moderate_blue font-bold'>{usernameRef}</span>
        {partTwo}
      </p>
    );
  } else if (username) {
    return (
      <p className='comment mt-[1em]'>
        <span className='text-Moderate_blue font-bold'>{`@${username} `}</span>
        {content}
      </p>
    );
  } else {
    return <p className='comment mt-[1em]'>{content}</p>;
  }
}
