import cloudinary from 'cloudinary'
import CloudinaryImage from './CloudinaryImage'
import { SearchForm } from './Search';
import Button from './button';
import ShowModal from '../../components/modals/ShowModal';


export type SearchResultType = {
  resources : {
    public_id: string;
    tags: string[]
  }[];
  error: string
}

async function GalleryPage({ searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  let results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by('created_at', 'asc')
    .with_field("tags")
    .max_results(30)
    .execute().catch(error=> {      
      return {
        error: error.message
      }
    })) as SearchResultType;

    if (results.error) {      
      return <div>
        {results.error}
      </div>
    }
    
    function getCol(colIndex: number) {
      return results.resources.filter((resource, index)=>{
        return index % 3 === colIndex
      })
    }

  return (
    <div className='p-4'>
      <div>
        <SearchForm initialSearch={search} />
      </div>
      <div className='grid grid-cols-3 gap-2 md:gap-4'>
        { results.resources.length > 0 ? [getCol(0),getCol(1),getCol(2)].map((col, indx)=>{
          return <div key={indx} className='flex flex-col gap-2 md:gap-4'>
            {col.map(e=> (
                <CloudinaryImage
                key={e.public_id}
                image={e}  
                />
            ))}
          </div>
        }) :
          <div className="h-[85vh] col-span-full flex justify-center items-center">
            <h1 className="text-xl text-base-content/70 font-medium">No Image yet</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default GalleryPage