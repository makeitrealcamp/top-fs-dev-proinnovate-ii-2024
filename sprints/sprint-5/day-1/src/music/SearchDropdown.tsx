import { FormEvent } from 'react';

type SearchType = 'album' | 'artist' | 'playlist';

interface SearchDropdownProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedOption: SearchType;
  setSelectedOption: (option: SearchType) => void;
  // setResults: (results: any[]) => void;
  // setLoading: (loading: boolean) => void;
  // setError: (error: string | null) => void;
}

export const SearchDropdown = ({
  searchQuery,
  setSearchQuery,
  selectedOption,
  setSelectedOption,
}: SearchDropdownProps) => {
  const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value as SearchType);
  };

  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // fetchResults();
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex items-center">
        <select
          value={selectedOption}
          onChange={handleOptionSelect}
          className="flex-shrink-0 z-10 py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        >
          {['album', 'artist', 'playlist'].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <form className="relative w-full" onSubmit={handleSubmission}>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border-l border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder={`Search for ${selectedOption}...`}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
