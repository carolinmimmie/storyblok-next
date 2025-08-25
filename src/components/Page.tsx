import React from "react";
import { StoryblokComponent } from "@storyblok/react";

const Page = (params: any) => {
  return (
    <main>
      {params.blok.blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok.id} />
      ))}
    </main>
  );
};

export default Page;
