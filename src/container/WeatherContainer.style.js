import styled from "styled-components";

export const WeatherComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  .slick-slider {
    max-width: 85vw;
    margin: auto;
    padding: 30px 0 20px 0;
    border: 1px solid #e8e8e8;
  }

  .slick-prev,
  .slick-next {
    &:before {
      color: blue;
    }
  }
`;
