// "use client"
// @ts-ignore
import { useFormState } from "react-dom";
import { Card, Divider, CardBody, CardHeader, Textarea, Input, Button } from "@nextui-org/react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";

import CastChip from "@/components/CastChip";
import { addComment } from "@/app/utils/api";
import { getMovie } from "@/app/utils/api";
import Details from "@/components/Details";



type ReviewProps = {
  author: string,
  comment: string,
  rating: number
}

type MovieData = {
  title: string
  cover_image_url: string,
  description: string,
  length: number,
  genre: string,
  casts: string,
  id: number,
  thriller: string,
  average_rating: number,
  reviews: (ReviewProps)[]
}


type IdParams = {
  params: { id: string }
}

const MovieDetailPage = async ({ params }: IdParams) => {

  const movie: MovieData = await getMovie(params.id)

  // const initialState = { message: null, errors: {} }
  // const [state, formAction] = useFormState(addComment, initialState)

  // console.log(state.author)

  // const handleClose = () => {
  //   if (state.type === 'error') {
  //     toast.error('All fields are required!', { position: 'top-right' })
  //   } else {
  //     toast.success('Comment added!', { position: 'top-right' })

  //   }

  // }


  return (
    <>
      <div className="w-3/4 mx-auto">

        <Details id={params.id} />
        <Card className="col-span-12 h-[400px]">
          <Image
            alt={movie?.title}
            src={movie?.cover_image_url}
            width={224}
            height={600}
            style={{
              borderRadius: 10,
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />

        </Card>
        <div className="flex gap-2 items-center justify-between mt-5">
          <div className="flex gap-5">
            <p className="text-white/90 font-medium text-md ">{movie?.title}</p>
            <Divider className="bg-red-400" orientation="vertical" />
            <p className="text-white/90 font-medium text-md">{movie?.length} hrs</p>
          </div>
          {movie?.average_rating > 0 ? <div className="flex gap-1 ">
            <small className="">{movie.average_rating.toFixed(1)}</small>
            <IoIosStar />
          </div> : ''}
        </div>
        <div className="mt-10">
          <h1 className="text-2xl text-gray-300 font-bold mb-5 uppercase ">
            {movie?.genre}
          </h1>
          <div className='flex gap-2 flex-wrap my-6'>
            {movie?.casts?.split(',').map((cast: string, index) => (
              <CastChip name={cast} key={index} />
            ))}
          </div>

        </div>
        <Card className="mb-6">
          <CardBody>
            <p>{movie?.description}</p>
          </CardBody>
        </Card>
        {
          movie?.reviews && movie.reviews.map(review => (
            <Card className="my-2" key={review.author}>
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <div className="flex gap-4 items-center justify-center">
                    <p className="">{review.author}</p>
                    <div className="flex gap-1 items-center mt-1">
                      <small className="">{review.rating}</small>
                      <IoIosStar color="gray" />
                    </div>
                  </div>
                  <p className="text-small text-default-500">{review.author}</p>
                </div>
              </CardHeader>
              <CardBody>
                <p>{review?.comment}</p>
              </CardBody>

            </Card>
          ))
        }

        {/* COMMENT  FORM*/}
        {/* <form action={formAction} className="mt-10">

          <Input

            size="sm"
            placeholder="Enter your name"
            variant="bordered"
            isRequired
            name="movie_id"
            value={params.id}
            type="hidden"
            className="hidden"
            autoComplete="off"

          />
          <Input
            autoFocus
            size="sm"
            placeholder="Enter your name"
            variant="bordered"
            isRequired
            name="author"
            className="mb-5"

          />

          <Input
            size="sm"
            placeholder="Enter your rating"
            variant="bordered"
            isRequired
            name="rating"
            type="number"
            max={5}
            min={1}
            pattern="1-5"
          />
          <Textarea

            placeholder="Enter your comment"
            size="sm"
            variant="bordered"
            isRequired
            name="comment"

          />
      
          <Button type="submit" className="mt-5" color="primary">Submit</Button>
        </form> */}

      </div>
    </>
  );
};

export default MovieDetailPage;
