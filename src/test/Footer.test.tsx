import { fireEvent, render,screen } from "@testing-library/react";
import Footer from "../components/Homepage/Footer";

describe('Footer', () => {
    it("should display all the info.", ()=>{
        const {container} = render(<Footer/>);
        const companyTitle = container.querySelector('.company-title');
        const companyLink = container.querySelector('.company-link');
        const companyPhone = container.querySelector('.company-phone');
        const companyMap = container.querySelector('.company-map');

        expect(companyTitle).toBeInTheDocument();
        expect(companyLink).toBeInTheDocument();
        expect(companyPhone).toBeInTheDocument();
        expect(companyMap).toBeInTheDocument();

    })

    it('should have a working website link', () => {
      render(<Footer />);
      
      // Find the website link by its text content
      const websiteLink = screen.getByText('Website');
  
      // Click the link (this simulates a user clicking the link)
      fireEvent.click(websiteLink);
  
      // Check if the window's location href has changed to the expected URL
      expect(window.location.href).toBe('https://www.orthodonticharmony.com/');
    });
  
    it('should have a working phone link', () => {
      render(<Footer />);
      
      // Find the phone link by its text content
      const phoneLink = screen.getByText('(914) 923-5089');
  
      // Click the link (this simulates a user clicking the link)
      fireEvent.click(phoneLink);
  
      // Check if the window's location href has changed to the expected phone link
      expect(window.location.href).toBe('tel:(914) 923-5089');
    });
  
    it('should have a working map link', () => {
      render(<Footer />);
      
      // Find the map link by its text content
      const mapLink = screen.getByText('449 N State Rd #101, Briarcliff Manor, NY 10510');
  
      // Click the link (this simulates a user clicking the link)
      fireEvent.click(mapLink);
  
      // Check if the window's location href has changed to the expected map link
      expect(window.location.href).toBe('https://goo.gl/maps/wYrJmDbJmGzAPWTq8');
    });

    it('should have a working website link that opens in a new tab', () => {
        render(<Footer />);
        
        // Find the website link by its text content
        const websiteLink = screen.getByText('Website');
    
        // Check if the link has the target="_blank" attribute
        expect(websiteLink).toHaveAttribute('target', '_blank');
      });
    
      it('should have a working phone link', () => {
        render(<Footer />);
        
        // Find the phone link by its text content
        const phoneLink = screen.getByText('(914) 923-5089');
    
        // Check if the link does not have the target="_blank" attribute
        expect(phoneLink).not.toHaveAttribute('target', '_blank');
      });
    
      it('should have a working map link that opens in a new tab', () => {
        render(<Footer />);
        
        // Find the map link by its text content
        const mapLink = screen.getByText('449 N State Rd #101, Briarcliff Manor, NY 10510');
    
        // Check if the link has the target="_blank" attribute
        expect(mapLink).toHaveAttribute('target', '_blank');
      });
  });