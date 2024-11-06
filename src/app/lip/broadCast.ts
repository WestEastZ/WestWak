export async function getBroadCastInfo(streamerIds: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/broadcast?ids=${streamerIds}`;
    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.error("Failed to Get Broadcast Info:", error);
  }
}
