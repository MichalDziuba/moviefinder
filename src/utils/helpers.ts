export const formatTime = (min: number) => {
  let hours = Math.floor(min / 60);
  let leftMin = min % 60;
  return hours + "h " + leftMin + "min";
};
export const getYear = (date: string) => {
  const year = date.split("-")[0];
  return year;
};
