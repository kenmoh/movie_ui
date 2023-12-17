"use client";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";

type CardProps = {
  imageUrl: string;
  rating: number | string;
  title: string;
};

const MovieCard = ({ imageUrl, rating, title }: CardProps) => {
  return (
    <div className="mt-6">
      <Card className="col-span-12 sm:col-span-4 h-[224px] mb-3">

        <Image
          width={224}
          height={112}
          alt={title}
          src={imageUrl}
          style={{
            borderRadius: 10,
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Card>
      <div className="flex justify-between">
        <small className="font-bold">{title}</small>
        <div className="flex gap-1">
          <small className="">{rating}</small>
          <IoIosStar />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
