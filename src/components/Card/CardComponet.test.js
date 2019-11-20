import * as React from "react";
import { render } from "@testing-library/react";

import { CardComponent } from "./CardComponent";

function renderField() {
  return render(<CardComponent />);
}
it("Make sure Card Component renders properly", () => {
  const { container } = renderField();
  const cardElement = container.getElementsByClassName("ant-card");

  expect(cardElement.length).not.toBeLessThan(1);
});
