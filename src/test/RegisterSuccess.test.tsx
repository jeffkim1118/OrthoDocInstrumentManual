import { render, screen } from "@testing-library/react";
import RegisterSuccess from "../components/Account/RegisterSuccess";
import { BrowserRouter } from "react-router-dom";

describe("The register success component", () => {
    it("should render", ()=>{
        render(<BrowserRouter><RegisterSuccess/></BrowserRouter>)
        expect(render(<BrowserRouter><RegisterSuccess/></BrowserRouter>))
    });
    it("should render register success message", ()=> {
        render(<BrowserRouter><RegisterSuccess/></BrowserRouter>);
        expect(screen.getByText("Please check your email to verify your email.")).toBeInTheDocument();
    })
})