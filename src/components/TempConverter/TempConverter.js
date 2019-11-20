import React from "react";
import { Radio } from "antd";

export const TempConverter = ({ degree, setDegree }) => {
  return (
    <div>
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
    </div>
  );
};
