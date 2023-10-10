import { render } from "@testing-library/react";
import Update from "../components/Profile/Update";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  user: { 
    user:{bio: null}
   },
};
const store = mockStore(initialState);

describe("The update component ", () => {
  it("should render", () => {
    const { container } = render(<Provider store={store}><BrowserRouter><Update/></BrowserRouter></Provider>);
    expect(container).toMatchSnapshot();
  });
  
});
