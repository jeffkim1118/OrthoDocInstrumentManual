import ModalP from "../components/ModalPopup/ModalP";
import { render,screen,fireEvent } from "@testing-library/react";
import Modal from 'react-bootstrap/Modal';
import AdjustmentPic from '../components/images/adjustment/adjustmentKit.jpg';

const testSample = AdjustmentPic;

describe("The modal popup component", () => {
    it("should render image", () => {
        render(<ModalP image={testSample}/>)
        const imageElement = screen.getByAltText('instrument-pic');
        expect(imageElement).toBeInTheDocument();
    })
    it('click the image should display expanded image', () => {
        render(<ModalP image={testSample}/>)
        const imageElement = screen.getByAltText('instrument-pic');
        fireEvent.click(imageElement);

        const modalDialog = screen.getByRole('dialog', { name: /fancy image/i }); // Replace 'Modal Title' with your actual modal title
        expect(modalDialog).toBeInTheDocument();
    })
    it('when the image is clicked, it should display close out button', () => {
        render(<ModalP image={testSample}/>)
        const imageElement = screen.getByAltText('instrument-pic');
        fireEvent.click(imageElement);

        const closeBtn = screen.getByText('Close');
        expect(closeBtn).toBeInTheDocument();
    })
})