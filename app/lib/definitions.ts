export type GenresField = {
    id: number
    title: string
}

export type AuthorsField = {
    id: number
    name: string
}

export type BlogDetail = {
    id: string
    title: string
    content: string
    author: string
    date: string
    genres: {
        id: number
        title: string
    }
    images: { url: string }
};