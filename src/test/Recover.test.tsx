import { BrowserRouter } from "react-router-dom";
import Recover from "../components/Account/Recover";
import { render, fireEvent, screen} from "@testing-library/react";

const renderRecover = () => {
    const recover = render(<BrowserRouter><Recover/></BrowserRouter>);
    return recover
}

describe("The recover component " , ()=>{
    it(" should render", () => {
        const {container} = renderRecover();
        expect(container).toMatchSnapshot();
    })

    it('should display labels', ()=> {
        renderRecover();
        const label1 = screen.getByText('Forgot Your Password?');
        const label2 = screen.getByText("Don't fret! Just type in your email and we will");
        expect(label1).toBeInTheDocument();
        expect(label2).toBeInTheDocument();
    })

    it(" should render input", () => {
        renderRecover();
        const recoverPasswordInput = screen.getByPlaceholderText('Enter your email');
        expect(recoverPasswordInput).toBeInTheDocument();
    })
    it("the submit button should be disabled when there's nothing in the input", () => {
        renderRecover();
        const registerBtn = screen.getByText("Submit");
        const emailPlaceholder = screen.getByPlaceholderText('Enter your email');
        fireEvent.change(emailPlaceholder, {target: {value: ""}});
        expect(registerBtn).toBeDisabled();
    })
    it("error message should appear when the input was clicked but nothing was entered after unfocusing", () => {
        renderRecover();
        const emailPlaceholder = screen.getByPlaceholderText('Enter your email');
        fireEvent.change(emailPlaceholder, {target: {value: ""}});
        fireEvent.focusIn(emailPlaceholder);
        fireEvent.focusOut(emailPlaceholder);
        const errorMsg = screen.getByText("Email required");
        expect(errorMsg).toBeInTheDocument()
    })
})