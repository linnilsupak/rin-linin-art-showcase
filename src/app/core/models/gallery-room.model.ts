import { ArtworkLabel } from './artwork-label.model';

export interface GalleryRoom {
  [key: string]: ArtworkLabel;
}

export interface GalleryRooms {
  [key: string]: ArtworkLabel[];
}
