import Adjustment from "../images/adjustment/adjustmentKit.jpg";
import AlignerBand from "../images/alignerBanding/button/IMG-4378.jpg";
import Deband from "../images/deband/IMG-4372.jpg";
import Hawley from "../images/hawley/IMG-0444.jpg";
import AlignerIPR from '../images/aligner IPR/IMG-0464.jpg';
import ApplianceCheck from '../images/appliance check/IMG-0465.jpg';
import MSECheck from '../images/MSE/IMG-0466.jpg';
import Scan from '../images/scan/IMG-0463.jpg';
import StartRecord1 from "../images/startRecord/IMG-0484.jpg";
import StartRecord2 from '../images/startRecord/IMG-0485.jpg'

const setUps = [
    {
      "name":"Adjustment",
      "image": Adjustment,
      "desc":"This is for adjustment.",
      "link":'/adjustment'
    },
    {
      "name":"Aligner band",
      "image": AlignerBand,
      "desc":"This is for bonding aligner.",
      "link":'/alignerband'
    },
    {
      "name":"Deband",
      "image": Deband,
      "desc":"This is for Taking off braces.",
      "link":'/deband'
    },
    {
      "name":"Hawley check",
      "image": Hawley,
      "desc":"This is for retainer check.",
      "link":'/hawley'
    },
    {
      "name":"MSE Check",
      "image": MSECheck,
      "desc":"This is for checking MSE expander.",
      "link":'/mse'
    },
    {
      "name":"Appliance Check",
      "image": ApplianceCheck,
      "desc":"This is for checking appliance.",
      "link":'/appliancecheck'
    },,
    {
      "name":"Aligner IPR",
      "image": AlignerIPR,
      "desc":"This is for IPR treatment.",
      "link":'/aligneripr'
    },,
    {
      "name":"Scan",
      "image": Scan,
      "desc":"This is for scanning patients teeth.",
      "link":'/scan'
    },,
    {
      "name":"Start Record",
      "image": StartRecord1,
      "desc":"This is for start record appointment.",
      "link": '/startrecord'
    }
]
export default setUps;