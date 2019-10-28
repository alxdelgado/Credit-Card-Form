import React from 'react'; 

import './credit-card-input.style.scss';

// The 'credit-card-input' form needs to be a box size housing the 'input-fields' for the CC information. 

class CreditCardInput extends React.Component {
    constructor(props) {
        super(props);
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
                    <label className='card-number-input'>
                        Card Number:
                        <input type='number' />
                    </label>
                    <label className='card-name-input'>
                        Card Name:
                        <input type='text' />
                    </label>
                    <label className='expiration-date'>
                        Expiration Date:
                        <input type='month' />
                    </label>
                </form>
            </div>
        )
    }
};

export default CreditCardInput;