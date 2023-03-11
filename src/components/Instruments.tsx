import Adjustment from "./images/adjustment/adjustmentKit.jpg";

import BtnAlignerBand1 from "./images/alignerBanding/button/IMG-4378.jpg";
import BtnAlignerBand2 from './images/alignerBanding/button/IMG-4382.jpg';
import BtnAlignerBand3 from './images/alignerBanding/button/IMG-4385.jpg';
import BtnAlignerBand4 from "./images/alignerBanding/button/IMG-4387.jpg";

import AlignerBand1 from "./images/alignerBanding/noButton/IMG-4374.jpg";
import AlignerBand2 from "./images/alignerBanding/noButton/IMG-4382.jpg";

import Deband from "./images/deband/IMG-4372.jpg";
import Hawley from "./images/hawley/IMG-0444.jpg";
import AlignerIPR from './images/aligner IPR/IMG-0464.jpg';
import ApplianceCheck from './images/appliance check/IMG-0465.jpg';
import MSECheck from './images/MSE/IMG-0466.jpg';
import Scan from './images/scan/IMG-0463.jpg';

const obj:any = {
        '/adjustment': {
            "name": "Adjustment",
            "image": [Adjustment],
            "desc": 'This is for adjustment.',
        },
        '/alignerband': {
            "name": "Aligner Banding",
            "image": [BtnAlignerBand1, BtnAlignerBand2, BtnAlignerBand3, BtnAlignerBand4, AlignerBand1, AlignerBand2],
            "desc": 'This is for bonding aligner. There are two different set ups for two different situations: the one with braces button and the one without it.',
        },
        '/deband': {
            "name": "Debanding",
            "image": [Deband],
            "desc": 'This is for Taking off braces.',
        },
        '/hawley': {
          "name": "Hawley Check",
          "image": [Hawley],
          "desc": 'This is for retainer check.',
        },
        '/aligneripr': {
          "name": "Aligner IPR",
          "image": [AlignerIPR],
          "desc": 'This is for IPR treatment.',
        },
        '/appliancecheck': {
          "name": "Appliance Check",
          "image": [ApplianceCheck],
          "desc": 'This is for checking appliance.',
        },
        '/mse': {
          "name": "MSE Check",
          "image": [MSECheck],
          "desc": 'This is for checking MSE expander.',
        },
        '/scan': {
          "name": "Scan",
          "image": [Scan],
          "desc": 'This is for scanning patients teeth.',
        },
        
}
    
export default obj;
