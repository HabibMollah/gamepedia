import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export default function useGames() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
}
