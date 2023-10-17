import { render,screen,waitFor } from "@testing-library/react";
import Profile from "../components/Profile/Profile";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {first_name:'test', last_name:test, avatar_url:'http://www.gravatar.com/avatar/?d=identicon', bio:'test', username:'test', password:'password', email:'test@test.com', admin:true, created_at:new Date()},
};

const store = mockStore(initialState);

const renderProfile = async() => {
  const profilePage = await render(<Provider store={store}><Profile /></Provider>);
  return profilePage
}

describe("The profile component", () => {
  it("should render",async() => {
    await renderProfile();
    const profile = await screen.findByTestId('profile-display');
    expect(profile).toBeInTheDocument();
  });
});
