export interface MovieProps {
    adult: boolean;
    id: number;
    backdrop_path: string;
    genre_ids: number[];
    media_type: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}