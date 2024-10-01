import { useEffect, useState } from 'react';
import { Results } from '../music/Results';
import { SearchDropdown } from '../music/SearchDropdown';
import { useSearch } from '../hooks/useSearch';
import { SortDropdown } from '../music/DropDown';

export const MusicPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<
    'album' | 'artist' | 'playlist'
  >('album');
  // const [results, setResults] = useState<Album[] | Artist[] | Playlist[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  const { results, loading, error, setSortOption } = useSearch({
    searchQuery,
    selectedOption,
  });

  return (
    <div className="flex flex-col h-[1200px] ">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            My Music APP
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="my-8">
            <SearchDropdown
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              // setResults={setResults}
              // setLoading={setLoading}
              // setError={setError}
            />
          </div>
          <div>
            <SortDropdown setSortOption={setSortOption} />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <Results
            results={results}
            selectedOption={selectedOption}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  );
};
