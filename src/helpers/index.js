export const formatNumber = (value) => {
  if (typeof value === "number") {
    return `$${value.toLocaleString("en-US")}`;
  }
  return value;
};
