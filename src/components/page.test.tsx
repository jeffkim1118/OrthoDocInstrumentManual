import Page from "./page";
import React from "react";
import { render } from "@testing-library/react";
import Button from "react-bootstrap/Button";
import Adjustment from './images/adjustment/adjustmentKit.jpg';
import { BrowserRouter } from "react-router-dom";

describe('The page component', () => {
    it('should render', () => {
        render(<BrowserRouter><Page/></BrowserRouter>)
        expect(render(<BrowserRouter><Page/></BrowserRouter>))
    })
    
})