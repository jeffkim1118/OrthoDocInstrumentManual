import { render, screen } from "@testing-library/react";
import Footer from "../components/Homepage/Footer";

const renderFooter = () => {
  const footerComponent = render(<Footer/>)
  return footerComponent;
}

describe("Footer", () => {
  it("should display all the info.", () => {
    renderFooter()
    const companyTitle = screen.getByText("Orthodontic Harmony");
    const companyLink = screen.getByText("Website");
    const companyPhone = screen.getByText("(914) 923-5089");
    const companyMap = screen.getByText("449 N State Rd #101, Briarcliff Manor, NY 10510");

    expect(companyTitle).toBeInTheDocument();
    expect(companyLink).toBeInTheDocument();
    expect(companyPhone).toBeInTheDocument();
    expect(companyMap).toBeInTheDocument();
  });

  it("should have a working website link", () => {
    renderFooter();
    // Find the website link by its text content
    const websiteLink = screen.getByText("Website");

    // Check if the window's location href has the expected URL
    expect(websiteLink).toHaveAttribute('href', 'https://www.orthodonticharmony.com/')
  });

  it("should have a working phone link", () => {
    renderFooter();

    // Find the phone link by its text content
    const phoneLink = screen.getByText("(914) 923-5089");
    
    // Check if the window's location href has the expected phone link
    expect(phoneLink).toHaveAttribute('href', 'tel:(914) 923-5089')
  });

  it("should have a working map link", () => {
    renderFooter();

    // Find the map link by its text content
    const mapLink = screen.getByText(
      "449 N State Rd #101, Briarcliff Manor, NY 10510"
    );

    // Check if the window's location href has the expected map link
    expect(mapLink).toHaveAttribute('href', 'https://goo.gl/maps/wYrJmDbJmGzAPWTq8')
  });

  it("should have a working website link that opens in a new tab", () => {
    renderFooter();

    // Find the website link by its text content
    const websiteLink = screen.getByText("Website");

    // Check if the link has the target="_blank" attribute
    expect(websiteLink).toHaveAttribute("target", "_blank");
  });

  it("should have a working phone link", () => {
    renderFooter();

    // Find the phone link by its text content
    const phoneLink = screen.getByText("(914) 923-5089");

    // Check if the link does not have the target="_blank" attribute
    expect(phoneLink).not.toHaveAttribute("target", "_blank");
  });

  it("should have a working map link that opens in a new tab", () => {
    renderFooter();

    // Find the map link by its text content
    const mapLink = screen.getByText(
      "449 N State Rd #101, Briarcliff Manor, NY 10510"
    );

    // Check if the link has the target="_blank" attribute
    expect(mapLink).toHaveAttribute("target", "_blank");
  });
});
