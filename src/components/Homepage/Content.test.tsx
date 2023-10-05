import { render } from "@testing-library/react";
import Content from "./Content";

describe("The content component", () => {
    it("renders", () => {
        const {getByTestId} = render(<Content/>)
        const contentDiv = getByTestId("content-container")
        expect(contentDiv).toBeInTheDocument();
    })
})