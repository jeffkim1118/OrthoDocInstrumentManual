import Login from "../components/Account/Login";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // You can extend the expect function with jest-dom
import SignUp from "../components/Account/SignUp";
import Recover from "../components/Account/Recover";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {},
};
const store = mockStore(initialState);

const renderLogin = () => {
  const loginPage = render(
    <Provider store={store}>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
    </Provider>
  );
  return loginPage;
};

describe("<Login />", () => {
  it("should render without error", () => {
    // const { container } = render(
    //   <Provider store={store}>
    //     <BrowserRouter>
    //       <Login />
    //     </BrowserRouter>
    //   </Provider>
    // );
    // expect(container).toBeInTheDocument();
    renderLogin();
    const loginPage = screen.getByTestId('login-form')
    expect(loginPage).toBeInTheDocument();
  });

  // expecting disabled button
  it("Button is diabled when user didn't enter any inputs", () => {
    renderLogin();
    const loginBtn = screen.getByText("Submit");
    const usernameplaceholder = screen.getByPlaceholderText("Username");
    const passwordplaceholder = screen.getByPlaceholderText("Password");
    fireEvent.change(usernameplaceholder, { target: { value: "" } });
    fireEvent.change(passwordplaceholder, { target: { value: "" } });
    expect(loginBtn).toBeDisabled();
  });

  it("Inputs display error messages that both inputs are empty", () => {
    renderLogin();
    const usernameplaceholder = screen.getByPlaceholderText("Username");
    const passwordplaceholder = screen.getByPlaceholderText("Password");

    fireEvent.focusIn(usernameplaceholder);
    fireEvent.focusOut(usernameplaceholder);
    fireEvent.focusIn(passwordplaceholder);
    fireEvent.focusOut(passwordplaceholder);

    const usernameErrorMsg = screen.queryByTestId("custom-error-username");
    const passwordErrorMsg = screen.queryByTestId("custom-error-password");

    expect(usernameErrorMsg).toBeInTheDocument();
    expect(passwordErrorMsg).toBeInTheDocument();
  });

  it("display error messsage when one of input is empty", () => {
    renderLogin();
    const usernameplaceholder = screen.getByPlaceholderText("Username");
    const passwordplaceholder = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameplaceholder, { target: { value: "abcd" } });
    fireEvent.change(passwordplaceholder, { target: { value: "" } });
    
    const loginBtn = screen.getByText("Submit");
    fireEvent.click(loginBtn);
    const passwordErrorMsg = screen.getByTestId("custom-error-password");
    expect(passwordErrorMsg).toBeInTheDocument();
  });

  it("'Don't have an account?' link should take to signup page", () => {
    renderLogin();
    const linkToRegister = screen.getByText("Don't have an account?");
    expect(linkToRegister).toHaveAttribute('href', '/signup');
  });

  it("'Forgot your password?' link should take to recover page", () => {
    renderLogin();
    const linkToRecover = screen.getByText("Forgot your password?");
    expect(linkToRecover).toHaveAttribute('href', '/recover');
  });
});
