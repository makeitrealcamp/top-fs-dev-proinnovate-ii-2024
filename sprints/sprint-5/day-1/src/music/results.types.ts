
export interface Artist {
  id: string;
  name: string;
  followers: number;
  genres: string[];
  images: Image[];
}

export interface Album {
  id: string;
  name: string;
  images: Image[];
  releaseDate: string;
  artist: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  images: Image[];
  owner: string;
}

export interface Image {
  url: string;
  height?: number;
  width?: number;
}
