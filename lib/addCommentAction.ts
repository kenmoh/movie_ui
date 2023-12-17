import { revalidatePath } from "next/cache";

const BASE_URL = "";
export async function addComment(data: FormData, id: number) {
  const author = data.get("author");
  const comment = data.get("comment");

  await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movie_id: id,
      author,
      comment,
    }),
  });

  revalidatePath(`/movies/${id}`);
}
