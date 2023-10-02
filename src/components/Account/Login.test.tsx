import Login from "./Login";
import userSlice from "../../features/userSlice";
import { getByTestId, getByText, waitFor } from "@testing-library/react";
import Profile from "../Profile/Profile";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/Store";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // You can extend the expect function with jest-dom
import { configureStore } from "@reduxjs/toolkit";




// make sure it render
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));


// const store = mockStore({
//   yourReducer: {
//     data: 'Mocked data',
//   },
// });


const renderLogin = (props = {}) => {
  const loginPage = render(<BrowserRouter><Login /></BrowserRouter>);
  return loginPage
}



describe('<Login />', () => {
  it('should render without error', () => {
    renderLogin();
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  // expecting disabled button
  it("Button is diabled when user didn't enter any inputs", () => {
    renderLogin();
    const loginBtn = screen.getByText("Submit");
    const usernameplaceholder = screen.getByPlaceholderText('Username');
    const passwordplaceholder = screen.getByPlaceholderText('Password');
    fireEvent.change(usernameplaceholder, {target: {value: ""}});
    fireEvent.change(passwordplaceholder, {target: {value: ""}});
    expect(loginBtn).toBeDisabled();
  })

  

  // it('should display error messages when username or password is wrong', async ()=>{
  //   const setState = jest.fn();
  // jest
  //   .spyOn(React, 'useState')
  //   .mockImplementationOnce(initValue => [initValue, setState]);
    
  //   renderLogin();
    
  //   const loginBtn = screen.getByText("Submit");
  //   const username = screen.getByText("Username");
  //   const password = screen.getByText("Password");
  //   const usernameplaceholder = screen.getByPlaceholderText('Username');
  //   const passwordplaceholder = screen.getByPlaceholderText('Password');
  //   // const contentInput = screen.getByTestId("content-input1");
  //   // const contentInput2 = screen.getByTestId("content-input2");
  //   await fireEvent.change(usernameplaceholder, {target: {value: "dssfdf"}});
  //   await fireEvent.change(passwordplaceholder, {target: {value: 'ldjflsaj'}})
  //   // fireEvent.change(contentInput2, {target: {value: ""}});
    

  //   await fireEvent.click(loginBtn);
   
  //   await waitFor(() => expect(screen.getByText("Login failed. Please check your username and password again.")).toBeInTheDocument())
  
  //   // mocking the api responses
  //   // expect(screen.getByText("error-msg")).toBeInTheDocument();
  // })

  // it('should take user to profile page after clicking the submit.', () => {
  //   renderLogin();
  //   const loginBtn = screen.getByText("Submit");
  //   const username = screen.getByText("Username");
  //   const password = screen.getByText("Password");
  //   fireEvent.change(username, { target: { value: "first_user" } });
  //   fireEvent.change(password, { target: { value: "password" } });
  //   fireEvent.click(loginBtn)
  //   expect(<Profile/>).toBeInTheDocument();
  // })
});

// test("Login button should take the user to profile page after a successful authentication", async () => {
//   render(<Login />);
//   const loginBtn = screen.getByLabelText("Submit");
//   const username = screen.getByPlaceholderText("Username");
//   const password = screen.getByPlaceholderText("Password");

//   fireEvent.change(username, { target: { value: "first_user" } });
//   fireEvent.change(password, { target: { value: "password" } });

//   fireEvent.click(loginBtn);

//   // Check if the Profile component is rendered
//   const profileComponent = screen.getByText("Profile"); // Assuming there's some text like "Profile" on the Profile component
//   expect(localStorage.getItem('token'))
//   expect(profileComponent).toBeInTheDocument();
// });

// when shopper doesnt have the username and password entered
// disabled submit button



// when shopper username no entered but password eneted
// display error msg


// when shopper has password entered no passwoed
// 



// when shopper enters password and username not found



