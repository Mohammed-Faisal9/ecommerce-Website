import { bucktId, projectId } from "./constant";

export function getImageUrl(imageId) {
    if(!imageId) return null;
    const ImageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucktId}/files/${imageId}/view?project=${projectId}`;

    return ImageUrl
}