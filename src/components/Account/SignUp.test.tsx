import SignUp from "./SignUp";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, screen} from "@testing-library/react";
import { Provider } from "react-redux";

const renderSignUp = () => { return render(<BrowserRouter><SignUp/></BrowserRouter>)}

describe("The signup component", () => {
    it("should render", () => {
        renderSignUp();
    })
})