import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou muda');
      return { ...state, title: 'mudou' };
    }
    case 'invert': {
      console.log('chamou invert');
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>{title}</h1>
      <button onCLick={() => dispatch({ type: 'muda' })}>Click</button>
      <button onCLick={() => dispatch({ type: 'invert' })}>Click</button>
    </div>
  );
}

export default App;
