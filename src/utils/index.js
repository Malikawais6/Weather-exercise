import { head } from "ramda";

export const getDate = dateString => {
  const date = dateString.split(" ");
  return head(date);
};
