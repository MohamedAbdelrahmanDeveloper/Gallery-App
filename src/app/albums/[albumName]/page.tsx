import cloudinary from "cloudinary";
import { SearchResultType } from "@/types/types";
import ImageAndGrid from "@/components/ImageAndGrid/ImageAndGrid";

export default async function GalleryPage({
  params: { albumName },
}: {
  params: {
    albumName: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as SearchResultType;
    
  return (
    <section>
      <div className="flex flex-col gap-8 p-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Album {albumName}</h1>
        </div>
       <ImageAndGrid images={results.resources} />
      </div>
    </section>
  );
}
