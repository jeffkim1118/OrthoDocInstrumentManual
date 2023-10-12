import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardDisplay from "../components/Homepage/Card";
import Page from "../components/page";
import obj from "../components/Instruments";
import Adjustment from '../components/images/adjustment/adjustmentKit.jpg';

const setUp = {
    "name":"Adjustment",
    "image": [Adjustment],
    "desc": 'This is for adjustment.',
}

describe("The card component ", () => {
    it("should render", ()=>{
        const {container} = render(<CardDisplay setUp={setUp}/>)
        expect(container).toBeInTheDocument();
    })
    it("The go button should take to page component and display accordingly", () => {
        // Using adjustment kit as a testing case.
        const {getByTestId} = render(<CardDisplay setUp={setUp}/>);
        const {container} = render(<BrowserRouter><Page instrument='/adjustment' instrumentObj={obj['/adjustment']}/></BrowserRouter>)
        const goBtn = getByTestId('Card-btn');
        fireEvent.click(goBtn);
        expect(container).toBeInTheDocument();
    })

})