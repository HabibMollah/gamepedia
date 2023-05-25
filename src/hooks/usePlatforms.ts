import useData from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms(selectedPlatform: Platform | null) {
  return useData<Platform>(
    '/platforms/lists/parents',
    { params: { platforms: selectedPlatform?.slug } },
    [selectedPlatform?.id]
  );
}

export default usePlatforms;
