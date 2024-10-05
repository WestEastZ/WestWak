interface dataType {
  [key: string]: any;
}

export function formatCount(data: dataType | undefined) {
  let value: number;
  const result: dataType = {};

  for (const key in data) {
    value = parseInt(data[key]);

    if (value < 1000) {
      result[key] = value.toString();
    } else if (value < 1000000) {
      result[key] = (value / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else if (value < 1000000000) {
      result[key] = (value / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else {
      result[key] = (value / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
  }

  return result;
}

export function formatDate() {}
