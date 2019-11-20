import * as React from "react";
import { render } from "@testing-library/react";

import { BarChart } from "./BarChart";

function renderField() {
  return render(<BarChart />);
}
it("Make sure Bar Chart renders properly", () => {
  const { container } = renderField();
  const barChartElement = container.getElementsByClassName(
    "highcharts-container"
  );

  expect(barChartElement.length).not.toBeLessThan(1);
});
