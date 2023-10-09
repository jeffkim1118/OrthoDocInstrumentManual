import { render } from "@testing-library/react";
import RegisterSuccess from "../components/Account/RegisterSuccess";

describe("The register success component", () => {
    it("should render", ()=>{
        render(<RegisterSuccess/>)
        expect(render(<RegisterSuccess/>)).toBeInTheDocument();
    })
})