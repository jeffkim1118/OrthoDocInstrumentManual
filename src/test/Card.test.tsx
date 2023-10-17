import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardDisplay from "../components/Homepage/Card";
import Page from "../components/page";
import obj from "../components/Instruments";
import Adjustment from '../components/images/adjustment/adjustmentKit.jpg';

const setUp = {
    "name":"Adjustment",
    "image": [Adjustment],
    "desc": 'This is for adjustment.',
    "link":'/adjustment'
}

describe("The card component ", () => {
    it("should render name of the setup", ()=>{
        render(<CardDisplay setUp={setUp}/>)
        const name = screen.getByText(setUp['name']);
        expect(name).toBeInTheDocument();
    })
    it('should render description', () => {
        render(<CardDisplay setUp={setUp}/>)
        const description = screen.getByText(setUp['desc'])
        expect(description).toBeInTheDocument();
    })
    // Test go button
    it('The go button should be on the page' , () => {
        render(<CardDisplay setUp={setUp}/>)
        const goBtn = screen.getByTestId('Card-btn');
        expect(goBtn).toBeInTheDocument();
    })
    
    // The go button should take to page component
    it('The go button should take to page component', async () => {
        render(<BrowserRouter><CardDisplay setUp={setUp}/></BrowserRouter>)
        expect(screen.getByRole('button', { name: 'Go' })).toHaveAttribute('href', '/adjustment')
    })
})