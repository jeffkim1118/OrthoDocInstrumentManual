import { render,screen } from "@testing-library/react";
import Home from "./Home";

describe("The homepage ", ()=> {
    it("should display hero message without error." , () => {
        
        const {container} = render(<Home />)
        const hero1 = container.querySelector('.hero');
        const hero2 = container.querySelector('.hero')
        // const heroMSG1 = screen.getByTitle("heroMSG1");
        // const heroMSG2 = screen.getByTitle("heroMSG2");
        expect(hero1).toBeInTheDocument();
        expect(hero2).toBeInTheDocument();
    })
})