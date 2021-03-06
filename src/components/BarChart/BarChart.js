import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column"
  },
  title: {
    text: ""
  },
  subtitle: {
    text: ""
  },
  xAxis: {},
  yAxis: {
    visible: false
  },
  tooltip: {},
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  credits: {
    enabled: false
  }
};

export const BarChart = props => {
  const { series, categories } = props;
  const config = {
    ...options,
    series,
    xAxis: {
      categories
    }
  };
  return <HighchartsReact highcharts={Highcharts} options={config} />;
};
