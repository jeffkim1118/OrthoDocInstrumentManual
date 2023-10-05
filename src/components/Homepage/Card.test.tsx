import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardDisplay from "./Card";
import Page from "../page";
import obj from "../Instruments";
import Adjustment from '../images/adjustment/adjustmentKit.jpg'

const setUp = {
    "name":"Adjustment",
    "image": [Adjustment],
    "desc": 'This is for adjustment.',
}

describe("The card component ", () => {
    it("should render", ()=>{
        render(<CardDisplay setUp={setUp}/>)
        expect(render(<CardDisplay setUp={setUp}/>))
    })
    it("The go button should take to page component and display accordingly", () => {
        // Using adjustment kit as a testing case.
        const {getByTestId} = render(<CardDisplay setUp={setUp}/>);
        const goBtn = getByTestId('Card-btn');
        fireEvent.click(goBtn);
        expect(render(<BrowserRouter><Page instrument='/adjustment' instrumentObj={obj['/adjustment']}/></BrowserRouter>))
    })

})