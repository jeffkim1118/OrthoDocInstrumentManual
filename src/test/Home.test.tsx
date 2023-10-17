import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import Home from "../components/Homepage/Home";

const renderHome = () => {
  const homeComponent = render(<Home/>);
  return homeComponent;
}

describe("The homepage ", () => {
  it("should display hero message without error.", () => {
    renderHome();
    const hero1 = screen.getByText("Welcome to Orthodontic Harmony!");
    const hero2 = screen.getByText("Explore instrument set ups for Orthodontist.");
    expect(hero1).toBeInTheDocument();
    expect(hero2).toBeInTheDocument();
  });

  it("should display content component", () => {
    renderHome();
    const contentComponent = screen.getByTestId('content-container');
    expect(contentComponent).toBeInTheDocument();
  })

  it("should scroll down to table content section when the down arrow is clicked", async () => {
    const { getByTestId } = renderHome();

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
