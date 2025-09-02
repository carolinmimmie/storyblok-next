import Link from "next/link";
import Image from "next/image"; // 👈 lägg till detta
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RecommendedTour = (props: any) => {
  return (
    <div className="bg-white rounded-sm shadow">
      <Image
        className="aspect-video object-cover w-full"
        src={props.story.content.main_image.filename}
        alt={props.story.content.main_image.alt}
        width={800} // 👈 sätt bredd
        height={450} // 👈 sätt höjd (matchar aspect-video ungefär)
      />
      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>{props.story.content.name}</h3>
          <p>${Number(props.story.content.price).toFixed(2)}</p>
        </div>
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {props.story.content.location}, Spain
        </p>
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${props.story.full_slug}`}
        >
          View tour
        </Link>
      </div>
    </div>
  );
};

export default RecommendedTour;
