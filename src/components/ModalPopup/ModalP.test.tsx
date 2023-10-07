import ModalP from "./ModalP";
import { render } from "@testing-library/react";
import Modal from 'react-bootstrap/Modal';
import AdjustmentPic from '../images/adjustment/adjustmentKit.jpg';

const testSample = AdjustmentPic;

describe("The modal popup component", () => {
    it("should render with different photos based on setups that are provided", () => {
        render(<ModalP image={testSample}/>)
        expect(render(<ModalP/>))
    })
})