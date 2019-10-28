import React from 'react';
import CreditCardInput from '../credit-card-input/credit-card-input.component'; 

import './credit-card-form.style.scss';

const CreditCardForm = (props) => (
    <div className='credit-card-form'>
        <h1>This is the wrapper | pass through the component handling the form inputs </h1> 
        <CreditCardInput />
    </div>
); 

export default CreditCardForm; 