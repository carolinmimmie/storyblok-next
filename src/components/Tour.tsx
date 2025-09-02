/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderRichText } from "@storyblok/react/rsc";
import Image from "next/image"; // 👈 importera next/image
import React from "react";

const Tour = (props: any) => {
  return (
    <main className="container mx-auto px-4 w-full pt-22 pb-16">
      <h1 className="text-3xl md:text-5xl font-bold">{props.blok.name}</h1>

      <div className="relative w-full h-[400px] mt-12">
        <Image
          src={props.blok.main_image.filename}
          alt={props.blok.name}
          fill // 👈 fyller containern
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 800px" // 👈 hjälper med optimering
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="mt-12 text-lg md:text-xl md:leading-relaxed">
          {props.blok.introduction}
        </p>
        <div
          className="flex flex-col gap-6"
          dangerouslySetInnerHTML={{
            __html: renderRichText(props.blok.body) as string,
          }}
        ></div>
      </div>
    </main>
  );
};

export default Tour;
