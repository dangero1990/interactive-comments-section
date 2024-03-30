import type { Reply } from './definitions';

class ResponseObj {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  constructor(response: Reply) {
    this.id = response.id;
    this.content = response.content;
    this.createdAt = response.createdAt;
    this.score = response.score;
    this.user = {
      image: {
        png: response.user.image.png,
        webp: response.user.image.webp,
      },
      username: response.user.username,
    };
  }
}
