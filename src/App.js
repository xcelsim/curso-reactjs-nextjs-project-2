import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clickado');
};

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  // componentDidUpdate - executa toda vez que o component atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn);

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1').removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependencia  - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('contador1 mudou para', counter1);
  }, [counter1]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>
        C1: {counter1} C2: {counter2}
      </h1>
      <button onClick={() => setCounter1(counter1 + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default App;
