import useData from './useData';

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export default function useGames() {
  return useData<Genre>('/genres');
}
