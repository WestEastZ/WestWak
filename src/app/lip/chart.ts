import { chartType } from "../(page)/info/_components/Chart";
import { ChartData } from "../_types/type";

export async function getInformation(id: number) {
  try {
    const url = `${process.env.NEXT_PUBLIC_LOCAL_URL}/information/get?id=${id}`;

    const response = await fetch(url, { cache: "no-store" });

    return response.json();
  } catch (error) {}
}

export async function getChartTop100(id: number) {
  try {
    const url = `${process.env.NEXT_PUBLIC_LOCAL_URL}/top100/get?id=${id}`;

    const response = await fetch(url, { cache: "no-store" });
    const responseData = await response.json();

    const chartData = [
      {
        id: responseData.title,
        color: "hsl(153, 74%, 42%)",
        data: responseData.chartData,
      },
    ];

    return chartData;
  } catch (error) {}
}

export function getChartTick(chartData: chartType[]) {
  try {
    const allData = chartData[0].data;
    const dataLength = allData.length;

    if (dataLength <= 7) {
      // 12개 이하면 모든 x 값을 반환
      return allData.map((item) => item.x);
    }

    const result = [];

    result.push(allData[0].x);

    for (let i = 1; i <= 5; i++) {
      const index = Math.floor((i * (dataLength - 1)) / 6);

      result.push(allData[index].x);
    }

    result.push(allData[dataLength - 1].x);

    return result;
  } catch (error) {}
}

// export async function createTop100(data: ChartData[]) {
//   try {
//     const requests = data.map((item) => {
//       const body = JSON.stringify({
//         date: item.x,
//         title: "RE:WIND",
//         rank: item.y,
//         isRanked: true,
//       });

//       return fetch("http://localhost:8000/top100/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: body,
//       });
//     });

//     const responses = await Promise.all(requests);

//     // 각 응답 처리
//     const results = await Promise.all(
//       responses.map((response) => response.json())
//     );

//     console.log("All requests completed", results);
//     return results;
//   } catch (error) {
//     console.error("Error occurred:", error);
//   }
// }
