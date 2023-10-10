import { render } from "@testing-library/react";
import Profile from "../components/Profile/Profile";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {},
};

const store = mockStore(initialState);

describe("The profile component", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    expect(
      render(
        <Provider store={store}>
          <Profile />
        </Provider>
      )
    );
  });

  
});
