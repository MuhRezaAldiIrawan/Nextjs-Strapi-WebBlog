export type GenresField = {
    id: number
    title: string
}

export type BlogDetail = {
    id: string
    title: string
    content: string
    author: string
    date: string
    genres: GenresField
    images: { url: string }
};