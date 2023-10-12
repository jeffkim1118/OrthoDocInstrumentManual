import { getByRole, render,screen } from "@testing-library/react";
import Content from "../components/Homepage/Content";

describe("The content component", () => {
    it("renders", () => {
        const {container} = render(<Content/>)
        expect(container).toBeInTheDocument();
    })
})