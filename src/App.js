import P from 'prop-types';
import './App.css';
import React, { useState, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('pai renderizou');

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
