import React from "react";
// Importerar Storyblok-funktioner
// getStoryblokApi används för att hämta data
// StoryblokStory används för att rendera storyn direkt i React
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories.map((story) => ({ slug: story.slug }));
};

// Funktion som hämtar en story från Storyblok baserat på en slug
const fetchTourPage = async (slug: string) => {
  // Skapar en Storyblok API-klient som vi kan använda för att göra anrop
  const client = getStoryblokApi();

  // Hämtar storyn från "tours"-mappen med den specifika sluggen
  // version: "draft" hämtar den senaste versionen, även om den inte är publicerad
  const response = await client.getStory(`tours/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  // Returnerar story-objektet som innehåller all data (titel, content, fält osv.)
  return response.data.story;
};

// React-komponent som representerar en tour-sida
// Async eftersom vi hämtar data innan vi renderar sidan
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TourPage = async (props: any) => {
  // Hämtar storyn från Storyblok med slug från URL:en (props.params.slug)
  const story = await fetchTourPage(props.params.slug);
  console.log(story);

  // Renderar storyn med StoryblokStory-komponenten
  // StoryblokStory gör att fälten och komponenterna från Storyblok visas korrekt
  return <StoryblokStory story={story} />;
};

// Exporterar komponenten så Next.js kan använda den som en sida
export default TourPage;
