import SignUp from "../components/Account/SignUp";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/Store";

const renderSignUp = () => { return render(<Provider store={store}><BrowserRouter><SignUp/></BrowserRouter></Provider>)}

describe("The signup component", () => {
    it("should render", () => {
        renderSignUp();
    })
    it("should disable button when all the inputs are empty", () => {
        renderSignUp();
        const bio = screen.getByPlaceholderText('Bio is optional');
        const firstname = screen.getByPlaceholderText('First Name');
        const lastname = screen.getByPlaceholderText('Last Name');
        const username = screen.getByPlaceholderText('Enter username');
        const email = screen.getByPlaceholderText('Enter email');
        const password = screen.getByPlaceholderText('Enter password');
        const submitbtn = screen.getByText('Submit');

        fireEvent.change(bio, {target: {value:''}})
        fireEvent.change(firstname, {target: {value:''}})
        fireEvent.change(lastname, {target: {value:''}})
        fireEvent.change(username, {target: {value:''}})
        fireEvent.change(email, {target: {value:''}})
        fireEvent.change(password, {target: {value:''}})
        
        expect(submitbtn).toBeDisabled();
    })

    it("should display error messages when only some of input fields are filled", () => {
        renderSignUp();
        const bio = screen.getByPlaceholderText('Bio is optional');
        const firstname = screen.getByPlaceholderText('First Name');
        const lastname = screen.getByPlaceholderText('Last Name');
        const username = screen.getByPlaceholderText('Enter username');
        const email = screen.getByPlaceholderText('Enter email');
        const password = screen.getByPlaceholderText('Enter password');
        const submitbtn = screen.getByText('Submit');

        fireEvent.change(bio, {target: {value:'abc'}})
        fireEvent.change(firstname, {target: {value:''}})
        fireEvent.change(lastname, {target: {value:''}})
        fireEvent.change(username, {target: {value:''}})
        fireEvent.change(email, {target: {value:''}})
        fireEvent.change(password, {target: {value:''}})
        fireEvent.click(submitbtn);

        const firstnameError = screen.queryByTestId('register-first-name');
        const lastnameError = screen.queryByTestId('register-last-name');
        const usernameError = screen.queryByTestId('register-username');
        const emailError = screen.queryByTestId('register-email');
        const passwordError = screen.queryByTestId('register-password');

        expect(firstnameError).toBeInTheDocument();
        expect(lastnameError).toBeInTheDocument();
        expect(usernameError).toBeInTheDocument();
        expect(emailError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
    })
    // it("should display register success page after successful registration", () => {
    //     renderSignUp();

    // })
})