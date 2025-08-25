import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

// Funktion som hämtar en story från Storyblok baserat på en slug
const fetchHomePage = async () => {
  // Skapar en Storyblok API-klient som vi kan använda för att göra anrop
  const client = getStoryblokApi();

  // Hämtar storyn från "tours"-mappen med den specifika sluggen
  // version: "draft" hämtar den senaste versionen, även om den inte är publicerad
  const response = await client.getStory(`home`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: "recommended_tours.tours",
  });

  // Returnerar story-objektet som innehåller all data (titel, content, fält osv.)
  return response.data.story;
};
export default async function Home() {
  const story = await fetchHomePage();
  return <StoryblokStory story={story} />;
}
