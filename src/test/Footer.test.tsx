import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../components/Homepage/Footer";

describe("Footer", () => {
  it("should display all the info.", () => {
    render(<Footer />);
    const companyTitle = screen.getByText("Orthodontic Harmony");
    const companyLink = screen.getByText("Website");
    const companyPhone = screen.getByText("(914) 923-5089");
    const companyMap = screen.getByText("449 N State Rd #101, Briarcliff Manor, NY 10510");

    expect(companyTitle).toBeInTheDocument();
    expect(companyLink).toBeInTheDocument();
    expect(companyPhone).toBeInTheDocument();
    expect(companyMap).toBeInTheDocument();
  });

  it("should have correct display info", () => {
    render(<Footer />);
    expect(screen.getByText('Orthodontic Harmony')).toBeInTheDocument();
    expect(screen.getByText('Website')).toBeInTheDocument();
    expect(screen.getByText('(914) 923-5089')).toBeInTheDocument();
    expect(screen.getByText('449 N State Rd #101, Briarcliff Manor, NY 10510')).toBeInTheDocument();
  });

  it("should have a working website link", () => {
    render(<Footer />);

    // Find the website link by its text content
    const websiteLink = screen.getByText("Website");

    // Click the link (this simulates a user clicking the link)
    fireEvent.click(websiteLink);

    // Check if the window's location href has changed to the expected URL
    expect(screen.getByRole('link', { name: 'Website' })).toHaveAttribute('href', 'https://www.orthodonticharmony.com/')
    // expect(window.location.href).toBe("https://www.orthodonticharmony.com/");
  });

  it("should have a working phone link", () => {
    render(<Footer />);

    // Find the phone link by its text content
    const phoneLink = screen.getByText("(914) 923-5089");

    // Click the link (this simulates a user clicking the link)
    fireEvent.click(phoneLink);

    // Check if the window's location href has changed to the expected phone link
    expect(phoneLink).toHaveAttribute('href', 'tel:(914) 923-5089')
  });

  it("should have a working map link", () => {
    render(<Footer />);

    // Find the map link by its text content
    const mapLink = screen.getByText(
      "449 N State Rd #101, Briarcliff Manor, NY 10510"
    );

    // Click the link (this simulates a user clicking the link)
    fireEvent.click(mapLink);

    // Check if the window's location href has changed to the expected map link
    expect(screen.getByRole('link', { name: '449 N State Rd #101, Briarcliff Manor, NY 10510' })).toHaveAttribute('href', 'https://goo.gl/maps/wYrJmDbJmGzAPWTq8')
  });

  it("should have a working website link that opens in a new tab", () => {
    render(<Footer />);

    // Find the website link by its text content
    const websiteLink = screen.getByText("Website");

    // Check if the link has the target="_blank" attribute
    expect(websiteLink).toHaveAttribute("target", "_blank");
  });

  it("should have a working phone link", () => {
    render(<Footer />);

    // Find the phone link by its text content
    const phoneLink = screen.getByText("(914) 923-5089");

    // Check if the link does not have the target="_blank" attribute
    expect(phoneLink).not.toHaveAttribute("target", "_blank");
  });

  it("should have a working map link that opens in a new tab", () => {
    render(<Footer />);

    // Find the map link by its text content
    const mapLink = screen.getByText(
      "449 N State Rd #101, Briarcliff Manor, NY 10510"
    );

    // Check if the link has the target="_blank" attribute
    expect(mapLink).toHaveAttribute("target", "_blank");
  });
});
