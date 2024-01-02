"use server";
const STRAPI_URL = process.env.STRAPI_URL;
import { cookies } from "next/headers";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
    author?: string[];
    content?: string[];
    genres?: string[];
  };
  message?: string | null;
};

const BlogSchema = z.object({
  id: z.string(),
  genres: z.string({
    invalid_type_error: "Please select a genre.",
  }),
  title: z.string({
    required_error: "Please enter a title.",
    invalid_type_error: "Please enter a valid title.",
  }),
  author: z.string({
    required_error: "Please enter an author.",
    invalid_type_error: "Please enter a valid author.",
  }),
  content: z.string({
    required_error: "Please enter content.",
    invalid_type_error: "Please enter a valid content.",
  }),
  date: z.string(),
});

const CreateBlog = BlogSchema.omit({ id: true, date: true });

export async function createBlog(prevState: State, formData: FormData) {

  const validatedFields = CreateBlog.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    content: formData.get("content"),
    genres: formData.get("genres"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Blog.",
    };
  }

  // Prepare data for insertion into the database
  const { title, author, content, genres } = validatedFields.data;

  const date = new Date().toISOString().split("T")[0];

  const dataToSend = {
    data: {
      title,
      author,
      content,
      status,
      date,
      genres: {
        connect: [{ id: genres }],
      },
    },
  };

  try {
    const response = await fetch(STRAPI_URL + "/api/blogs", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok)
      return { ok: false, error: data.error.message, data: null };
    if (response.ok && data.error)
      return { ok: false, error: data.error.message, data: null };
  } catch (err) {
    return { error: "Database Error: Failed to Create blogs" };
  }
  revalidatePath("/dashboard/blogs");
  redirect("/dashboard/blogs");
}