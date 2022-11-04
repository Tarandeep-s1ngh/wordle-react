import { useEffect, useState } from 'react';
import { Wordle } from './components/Wordle';
import { constants } from './constants';
import './App.css';

function App() {

  const [solution, setSolution] = useState(null);

  useEffect(() => {
      const sol = constants.solutions;
      const randomSolution = sol[Math.floor(Math.random()*sol.length)];
      setSolution(randomSolution.word);
  }, [setSolution])

  return (
    <div className="App">
      <h1 className='gradient-text title'>WORDLE</h1>
      <small className='subscript'>By Taran</small>

      {/* SOLUTION FOR TESTING */}
      <small>{solution}</small>

      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
