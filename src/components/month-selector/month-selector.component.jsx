import React from 'react'; 

import './month-selector.style.scss'; 

function MonthSelector({selectMonth}) {
    const [month, setMonth] = useState(selectMonth);
    return (
        <>
            Month: {month}
            <div>
                <select onClick={() => setMonth(selectMonth)}></select>
            </div>
        </>
    )
}

export default MonthSelector;