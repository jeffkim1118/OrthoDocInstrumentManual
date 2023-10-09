import { render } from "@testing-library/react";
import Update from "../components/Profile/Update";

describe("The update component ", () => {
  it("should display all the inputs.", () => {
    const {container} = render(<Update />);
    const inputs = container.querySelector(".updateInput");
    expect(inputs).toBeInTheDocument();
  });
});
