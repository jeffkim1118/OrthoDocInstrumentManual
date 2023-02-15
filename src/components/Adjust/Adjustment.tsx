import React from 'react';
import adjustmentKit from '../images/adjustment/adjustmentKit.jpg';
import ModalP from '../ModalPopup/ModalP';

export default function Adjustment(){ 
    return (
        <div id='kit'>
            <h1>Adjustment Kit</h1>
            <ModalP v={adjustmentKit}/>  
        </div>
    )
}