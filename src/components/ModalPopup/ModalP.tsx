import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export default function ModalP({v}:any){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="pic-container">
            <img src={v} id='pic'onClick={handleShow} alt='instrument-pic' className='modal-image'></img>

            <Modal show={show} onHide={handleClose} size='lg' aria-label="fancy image">
            <Modal.Header closeButton>
            
            </Modal.Header>
            <img src={v} alt='adjustment kit' id='modal-pic' onClick={handleShow}></img>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}