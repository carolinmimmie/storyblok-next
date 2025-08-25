import type { PropsWithChildren } from "react"; // Typ för React-komponenter som tar children
import { storyblokInit } from "@storyblok/react"; // Funktion för att starta Storyblok i React
import React from "react";
import Tour from "./Tour";
import Page from "./Page";
import Hero from "./Hero";
import Grid from "./Grid";
import Feature from "./Feature";
import Testimonial from "./Testimonial";
import RecommendedTours from "./RecommendedTours";

// Här startar vi Storyblok i vår app
storyblokInit({
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
  }, // Här kan vi registrera komponenter som vi skapar i Storyblok
  enableFallbackComponent: true, // Om en komponent saknas används en standardkomponent istället för att krascha
});

// Skapar en React-komponent som fungerar som en "Provider" för Storyblok
const StoryblokProvider = ({ children }: PropsWithChildren) => {
  // "children" betyder allt innehåll som ligger innanför <StoryblokProvider> i appen
  // Just nu gör den inget annat än att visa det innehållet
  return <div>{children}</div>;
};

// Vi exporterar komponenten så att vi kan använda <StoryblokProvider> i appen
export default StoryblokProvider;
