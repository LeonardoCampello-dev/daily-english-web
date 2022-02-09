import { CardProps } from '../../layout';

export const useHomeCards = (): CardProps[] => {
  return [
    {
      title: 'Words',
      redirectPath: '/words'
    },
    {
      title: 'Phrases',
      redirectPath: '/phrases'
    },
    {
      title: 'Articles',
      redirectPath: '/articles'
    },
    {
      title: 'Songs',
      redirectPath: '/songs'
    },
    {
      title: 'Podcasts',
      redirectPath: '/podcasts'
    }
  ];
};
