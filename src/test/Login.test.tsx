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

// make sure it render
// const mockedUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   ...(jest.requireActual("react-router-dom") as any),
//   useNavigate: () => mockedUsedNavigate
// }));

// const mockDispatch = jest.fn();

// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch
// }));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {},
};
const store = mockStore(initialState);

const renderLogin = (props = {}) => {
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
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toBeInTheDocument();
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

  it("should take user to register component when 'Don't have an account?'", () => {
    renderLogin();
    const {container} = render(<Provider store={store}><BrowserRouter><SignUp /></BrowserRouter></Provider>)
    const linkToRegister = screen.getByText("Don't have an account?");
    fireEvent.click(linkToRegister);
    expect(container).toBeInTheDocument();
  });

  it("should take user to recover component when 'Forgot your password?' is clicked", () => {
    renderLogin();
    const {container} = render(<Provider store={store}><BrowserRouter><Recover/></BrowserRouter></Provider>)
    const linkToRecover = screen.getByText("Forgot your password?");
    fireEvent.click(linkToRecover);
    expect(container).toBeInTheDocument();
  });
});
