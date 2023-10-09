import Navb from "../components/Nav/Navbar";
import { fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/Store";
import { BrowserRouter } from "react-router-dom";
import obj from "../components/Instruments";
import Page from "../components/page";

describe("The navbar component", () => {
    it("should render", () => {
        render( <Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
        expect(render(<Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>))
    })
    it('should take users to page component when any one of the link is clicked', ()=> {
        render( <Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
        // use adjustment kit as an example.
        const instrumentsListOption = screen.getByRole('dropdown-menu');
        fireEvent.click(instrumentsListOption);
        const adjustmentLink = screen.getByRole('dropdown-menu-test-example');
        fireEvent.click(adjustmentLink);
        expect(render(<BrowserRouter><Page instrument='/adjustment' instrumentObj={obj['/adjustment']}/></BrowserRouter>)).toBeInTheDocument();
    })
})