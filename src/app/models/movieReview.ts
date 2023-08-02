export interface Review{
    author : string;
    author_details : AuthorDetails
    content: string;
    id: string;
    created_at : string;
    updated_at: string;
    url : string;
}

export interface AuthorDetails{
    name: string;
    avatar_path: string;
    rating : string
    username : string;
}