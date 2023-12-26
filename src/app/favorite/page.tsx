import cloudinary from "cloudinary";
import { SearchResultType } from "../gallery/page";
import Button from "../gallery/button";
import CloudinaryImage from "../gallery/CloudinaryImage";

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResultType[] };

    function getCol(colIndex: number) {
        return results.resources.filter((resource, index)=>{
          return index % 3 === colIndex
        })
      }
  
    return (
      <div className='p-4'>
        <div className='grid grid-cols-3 gap-2 md:gap-4'>
          {[getCol(0),getCol(1),getCol(2)].map((col, indx)=>{
            return <div key={indx} className='flex flex-col gap-2 md:gap-4'>
              {col.map((e: any)=> (
                 <div key={e.public_id + 'div'}>
                  {/* <Button public_id={e.public_id} isFav={true}/> */}
                  <CloudinaryImage
                    className="rounded shadow"
                    key={e.public_id}
                    width="960"
                    height="600"
                    src={e.public_id}
                    sizes="100vw"
                    alt="Description of my image"
                  />
                </div>
              ))}
            </div>
          })}
        </div>
      </div>
    )
  }