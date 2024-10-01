export const SortDropdown = ({
  setSortOption,
}: {
  setSortOption: (arg: string) => void;
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSortOption(e.target.value);
  };

  return (
    <div>
      <label
        className="block text-sm font-medium text-white-700 "
        htmlFor="sort"
      >
        Sort By:
      </label>
      <select
        className="flex-shrink-0 z-10 py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        name=""
        id="sort"
        onChange={handleSortChange}
      >
        <option value="name">Name</option>
        <option value="releaseDate">Release Date</option>
        <option value="owner">Owner</option>
      </select>
    </div>
  );
};
