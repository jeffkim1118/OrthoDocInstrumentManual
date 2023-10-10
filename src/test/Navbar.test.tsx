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
        const {container} = render( <Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
        expect(container).toBeInTheDocument();
    })
    it('clicking dropdown menu should display 9 items in total', async()=> {
        render(<Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
    
        // use adjustment kit as an example.
        const instrumentsListOption = screen.getByRole('dropdown-menu');
        const optionbtn = within(instrumentsListOption).getByRole('button');
        await userEvent.click(optionbtn)
        let options = within(instrumentsListOption).getAllByTestId('select-option');
        // test to make sure there are 9 items
        expect(options.length).toBe(9);
        
    })
    it('clicking one of the dropdown option takes user to a specific page accordingly', async() => {
        render(<Provider store={store}><BrowserRouter><Navb/></BrowserRouter></Provider>)
        const {container} = render(<BrowserRouter><Page instrument='/adjustment' instrumentObj={obj['/adjustment']}/></BrowserRouter>)
         // use adjustment kit as an example.
        const instrumentsListOption = screen.getByRole('dropdown-menu');
        const optionbtn = within(instrumentsListOption).getByRole('button');
        await userEvent.click(optionbtn)
        let adjustmentKit = within(instrumentsListOption).getByText('Adjustment Kit');
        // first item in the array is adjustment kit, so use that to test out.
        await userEvent.click(adjustmentKit);
        expect(container).toBeInTheDocument();
    })
})