import { title } from "@/components/primitives";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { getMovies } from "../utils/api";
import { Avatar } from "@nextui-org/react";
import { IoIosStar } from "react-icons/io";


type MoviesData = {
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
const MoviesPage = async () => {
  const data: [] = await getMovies('movie')

  return (
    <div className="flex gap-6">
      <section className="hidden md:block w-1/6  min-h-screen overflow-y-auto px-1">
        <h1 className="mb-10">Trending Movies</h1>
        {data?.map((movie: MoviesData) => (
          movie.average_rating >= 3.5 &&
          <Link className="flex gap-3 items-center hover:bg-gray-800 duration-100 mb-5" href={`/books/${movie.id}`} key={movie.id}>
            <Avatar isBordered radius="sm" src={movie.cover_image_url} />
            <div className="">
              <p className=" text-[11px]">The have and the have not</p>
              <div className="flex gap-1 items-center">
                <small className="text-slate-400 text-[10px]">{movie.average_rating.toFixed(1)} </small>
                <IoIosStar size={12} />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {data ? <section>
        <div className="flex justify-between items-center ">
          <h3 className={`${title()}`}>Movies</h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-5">
          {data?.map((movie: MoviesData) =>

            <div key={movie.id}>
              <Link
                href={{
                  pathname: `/movies/${movie.id}`,
                  query: { id: movie.id },
                }}
              >
                <MovieCard
                  imageUrl={movie.cover_image_url}
                  rating={movie?.average_rating !== 0 ? movie?.average_rating.toFixed(1) : ''}
                  title={movie.title}
                />
              </Link>
            </div>

          )}
        </div>
      </section> : <h1>No Movies</h1>}
    </div>
  );
};

export default MoviesPage;
