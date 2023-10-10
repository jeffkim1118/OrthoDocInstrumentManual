import ModalP from "../components/ModalPopup/ModalP";
import { render } from "@testing-library/react";
import Modal from 'react-bootstrap/Modal';
import AdjustmentPic from '../components/images/adjustment/adjustmentKit.jpg';

const testSample = AdjustmentPic;

describe("The modal popup component", () => {
    it("should render with different photos based on setups that are provided", () => {
        const {container} = render(<ModalP image={testSample}/>)
        expect(container).toBeInTheDocument();
    })
})