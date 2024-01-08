"use server";


import { cookies } from "next/headers";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const STRAPI_URL = process.env.STRAPI_URL;

export type State = {
  errors?: {
    title?: string[];
    content?: string[];
    genres?: string[];
    author?: string[];
  };
  message?: string | null;
};


const BlogSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: "Please enter a title.",
  }),
  content: z.string({
    invalid_type_error: "Please enter content.",
  }),
  genres: z.string({
    invalid_type_error: "Please select a genre.",
  }),
  author: z.string({
    invalid_type_error: "Please select an author.",
  }),
  date: z.string(),
});

const CreateBlog = BlogSchema.omit({ id: true, date: true });
export async function createblog(prevState: State, formData: FormData) {


  const validatedFields = CreateBlog.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    genres: formData.get("genres"),
    author: formData.get("author"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Blog.",
    };
  }

  // Prepare data for insertion into the database
  const { title, content, genres, author } = validatedFields.data;

  const date = new Date().toISOString().split("T")[0];

  const dataToSend = {
    data: {
      title,
      content,
      genres: {
        connect: [{ id: genres }],
      },
      author: {
        connect: [{ id: author }],
      },
      date,
    },
  };

  try {
    const response = await fetch(STRAPI_URL + "/api/blogs", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"},
    });
    const data = await response.json();
    if (!response.ok)
      return { ok: false, error: data.error.message, data: null };
    if (response.ok && data.error)
      return { ok: false, error: data.error.message, data: null };
  } catch (err) {
    return { error: "Database Error: Failed to Create blog." };
  }
  revalidatePath("/home");
  redirect("/home");
}