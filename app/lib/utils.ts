import data from './data.json';

export function extractReplyTo(content: string) {
  const tagged = content
    .split(' ')
    .filter((word) => word[0] === '@')
    .join('');

  return data.comments.some((comment) => comment.user.username === tagged.slice(1, tagged.length)) ? tagged.slice(1, tagged.length) : '';
}
