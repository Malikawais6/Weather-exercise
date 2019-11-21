import styled from "styled-components";

export const CardStyled = styled.div`
  width: 300px;
  margin: auto;
  background: #ececec;
  padding: "30px";

  @media only screen and (max-width: 790px) {
    width: 350px;
  }
  @media only screen and (max-width: 480px) {
    width: 210px;
  }
  @media only screen and (max-width: 320px) {
    width: 155px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(40px, auto);
  }
  .temp-title {
    grid-row: 1;
    font-weight: bold;
  }
  .temp {
    grid-row: 2;
  }
  .date-title {
    grid-row: 3;
    font-weight: bold;
  }
  .date {
    grid-row: 4;
  }
`;
