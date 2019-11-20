import styled from "styled-components";

export const CardStyled = styled.div`
  width: 300px;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(40px, auto);
  }
  .temp-title {
    grid-row: 1;
  }
  .temp {
    grid-row: 2;
  }
  .date-title {
    grid-row: 3;
  }
  .date {
    grid-row: 4;
  }
`;
