import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { IoIosStar } from "react-icons/io";

import { title } from "@/components/primitives";
import MovieCard from "@/components/MovieCard";
import { getMovies } from "../utils/api";


type BookData = {
  title: string
  cover_image_url: string,
  description: string,
  length: number,
  genre: string,
  casts: string,
  id: number,
  thriller: string,
  average_rating: number,

}
const BookPage = async () => {
  const data: [] = await getMovies('book')

  return (
    <div className="flex gap-6">
      <section className="hidden md:block w-1/6 min-h-screen overflow-y-auto px-1">
        <h1 className="mb-10">Trending Books</h1>
        {data?.map((book: BookData) => (
          book.average_rating >= 3.0 &&
          <Link className="flex gap-3 items-center hover:bg-gray-800 duration-100" href={`/books/${book.id}`} key={book.id}>
            <Avatar isBordered radius="sm" src={book.cover_image_url} />
            <div className="">
              <p className=" text-[11px]">The have and the have not</p>
              <div className="flex gap-1 items-center">
                <small className="text-slate-400 text-[10px]">{book.average_rating.toFixed(1)} </small>
                <IoIosStar size={12} />
              </div>
            </div>
          </Link>
        ))}
      </section>
      {data ? <section className="w-full md:w-5/6 h-screen">
        <div className="flex justify-between items-center ">
          <h4 className={`${title()}`}>Books</h4>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-5">
          {data?.map((book: BookData) =>

            <div key={book.id}>
              <Link
                href={{
                  pathname: `/books/${book.id}`,
                  query: { id: book.id },
                }}
              >
                <MovieCard
                  imageUrl={book.cover_image_url}
                  rating={book?.average_rating !== 0 ? book?.average_rating.toFixed(1) : ''}
                  title={book.title}
                />
              </Link>
            </div>

          )}
        </div>
      </section> : <h1>No Books</h1>}
    </div>
  );
};

export default BookPage;
