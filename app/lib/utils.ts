import data from './data.json';

export function extractReplyTo(content: string) {
  const tagged = content
    .split(' ')
    .filter((word) => word[0] === '@')
    .join('');

  return data.comments.some((comment) => comment.user.username === tagged.slice(1, tagged.length)) ? tagged.slice(1, tagged.length) : null;
}

export function dayBuilder(date: Date) {
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  switch (true) {
    case diff === 0:
      return 'Today';
    case diff === 1:
      return 'Yesterday';
    case diff < 7:
      return `${diff} days ago`;
    case diff > 7 && diff < 30:
      return Math.floor(diff / 7) > 1 ? `${Math.floor(diff / 7)} weeks ago` : '1 week ago';
    case diff > 30:
      return Math.floor(diff / 30) > 1 ? `${Math.floor(diff / 7)} months ago` : '1 month ago';
    case diff > 365:
      return Math.floor(diff / 365) > 1 ? `${Math.floor(diff / 365)} years ago` : '1 year ago';
    default:
  }
}
