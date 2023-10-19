import { getByRole, render,screen } from "@testing-library/react";
import Content from "../components/Homepage/Content";
import setUps from "../components/Homepage/Setups";

describe("The content component", () => {
    it("renders", () => {
        render(<Content/>)
        const contentContainer = screen.getByTestId('content-container');
        expect(contentContainer).toBeInTheDocument();
    })
    
})