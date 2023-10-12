import { render,screen } from "@testing-library/react";
import PublicChat from "../components/PublicChat";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import jwt from 'jsonwebtoken'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {},
};
const store = mockStore(initialState);


describe('Public chat component', () => {
  it('renders the component', () => {
    const { getByText, getByPlaceholderText } = render(<Provider store={store}><PublicChat /></Provider>);
    
    // You can use assertions like this to check if certain elements are present in the rendered component.
    const chatButton = getByText("Chat Button Text"); // Replace with your actual button text
    const textArea = getByPlaceholderText("Type message.."); // Replace with your actual placeholder text
    
    expect(chatButton).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
  });
})