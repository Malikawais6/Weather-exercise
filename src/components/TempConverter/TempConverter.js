import React from "react";
import { Radio } from "antd";

import { TempConverterStyled } from "./TempConverter.style";

export const TempConverter = ({ degree, setDegree }) => {
  return (
    <TempConverterStyled>
      <Radio.Group
        onChange={e => {
          if (e.target.value !== degree) {
            setDegree(e.target.value);
          }
        }}
        value={degree}
      >
        <Radio value={"C"}>Celcius</Radio>
        <Radio value={"F"}>Fahrenheit</Radio>
      </Radio.Group>
    </TempConverterStyled>
  );
};
