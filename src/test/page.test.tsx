import Page from "../components/page";
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "react-bootstrap/Button";
import Adjustment from './images/adjustment/adjustmentKit.jpg';
import { BrowserRouter } from "react-router-dom";
import obj from "../components/Instruments";

describe('The page component', () => {
    it('should render', () => {
        render(<BrowserRouter><Page instrument='/adjustment' instrumentObj={obj['/adjustment']}/></BrowserRouter>)   
        expect(screen.getByText('Adjustment')).toBeInTheDocument();
    })
})