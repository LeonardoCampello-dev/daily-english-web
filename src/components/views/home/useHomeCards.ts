import { CardProps } from '../../layout';

export const useHomeCards = (): CardProps[] => {
  return [
    {
      title: 'Words',
      imagePath: 'https://i.ibb.co/k5mTmK0/board-game.png',
      redirectPath: '/words'
    },
    {
      title: 'Phrases',
      imagePath: 'https://i.ibb.co/k5mTmK0/board-game.png',
      redirectPath: '/phrases'
    },
    {
      title: 'Articles',
      imagePath: 'https://i.ibb.co/k5mTmK0/board-game.png',
      redirectPath: '/articles'
    },
    {
      title: 'Songs',
      imagePath: 'https://i.ibb.co/k5mTmK0/board-game.png',
      redirectPath: '/songs'
    },
    {
      title: 'Podcasts',
      imagePath: 'https://i.ibb.co/k5mTmK0/board-game.png',
      redirectPath: '/podcasts'
    }
  ];
};
