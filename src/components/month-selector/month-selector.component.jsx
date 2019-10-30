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

class MonthSelector extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            showMonths: false,
        }

        this.showMonths = this.showMonths.bind(this);
    }

    showMonths(event) {
        event.preventDefault();

        this.setState({ showMonths: true, })
    }

    render() {
        return (
            <div>
                <button>Month</button>
                {
                    this.state.showMonths
                    ? (
                        <div>
                            {/* write code for what the dropDownMenu will show. */}
                        </div>
                    )
                    : (
                        null
                    )
                } 
            </div>
        )
    }
}


export default MonthSelector;