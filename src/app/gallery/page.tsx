import cloudinary from 'cloudinary'
import CloudinaryImage from '../../components/ImageAndGrid/CloudinaryImage'
import { SearchForm } from './Search';
import { SearchResultType } from '@/types/types';
import ImageAndGrid from '@/components/ImageAndGrid/ImageAndGrid';

async function GalleryPage({ searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  let results = (await cloudinary.v2.search
    .expression(`resource_type:image ${search ? ` AND tags=${search}` : ""}`)
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
    
    

  return  (
    <div className='p-4'>
      <div>
        <SearchForm initialSearch={search} />
      </div>
      <ImageAndGrid images={results.resources}/>
    </div>
  )
} 

export default GalleryPage