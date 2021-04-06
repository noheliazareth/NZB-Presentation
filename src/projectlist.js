import PHB1 from './MAC PHB 1.png';
import PHB2 from './MAC PHB 2.png';
import PHC1 from './MAC PHC 1.png';
import PHC2 from './MAC PHC 2.png';
import PBLC1 from './MAC La Concepcion 1.png';
import PBLC2 from './MAC La Concepcion 2.png';
import JUTI1 from './MAC Juticalpa 1.png';
import JUTI2 from './MAC Juticalpa 2.png';

export const projectlist = [
    {text:'Hydroelectric Power Plant Babilonia',
    description:'Created using html, css, javascript & QuickHMI. Maitained by Cypress using JAVA. Tracks and displays real-time data that is key for the correct operation of the  hydroelectric powerplant, in order to analyse performance and production.',
    image1:PHB1,
    image2:PHB2
    },
    {text:'Hydroelectric Power Plant Coronado',
    description:'Created using html, css, javascript & QuickHMI. Maintained by Cypress using JAVA. Tracks and displays real-time data that is key for the correct operation of the  hydroelectric powerplant, in order to analyse performance and production.',
    image1: PHC1,
    image2: PHC2
    },
    {text:'Water Purifying Plant La Concepción',
    description:'Created using html, css, javascript, jquery via TIA Portal. Maintained by Selenium using JAVA. Shows in real-time the data extracted via PLC comms, that indicate the quality of the water during the purifying process. Also controls the production line, and alerts of possible operational errors.',
    image1:PBLC1,
    image2: PBLC2
    },
    {text:'Pump Station Juticalpa-Las Moritas',
    description:'Created using html, css, javascript, jquery via TIA Portal. First webpage using React.js. Maintained by Selenium using JAVA. Monitoring system that presents data directly from the PLCs, thus unveiling the operation of the pumps, motors, and other key elements of the pumping station.',
    image1:JUTI1,
    image2:JUTI2
    },
]