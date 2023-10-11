import { render } from "@testing-library/react";
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
    it('should render', () => {
        
       

        const {container} = render(<Provider store={store}><PublicChat/></Provider>);
        expect(container).toBeInTheDocument();
    })
})