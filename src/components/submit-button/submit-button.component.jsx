import React from 'react'; 

import './submit-button.style.scss'; 

// Functional Component - going to use hooks for state alteration. 
function SubmitButton() {
    const handleClick = () => {
        console.log('click me')
    }

    return (
        <button className='submit-button'>
            <span className='submit-font' onClick={handleClick}>Submit</span>
        </button>
    )
}; 

export default SubmitButton;


