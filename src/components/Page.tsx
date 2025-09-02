/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { StoryblokComponent } from "@storyblok/react";

const Page = (params: any) => {
  return (
    <main>
      {params.blok.blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};

export default Page;
