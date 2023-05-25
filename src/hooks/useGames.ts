import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: { slug: string }[];
}

export default function useGames(selectedGenre: Genre | null) {
  return useData<Game>('/games', { params: { genres: selectedGenre?.slug } }, [
    selectedGenre?.id,
  ]);
}
