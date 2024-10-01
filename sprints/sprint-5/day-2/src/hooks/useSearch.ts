import { useCallback, useEffect, useMemo, useState } from 'react';
import { searchMusic } from '../services/searchMusic';
import { debounce } from '../utils/debounce';


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



  const fetchResults = useCallback(async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const { mappedResults } = await searchMusic(
        searchQuery,
        selectedOption
      );
      setResults(mappedResults);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedOption]);

  const debouncedFetchResults = useMemo(
    () => debounce(fetchResults, 2000), 
    [fetchResults]
  );

  useEffect(() => {
    if (searchQuery.trim()) {
      debouncedFetchResults();
    }
  }, [selectedOption, searchQuery, debouncedFetchResults]);



  // useEffect(() => {
  //   if (searchQuery.trim()) {
  //     fetchResults();
  //   }
  // }, [selectedOption, searchQuery]);

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
