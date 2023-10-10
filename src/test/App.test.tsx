import { Provider } from "react-redux";
import App from "../App";
import Home from "../components/Homepage/Home";
import { fireEvent, render } from "@testing-library/react";
import { store } from "../app/Store";
import { BrowserRouter } from "react-router-dom";

function mockScrollToTop() {
  // Mock the window.scrollTo method to check if it's called
  const originalScrollTo = window.scrollTo;
  window.scrollTo = jest.fn();
  return () => {
    window.scrollTo = originalScrollTo;
  };
}

describe("App component", () => {
  it("should display scroll-to-top button when at the bottom of the page", () => {
    // Mock the scroll behavior to be at the bottom of the page
    // Set scroll position to the bottom

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    window.scrollY = 1000; 
    // Check if the scroll-to-top button is displayed
    const scrollButton = getByTestId("scroll-to-top-button");
    expect(scrollButton).toBeInTheDocument();
  });

  // Testing if the scroll to top arrow appears and works.
  it("should scroll to the top when the scroll-to-top button is clicked", () => {
    const cleanupScrollTo = mockScrollToTop();

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    // Mock the scroll behavior to be at the bottom of the page
    window.scrollY = 1000; // Set scroll position to the bottom

    // Check if the scroll-to-top button is displayed
    const scrollButton = getByTestId("scroll-to-top-button");
    expect(scrollButton).toBeInTheDocument();

    // Simulate clicking the scroll-to-top button
    fireEvent.click(scrollButton);

    // Verify that window.scrollTo was called with the expected parameters
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });

    // Clean up the mock
    cleanupScrollTo();
  });
});
