import { useState } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Calc from './Calc.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Calc />
    </>
  );
}

export default App;
