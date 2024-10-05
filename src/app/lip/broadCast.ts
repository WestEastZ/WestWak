export async function getBroadCastInfo(names: string[]) {
  const getUrl = (name: string) => {
    const urlMap: { [key: string]: string | undefined } = {
      woowakgood: process.env.WOOWAKGOOD_BROADCAST_KEY,
      ine: process.env.INE_BROADCAST_KEY,
      jingburger: process.env.JING_BROADCAST_KEY,
      lilpa: process.env.LILPA_BROADCAST_KEY,
      jururu: process.env.JURURU_BROADCAST_KEY,
      gosegu: process.env.GOSEGU_BROADCAST_KEY,
      viichan: process.env.VIICHAN_BROADCAST_KEY,
    };

    return urlMap[name];
  };

  try {
    const fetchPromise = names.map(async (name) => {
      const url = getUrl(name);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_URL}/scraping/onair/?url=https://bj.afreecatv.com/${url}`
        // { next: { revalidate: 3600 } }
        // { cache: "no-store" }
      );

      const data = await response.json();

      return { name, url, ...data };
    });

    const result = await Promise.all(fetchPromise);
    return result;
  } catch (error) {
    console.error("Failed to Get Broadcast Info:", error);
  }
}
