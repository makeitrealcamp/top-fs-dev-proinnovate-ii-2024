
import { Artist } from './results.types';

export const ResultArtist = ({ artist }: { artist: Artist }) => {
  const sortedImages = [...artist.images].sort((a, b) => a.width - b.width);

  const srcSet = sortedImages
    .map((image) => `${image.url} ${image.width}w`)
    .join(', ');

  const sizes = '(max-width: 600px) 64px, (max-width: 1200px) 300px, 640px';

  const defaultImageUrl =
    sortedImages.find((img) => img.width === 300)?.url || sortedImages[0]?.url;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure className="max-w-lg">
        <img
          className="h-auto max-w-full rounded-lg"
          src={defaultImageUrl}
          srcSet={srcSet}
          sizes={sizes}
          alt={artist.name}
        />
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {artist.name}
        </figcaption>
      </figure>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {artist.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Followers: {artist.followers}
        </p>
        <div className="flex gap-2 flex-wrap">
          {artist.genres.length > 0 &&
            artist.genres.map((genre, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white"
              >
                {genre}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
