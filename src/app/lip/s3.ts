// Get Img
export async function getS3Image(param: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/awss3?directory=${param}`,
      // { cache: "no-store" },
    );

    return response.json();
  } catch (error) {
    console.error(error);
  }
}
