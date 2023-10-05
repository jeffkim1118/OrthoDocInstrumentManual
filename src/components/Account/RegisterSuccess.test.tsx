import { render } from "@testing-library/react";
import RegisterSuccess from "./RegisterSuccess";
import { BrowserRouter } from "react-router-dom";

describe("The register success component", () => {
    it("should render", ()=>{
        render(<RegisterSuccess/>)
        expect(render(<RegisterSuccess/>)).toBeInTheDocument();
    })
})