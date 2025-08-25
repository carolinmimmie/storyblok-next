import Link from "next/link";
import React from "react";
import type { ISbStoryData, ISbComponentType } from "@storyblok/react";

interface IRecommendedTourContent {
  name: string;
  price: number;
  location: string;
  main_image: {
    filename: string;
    alt: string;
  };
}

interface RecommendedTourProps {
  story: ISbStoryData<ISbComponentType<string> & IRecommendedTourContent>;
}

const RecommendedTour: React.FC<RecommendedTourProps> = ({ story }) => {
  return (
    <div className="bg-white rounded-sm shadow">
      <img
        className="aspect-video object-cover w-full"
        src={story.content.main_image.filename}
        alt={story.content.main_image.alt}
      />
      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>{story.content.name}</h3>
          <p>${Number(story.content.price).toFixed(2)}</p>
        </div>
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {story.content.location}, Spain
        </p>
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${story.full_slug}`}
        >
          View tour
        </Link>
      </div>
    </div>
  );
};

export default RecommendedTour;
