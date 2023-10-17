import Navb from "../components/Nav/Navbar";
import { fireEvent, render, screen, within} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";
import { store } from "../app/Store";
import { BrowserRouter } from "react-router-dom";
import obj from "../components/Instruments";
import Page from "../components/page";

describe("The navbar component", () => {
    it("should render", () => {
        render( <Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
        const navbar = screen.getByTestId('navbar-test');
        expect(navbar).toBeInTheDocument();
    })
    it('clicking dropdown menu should have 9 items in total', ()=> {
        render(<Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
        // use adjustment kit as an example.
        const instrumentsListOption = screen.getByRole('dropdown-menu');
        const optionbtn = within(instrumentsListOption).getByRole('button');
        fireEvent.click(optionbtn)
        let options = within(instrumentsListOption).getAllByTestId('select-option');
        // test to make sure there are 9 items
        expect(options.length).toBe(9);
        
    })
    // make sure that dropdown menu exists
    it('dropdown menu exist', () => {
        render(<Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
        // use adjustment kit as an example.
        const instrumentsListOption = screen.getByRole('dropdown-menu');
        expect(instrumentsListOption).toBeInTheDocument();
    })
    // make sure that it is a link
    it('the dropdown menu should be a link', () => {
        render(<Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
        const instrumentsListOption = screen.getByText('Instrument Sets');
        expect(instrumentsListOption.nodeName.toLowerCase()).toBe('a')
    })
    
    it('clicking one of the dropdown option takes user to a specific page accordingly', () => {
        render(<Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
         // use adjustment kit as an example.
        const instrumentsListOption = screen.getByRole('dropdown-menu');
        const optionbtn = within(instrumentsListOption).getByRole('button'); 
        fireEvent.click(optionbtn)
        let adjustmentKit = within(instrumentsListOption).getByText('Adjustment Kit');
        // first item in the array is adjustment kit, so use that to test out.
        fireEvent.click(adjustmentKit);
        expect(adjustmentKit).toHaveAttribute('href', '/adjustment')
    })
})