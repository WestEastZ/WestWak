import { BlobImg } from "../_types/faceAPI.type";

// Get Img
export async function getS3Image(param: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_URL}/awss3?directory=gomem`,
      { cache: "no-store" }
    );

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

// Change Blob
export async function changeBlobImg(imgs: string[]): Promise<BlobImg[]> {
  const blobPromise = await Promise.all(
    imgs.map(async (url) => {
      try {
        const fileNameMatch = url.match(/gomem\/(.+)\.webp/);
        const fileName = fileNameMatch ? fileNameMatch[1] : null;

        const response = await fetch(url, {
          mode: "cors",
        });
        const blob = await response.blob();
        const webpBlob = new Blob([blob], { type: "image/webp" });
        const blobUrl = URL.createObjectURL(webpBlob);

        return { fileName: fileName, blob: blobUrl };
      } catch (error) {
        console.log(error);
        return null;
      }
    })
  );

  return blobPromise.filter((item): item is BlobImg => item !== null);
}

// Get File Name
export async function extractFileName(imgs: string[]) {
  const fileName = imgs.map((file) => {
    const match = file.match(/gomem\/(.+)\.webp/);
    return match ? match[1] : null;
  });
  return fileName;
}
