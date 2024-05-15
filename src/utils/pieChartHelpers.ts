export const labelFormatter = (params: any) => {
  if (params?.data?.name === "Free") {
    return "";
  }
  // '% {c}'
  return `${params?.data?.percentage}%`;
};
export const labelFormatterWithoutPercent = (params: any) => {
  if (params?.data?.name === "Free") {
    return "";
  }

  return `${params?.data?.percentage}`;
};
export const adjustData = (data: any[]) => {
  let sum = data.reduce((acc, item) => acc + item.value, 0);
  if (sum < 100) {
    data.push({
      name: "Free",
      value: (100 - sum) / data?.length,
      percentage: (100 - sum) / data?.length,
      itemStyle: {
        color: "#b7b7b7",
      },
    });
  }
  return data;
};
