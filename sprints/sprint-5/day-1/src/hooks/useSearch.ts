import { useCallback, useEffect, useMemo, useState } from 'react';
import { searchMusic } from '../services/searchMusic';
import { useThrottle } from './useThrottle';

type SearchType = 'album' | 'artist' | 'playlist';

export const useSearch = ({
  searchQuery,
  selectedOption,
}: {
  searchQuery: string;
  selectedOption: SearchType;
}) => {
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [sortOption, setSortOption] = useState('');

  const throttledSearchQuery = useThrottle(searchQuery, 5000);

  const fetchResults = useCallback(async () => {
    if (!throttledSearchQuery.trim()) return;

    setLoading(true);
    try {
      const { mappedResults } = await searchMusic(
        throttledSearchQuery,
        selectedOption
      );
      setResults(mappedResults);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [throttledSearchQuery, selectedOption]);
  useEffect(() => {
    if (searchQuery.trim()) {
      fetchResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption, searchQuery]);

  useEffect(() => {
    console.log('rendering');
  }, [searchQuery]);

  //memoize
  //useMemo is a hook that will only recompute the memoized value when one of the dependencies has changed.

  const sortedResults = useMemo(() => {
    const sorted = [...results].sort((a, b) => {
      console.log('sorted');
      if (sortOption === 'releaseDate') {
        return (
          new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
        );
      }
      if (sortOption === 'followers') {
        return a.followers - b.followers;
      }
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      }
    });
    return sorted;
  }, [sortOption, results]);

  console.log(sortedResults);
  return {
    results: sortedResults,
    setSortOption,
    loading,
    error,
  };
};
