import { addComment, getMovie } from "@/app/utils/api";
import CastChip from "@/components/CastChip";
import Details from "@/components/Details";
import { Card, Divider, CardBody, CardHeader } from "@nextui-org/react";


import Image from "next/image";
import { IoIosStar } from "react-icons/io";

type ReviewProps = {
    author: string,
    comment: string,
    rating: number
}

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
    reviews: (ReviewProps)[]
}


type IdParams = {
    params: { id: string }
}

const BookDetailPage = async ({ params }: IdParams) => {

    const music: MusicData = await getMovie(params.id)


    return (
        <>
            <div className="w-3/4 mx-auto">

                <Details id={params.id} />
                <Card className="col-span-12 h-[400px]">
                    <Image
                        alt={music?.title}
                        src={music?.cover_image_url}
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
                        <p className="text-white/90 font-medium text-md ">{music?.title}</p>
                        <Divider className="bg-red-400" orientation="vertical" />
                        <p className="text-white/90 font-medium text-md">{music?.length} hrs</p>
                    </div>
                    {music?.average_rating > 0 ? <div className="flex gap-1 ">
                        <small className="">{music.average_rating.toFixed(1)}</small>
                        <IoIosStar />
                    </div> : ''}
                </div>
                <div className="mt-10">
                    <h1 className="text-2xl text-gray-300 font-bold mb-5 uppercase ">
                        {music?.genre}
                    </h1>
                    <div className='flex gap-2 flex-wrap my-6'>
                        {music?.casts?.split(',').map((cast: string, index) => (
                            <CastChip name={cast} key={index} />
                        ))}
                    </div>

                </div>
                <Card className="mb-6">
                    <CardBody>
                        <p>{music?.description}</p>
                    </CardBody>
                </Card>
                {
                    music?.reviews && music.reviews.map(review => (
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
                                <p>{review.comment}</p>
                            </CardBody>

                        </Card>
                    ))
                }

            </div>
        </>
    );
};

export default BookDetailPage;
