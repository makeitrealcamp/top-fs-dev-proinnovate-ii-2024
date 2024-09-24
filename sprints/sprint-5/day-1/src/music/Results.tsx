import { Album, Artist, Playlist } from '../music/results.types';
import { ResultAlbum } from './ResultAlbum';
import { ResultArtist } from './ResultArtist';
import { ResultPlaylist } from './ResultPlaylist';

interface ResultsProps {
  results: Album[] | Artist[] | Playlist[];
  selectedOption: 'album' | 'artist' | 'playlist';
  searchQuery: string;
}

export const Results = ({
  results,
  selectedOption,
  searchQuery,
}: ResultsProps) => {
  if (!results || results.length === 0) {
    return searchQuery !== '' ? <p>No results found.</p> : null;
  }

  return (
    <ul className="grid grid-cols-3 gap-4">
      {results.map((item: Album | Artist | Playlist) => {
        switch (selectedOption) {
          case 'artist': {
            const artistItem = item as Artist;
            return (
              <li key={artistItem.id} className="py-2 border-b border-gray-200">
                <ResultArtist artist={artistItem} />
              </li>
            );
          }
          case 'playlist': {
            const playlistItem = item as Playlist;
            return (
              <li
                key={playlistItem.id}
                className="py-2 border-b border-gray-200"
              >
                <ResultPlaylist playlist={playlistItem} />
              </li>
            );
          }
          case 'album':
          default: {
            const albumItem = item as Album;
            return (
              <li key={albumItem.id} className="py-2 border-b border-gray-200">
                <ResultAlbum album={albumItem} />
              </li>
            );
          }
        }
      })}
    </ul>
  );
};
