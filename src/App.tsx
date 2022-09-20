import { useState } from 'react';
import './App.css';
import Todos from './pages/Todos';

import Vite from './pages/Vite';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Vite />
      <Todos />
    </div>
  );
}

export default App;
