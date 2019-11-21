import React from "react";
import { Card } from "antd";
import { CardStyled } from "./CardComponent.style";

export const CardComponent = props => {
  const { date, avgTemp, degree } = props;
  const gridStyle = {
    width: "100%",
    textAlign: "center"
  };
  return (
    <CardStyled>
      <Card>
        <Card.Grid style={gridStyle}>
          <div className="wrapper">
            <div className="temp-title">Temp:</div>
            <div className="temp">
              {Math.round(avgTemp * 100) / 100} {degree}
            </div>
            <div className="date-title">Date:</div>
            <div className="date">{date}</div>
          </div>
        </Card.Grid>
      </Card>
    </CardStyled>
  );
};
