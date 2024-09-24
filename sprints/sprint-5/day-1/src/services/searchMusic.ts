import { Album, Artist, Playlist } from "../music/results.types";


const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMusic = async (
  searchQuery: string,
  type: 'artist' | 'album' | 'playlist' = 'album'
): Promise<{ mappedResults: Artist[] | Album[] | Playlist[] }> => {
  if (!searchQuery) {
    return { mappedResults: [] };
  }

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchQuery}&type=${type}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Spotify API error: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log({ data });

    switch (type) {
      case 'album':
        return {
          mappedResults: (data.albums?.items || []).map((item: any) => ({
            id: item.id,
            name: item.name,
            images: item.images || null,
            releaseDate: item.release_date || 'Unknown',
            artist: item.artists[0]?.name || 'Unknown Artist',
          })),
        };
      case 'artist':
        return {
          mappedResults: (data.artists?.items || []).map((item: any) => ({
            id: item.id,
            name: item.name,
            followers: item.followers.total,
            genres: item.genres,
            images: item.images,
          })),
        };
      case 'playlist':
        return {
          mappedResults: (data.playlists?.items || []).map((item: any) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            images: item.images || null,
            owner: item.owner.display_name,
          })),
        };
      default:
        return { mappedResults: [] };
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};
