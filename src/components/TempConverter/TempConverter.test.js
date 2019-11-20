import * as React from "react";
import { render } from "@testing-library/react";

import { TempConverter } from "./TempConverter";

function renderField() {
  return render(<TempConverter />);
}

it("Make sure Bar Chart renders properly", () => {
  const { container } = renderField();
  const tempConverterElement = container.getElementsByClassName(
    "ant-radio-group"
  );

  expect(tempConverterElement.length).not.toBeLessThan(1);
});
