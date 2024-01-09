
'use client'
import Link from "next/link";
import { Label } from "@/components/ui/label"
import { GenresField, AuthorsField } from '@/app/lib/definitions'
import { createblog } from '@/app/lib/actions';
import { useFormState } from 
    import { SERVER_PROPS_EXPORT_ERROR } from "next/dist/lib/constants";




export default async function CreateForm({ getGenres, getAuthors }: { getGenres: GenresField[], getAuthors: AuthorsField[] }) {

    const initialState = { message: null, errors: {} };

    const { state, dispatch } = useFormState(createblog, initialState);


    const dateFormatter = new Intl.DateTimeFormat('id', { day: 'numeric', month: 'long', weekday: "long", year: "numeric" });

    return (
        <div className="bg-white dark:bg-gray-800/40 backdrop-blur-2xl  rounded-2xl shadow-lg w-full relative p-4 mb-4">
            <div className="flex justify-between">
                <p className="dark:text-slate-200">
                    <span className="font-medium border-b border-dashed border-pink-400">
                        Create Blog
                    </span>
                </p>
                <p className="dark:text-slate-200">
                    <span className="font-medium">Today </span>: {dateFormatter.format(new Date())}
                </p>
            </div>

            {/* <form action={dispatch}>
                <div className="grid-cols-2 gap-4 flex no-wrap">
                    <div className="w-full max-w-sm items-center gap-1.5 mt-5">
                        <Label htmlFor="email" className="mb-3">Title</Label>
                        <input className="w-full max-w-sm rounded " style={{ height: 40, backgroundColor: 'white', border: '1px solid #ccc', padding: '7px' }} placeholder="title" />
                        {state.errors?.title ? (
                            <div
                                id="customer-error"
                                aria-live="polite"
                                className="mt-2 text-sm text-red-500"
                            >
                                {state.errors.title.map((error: string) => (
                                    <p key={error}>{error}</p>
                                ))}
                            </div>
                        ) : null}
                    </div>

                    <div className=" w-full  items-center gap-1.5 mt-5">
                        <Label htmlFor="email" className="mb-3">Genre</Label>
                        <select className="w-full max-w-sm rounded " style={{ height: 40, backgroundColor: 'white', border: '1px solid #ccc', padding: '7px' }}>
                            {getGenres?.map((genre) => (
                                <option key={genre.id} value={genre.id}  >{genre.title}</option>
                            ))}
                        </select>
                    </div>
                    {state.errors?.genres ? (
                        <div
                            id="customer-error"
                            aria-live="polite"
                            className="mt-2 text-sm text-red-500"
                        >
                            {state.errors.genres.map((error: string) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    ) : null}
                </div>

                <div className="grid-cols-2 gap-4 flex no-wrap">
                    <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                        <Label htmlFor="email" className="mb-3">Author</Label>
                        <select className="w-full max-w-sm rounded " style={{ height: 40, backgroundColor: 'white', border: '1px solid #ccc', padding: '7px' }}>
                            {getAuthors?.map((author) => (
                                <option key={author.id} value={author.id}  >{author.name}</option>
                            ))}
                        </select>
                        {state.errors?.author ? (
                            <div
                                id="customer-error"
                                aria-live="polite"
                                className="mt-2 text-sm text-red-500"
                            >
                                {state.errors.author.map((error: string) => (
                                    <p key={error}>{error}</p>
                                ))}
                            </div>
                        ) : null}
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                        <Label htmlFor="email" className="mb-3">Date</Label>
                        <input type="date" className="w-full max-w-sm rounded " style={{ height: 40, backgroundColor: 'white', border: '1px solid #ccc', padding: '7px' }} />
                        {state.errors?.date ? (
                            <div
                                id="customer-error"
                                aria-live="polite"
                                className="mt-2 text-sm text-red-500"
                            >
                                {state.errors.date.map((error: string) => (
                                    <p key={error}>{error}</p>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className="grid w-full gap-1.5 mt-5">
                    <Label htmlFor="message" className="mb-3">Content</Label>
                    <textarea className="w-full max-w-sm rounded " style={{ height: 200, backgroundColor: 'white', border: '1px solid #ccc', padding: '7px' }} placeholder="content" />
                    {state.errors?.content ? (
                        <div
                            id="customer-error"
                            aria-live="polite"
                            className="mt-2 text-sm text-red-500"
                        >
                            {state.errors.content.map((error: string) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    ) : null}
                </div>
            </form> */}

        </div>
    );
}