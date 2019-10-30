import React from 'react';
import CreditCardForm from './components/credit-card-form/credit-card-form';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

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
