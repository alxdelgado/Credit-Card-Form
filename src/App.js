import React from 'react';
import './App.css';
import CreditCardForm from './components/credit-card-form/credit-card-form';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <CreditCardForm />
      </div>
    );
  }
}

export default App;
