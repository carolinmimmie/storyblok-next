import RecommendedTour from "@/components/RecommendedTour";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

// Funktion som hämtar en story från Storyblok baserat på en slug
const fetchToursPage = async () => {
  // Skapar en Storyblok API-klient som vi kan använda för att göra anrop
  const client = getStoryblokApi();

  // Hämtar storyn från "tours"-mappen med den specifika sluggen
  // version: "draft" hämtar den senaste versionen, även om den inte är publicerad
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  // Returnerar story-objektet som innehåller all data (titel, content, fält osv.)
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: "draft",
  });
  return response.data.stories;
};

export default async function ToursPage() {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();
  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </div>
  );
}
