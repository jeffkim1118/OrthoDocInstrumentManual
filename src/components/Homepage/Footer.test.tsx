import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("The footer component ", ()=>{
    it("should display all the info.", ()=>{
        const {container} = render(<Footer/>);
        const companyTitle = container.querySelector('.company-title');
        const companyLink = container.querySelector('.company-link');
        const companyPhone = container.querySelector('.company-phone');
        const companyMap = container.querySelector('.company-map');

        expect(companyTitle).toBeInTheDocument();
        expect(companyLink).toBeInTheDocument();
        expect(companyPhone).toBeInTheDocument();
        expect(companyMap).toBeInTheDocument();

    })
})