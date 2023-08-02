export interface MoviesData{
    page: number;
    results: MovieItem[];
    total_pages: number;
    total_results: number;
}

export interface MovieItem{
    backdrop_path : string;
    poster_path : string;
    id : number;
    title : string;
    vote_average : number;
    relase_date : string;
    genre_ids : number[];
}