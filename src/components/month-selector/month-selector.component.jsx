import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './month-selector.style.scss'; 

// function MonthSelector({selectMonth}) {
//     const [month, setMonth] = useState(selectMonth);
//     return (
//         <>
//             Month: {month}
//             <div className='month-selector-container'>
//                 <select onClick={() => setMonth(selectMonth)}><FontAwesomeIcon icon='angle-down'/></select> 
//             </div>
//         </>
//     );
// }

const MonthSelector = (props) => ( 
    <div className='month-selector-container'>
        <FontAwesomeIcon icon="angle-down"/>
    </div>
); 

export default MonthSelector;