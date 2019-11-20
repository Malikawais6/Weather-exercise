import { head } from "ramda";

export const getDate = dateString => {
  const date = dateString.split(" ");
  return head(date);
};

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerMode: true
};
