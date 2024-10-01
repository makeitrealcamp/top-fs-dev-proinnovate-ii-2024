import { Album } from './results.types';

export const ResultAlbum = ({ album }: { album: Album }) => {

  const sortedImages = [...album.images].sort((a, b) => a.width - b.width);


  const srcSet = sortedImages.map((image) => `${image.url} ${image.width}w`).join(', ');


  const sizes = '(max-width: 600px) 64px, (max-width: 1200px) 300px, 640px';


  const defaultImageUrl = sortedImages.find((img) => img.width === 300)?.url || sortedImages[0]?.url;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure className="max-w-lg">
        <img
          className="h-auto max-w-full rounded-lg"
          src={defaultImageUrl}
          srcSet={srcSet}
          sizes={sizes}
          alt={album.name}
        />
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {album.name}
        </figcaption>
      </figure>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {album.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Release Date: {album.releaseDate}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
