import { title } from "@/components/primitives";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { getMovies } from "../utils/api";
import { IoIosStar } from "react-icons/io";
import { Avatar } from "@nextui-org/react";


type MusicData = {
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
const MusicPage = async () => {
  const data: MusicData[] = await getMovies('music')

  return (
    <div className="flex gap-6">
      <section className="hidden md:block w-1/6  min-h-screen overflow-y-auto px-1">
        <h1 className="mb-10">Trending Songs</h1>
        {data?.map((music: MusicData) => (
          music.average_rating >= 3.0 &&
          <Link className="flex gap-3 items-center hover:bg-gray-800 duration-100" href={`/books/${music.id}`} key={music.id}>
            <Avatar isBordered radius="sm" src={music.cover_image_url} />
            <div className="">
              <p className=" text-[11px]">The have and the have not</p>
              <div className="flex gap-1 items-center">
                <small className="text-slate-400 text-[10px]">{music.average_rating.toFixed(1)} </small>
                <IoIosStar size={12} />
              </div>
            </div>
          </Link>
        ))}
      </section>
      {data ? <section>
        <div className="flex justify-between items-center ">
          <h4 className={`${title()}`}>Music</h4>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-5">
          {data?.map((music: MusicData) =>

            <div key={music.id}>
              <Link
                href={
                  `/music/${music.id}`
                }
              >
                <MovieCard
                  imageUrl={music.cover_image_url}
                  rating={music?.average_rating !== 0 ? music?.average_rating.toFixed(1) : ''}
                  title={music.title}
                />
              </Link>
            </div>

          )}
        </div>
      </section> : <h1>No Music</h1>}
    </div>
  );
};

export default MusicPage;
