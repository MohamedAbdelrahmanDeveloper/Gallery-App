"use server";
import { ResultType } from "@/types/types";
import cloudinary from "cloudinary";



export async function setAsFavoriteAction(publicId: string,isFavorite: boolean) {    
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
}

export async function addImageToAlbum(image: ResultType, album: string) {
  await cloudinary.v2.api.create_folder(album);
  let parts = image.public_id.split("/");
  if (parts.length > 1) {
    parts = parts.slice(1);
  }
  const publicId = parts.join("/");
  await cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);
}

export async function removeImage(id: string) {
  await cloudinary.v2.uploader.destroy(id);
}

export async function removeFolder(name: string) {
  let a = await cloudinary.v2.uploader.DeleteFolder(name)
  console.log(a);  
}



