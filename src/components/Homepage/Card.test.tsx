import React from "react";
import { render } from "@testing-library/react";
import Button from "react-bootstrap/Button";
import CardDisplay from "./Card";
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
})