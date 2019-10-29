import React from 'react'; 
import SubmitButton from '../submit-button/submit-button.component'; 

import './credit-card-input.style.scss';

// The 'credit-card-input' form needs to be a box size housing the 'input-fields' for the CC information. 

class CreditCardInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            name: '',
            expirationDate: '' 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('The value is:' +  this.input.value); 
        e.preventDefault();
    }

    render() {
        return (
            <div className='credit-card-input_container'>
                <form onSubmit={this.handleSubmit}>
                    <label className='card-number'>
                        Card Number:
                        <input className='card-number-input' type='number' placeholder='Card Number'/>
                    </label>
                    <label className='card-name'>
                        Card Name:
                        <input className='card-name-input' type='text' placeholder='Full Name' />
                    </label>
                    <label className='expiration-date'>
                        Expiration Date:
                        <input className='expiration-date-input' type='month' placeholder='Expiration Date' />
                    </label>
                    <SubmitButton />
                </form>
            </div>
        )
    }
};

export default CreditCardInput;