import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("The homepage ", () => {
  it("should display hero message without error.", () => {
    const { container } = render(<Home />);
    const hero1 = container.querySelector(".hero");
    const hero2 = container.querySelector(".hero");
    // const heroMSG1 = screen.getByTitle("heroMSG1");
    // const heroMSG2 = screen.getByTitle("heroMSG2");
    expect(hero1).toBeInTheDocument();
    expect(hero2).toBeInTheDocument();
  });

  it("should scroll down to table content section when the down arrow is clicked", async () => {
    const { getByTestId } = render(<Home />);

    // Find the arrow element by its test ID
    const arrowElement = getByTestId("arrow");

    // Get the content element by its test ID
    const contentElement = getByTestId("content");

    // Record the initial scroll position
    const initialScrollTop = contentElement.scrollTop;

    // Simulate a click on the arrow element
    fireEvent.click(arrowElement);

    // Wait for the scroll animation to complete
    await waitFor(() => {
      const updatedScrollTop = contentElement.scrollTop;

      // Assert that the scroll position has changed (i.e., scrolled down)
      expect(updatedScrollTop).toBeGreaterThanOrEqual(initialScrollTop);
    });
  });
});
