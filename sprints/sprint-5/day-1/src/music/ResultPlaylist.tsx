import { Playlist } from './results.types';

export const ResultPlaylist = ({ playlist }: { playlist: Playlist }) => {
  const { images, name, owner } = playlist || {};

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure className="max-w-lg">
        <img
          className="h-auto max-w-full rounded-lg"
          src={images && images[0]?.url}
          alt={name}
        />
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {name}
        </figcaption>
      </figure>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Owner: {owner}
        </p>
      </div>
    </div>
  );
};
