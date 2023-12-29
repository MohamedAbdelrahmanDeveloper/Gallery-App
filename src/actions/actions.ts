"use server";
import { ResultType } from "@/types/types";
import cloudinary from "cloudinary";



export async function setAsFavoriteAction(publicId: string,isFavorite: boolean) {    
  try {
    if (isFavorite) {
      await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
    } else {
      await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
    }
  } catch (error:any) {
    return error.message
  }
}

export async function addImageToAlbum(image: ResultType, album: string) {
  try {
    await cloudinary.v2.api.create_folder(album);
    let parts = image.public_id.split("/");
    if (parts.length > 1) {
      parts = parts.slice(1);
    }
    const publicId = parts.join("/");
    await cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);
  } catch (error:any) {
    return error.message
  }
}

export async function removeImage(id: string) {
  try {
    await cloudinary.v2.uploader.destroy(id);
  } catch (error:any) {
    return error.message
  }
}

export async function removeFolder(name: string) {
  try {
    await cloudinary.v2.api.delete_folder(name)
    return null;
  } catch (error:any) {
    if (error.message) {
      return error.message
    }
    return error.error.message
  }
}


export async function removeFromAlbum(image: ResultType) {
  try {
    let parts = image.public_id.split("/");
    if (parts.length > 1) {
      parts = parts.slice(1);
    }
    const publicId = parts.join("/");
    await cloudinary.v2.uploader.rename(image.public_id, publicId);
    return null;
  } catch (error:any) {
    return error.message
  }
}


