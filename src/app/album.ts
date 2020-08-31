import { Track } from './track';

export interface Album {
    name: string;
    releaseDate: string;
    coverImate: string;
    tracks: Track[];
}
