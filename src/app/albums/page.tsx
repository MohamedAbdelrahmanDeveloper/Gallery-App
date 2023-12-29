import cloudinary from "cloudinary";
import Link from "next/link";
import DeleteFolder from "./deleteFolder";

export type Folder = { name: string; path: string };


export const revalidate = 10

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <section>
      <div className="flex flex-col gap-8 p-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {folders.map((folder) => (
            <div key={folder.path} className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Folder :</div>
                  <Link href={`/albums/${folder.path}`}>
                    <div className="stat-value">{folder.name}</div>
                  </Link>
                  <div className="stat-desc flex justify-end">
                    <DeleteFolder folder={folder.name} />
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
