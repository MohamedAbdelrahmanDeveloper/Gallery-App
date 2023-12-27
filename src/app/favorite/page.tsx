import cloudinary from "cloudinary";
import CloudinaryImage from "../../components/ImageAndGrid/CloudinaryImage";
import { SearchResultType } from "@/types/types";
import ImageAndGrid from "@/components/ImageAndGrid/ImageAndGrid";

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as SearchResultType;
    return (
      <div className='p-4'>
        <ImageAndGrid images={results.resources}/>
      </div>
    )
  }