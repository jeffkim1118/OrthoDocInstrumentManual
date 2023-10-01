import Login from "./Login";
import userSlice from "../../features/userSlice";
import { Store } from "@reduxjs/toolkit";
import Profile from "../Profile/Profile";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // You can extend the expect function with jest-dom

test("Login button should take the user to profile page after a successful authentication", async () => {
  render(<Login />);
  const loginBtn = screen.getByLabelText("Submit");
  const username = screen.getByPlaceholderText("Username");
  const password = screen.getByPlaceholderText("Password");

  fireEvent.change(username, { target: { value: "first_user" } });
  fireEvent.change(password, { target: { value: "password" } });

  fireEvent.click(loginBtn);

  // Check if the Profile component is rendered
  const profileComponent = screen.getByText("Profile"); // Assuming there's some text like "Profile" on the Profile component
  expect(profileComponent).toBeInTheDocument();
});