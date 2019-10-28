import React from 'react'; 

import './credit-card-input.style.scss';

// The 'credit-card-input' form needs to be a box size housing the 'input-fields' for the CC information. 

const CreditCardInput = (props) => (
    <div className='credit-card-input_container'>
        <form>
            <label className='card-number-input'>
                Card Number:
                <input type='number' />
            </label>
            <label className='card-name-input'>
                Card Name:
                <input type='text' />
            </label>
        </form>
    </div>
); 

export default CreditCardInput;