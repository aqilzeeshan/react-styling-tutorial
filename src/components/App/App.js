import React from 'react';
import './App.css';

import Alert from '../Alerts/Alert'
import CartSuccess from '../CartSuccess/CartSuccess';

function App() {

  const wrapper = {
    padding: 20
  }

  return (
    <div style={wrapper}>
      <Alert title="Items Not Added" type="error">
        <div>Your items are out of stock.</div>
      </Alert>
      <CartSuccess />
    </div>
  );
}

export default App;
