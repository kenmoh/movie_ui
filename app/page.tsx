
import Link from "next/link";
import { title } from "@/components/primitives";
import MovieCard from "@/components/MovieCard";
import { getMovies } from "./utils/api";

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


const Home = async () => {

  const data: [] = await getMovies('movie')

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Review&nbsp; Your Favourite&nbsp; </h1>
          <h1 className={title({ color: "violet" })}> Movies, Books, Music</h1>
          <br />
        </div>
      </section>
      {data ? <section>
        <div className="flex justify-between items-center ">
          <h3 className={`${title()}`}>Highest Rated</h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-5">
          {data?.map((movie: MoviesData) => (
            movie.average_rating >= 3.5 && <div key={movie.id}>
              <Link
                href={`/movies/${movie.id}`}
              >
                <MovieCard
                  imageUrl={movie.cover_image_url}
                  rating={movie?.average_rating !== 0 ? movie?.average_rating.toFixed(1) : ''}
                  title={movie.title}
                />
              </Link>
            </div>
          )

          )}
        </div>
      </section> : <h1>No Movies</h1>}


    </>
  );
}

export default Home;