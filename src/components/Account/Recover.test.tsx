import { BrowserRouter } from "react-router-dom";
import Recover from "./Recover";
import { render, fireEvent, screen} from "@testing-library/react";

describe("The recover component " , ()=>{
    it(" should render", () => {
        render(<BrowserRouter><Recover/></BrowserRouter>)
        expect(render(<BrowserRouter><Recover/></BrowserRouter>))
    })
    it(" should render input", () => {
        render(<BrowserRouter><Recover /></BrowserRouter>)
        const recoverPasswordInput = screen.getByPlaceholderText('Enter your email');
        expect(recoverPasswordInput).toBeInTheDocument();
    })
    it("the submit button should be disabled when there's nothing in the input", () => {
        render(<BrowserRouter><Recover /></BrowserRouter>)
        const registerBtn = screen.getByText("Submit");
        const emailPlaceholder = screen.getByPlaceholderText('Enter your email');
        fireEvent.change(emailPlaceholder, {target: {value: ""}});
        expect(registerBtn).toBeDisabled();
    })
    it("error message should appear when the input was clicked but nothing was entered after unfocusing", () => {
        render(<BrowserRouter><Recover /></BrowserRouter>)
        const emailPlaceholder = screen.getByPlaceholderText('Enter your email');
        fireEvent.change(emailPlaceholder, {target: {value: ""}});
        fireEvent.focusIn(emailPlaceholder);
        fireEvent.focusOut(emailPlaceholder);
        const errorMsg = screen.getByText("Email required");
        expect(errorMsg).toBeInTheDocument()
    })
})