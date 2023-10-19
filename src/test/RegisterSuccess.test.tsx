import { render, screen } from "@testing-library/react";
import RegisterSuccess from "../components/Account/RegisterSuccess";
import { BrowserRouter } from "react-router-dom";

const renderRegisterSuccess = () => {
    const registerSuccessPage = render(<BrowserRouter><RegisterSuccess/></BrowserRouter>);
    return registerSuccessPage;
}

describe("The register success component", () => {
    it("should render register success message", ()=> {
        renderRegisterSuccess();
        const message = screen.getByText("Please check your email to verify your email.")
        expect(message).toBeInTheDocument();
    })
    it('The go to login page link should be on the page', () => {
        renderRegisterSuccess();
        const gotoLogin = screen.getByText('Go to login page.');
        expect(gotoLogin).toBeInTheDocument();
    })
    it('The go to login link should work', () => {
        renderRegisterSuccess();
        const gotoLogin = screen.getByText('Go to login page.');
        expect(gotoLogin).toHaveAttribute('href', '/login')
    })
})