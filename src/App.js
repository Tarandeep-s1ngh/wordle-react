import { useEffect, useState } from 'react';
import { Wordle } from './components/Wordle';
import './App.css';

function App() {

  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res=>res.json())
    .then(json => {
      const randomSolution = json[Math.floor(Math.random()*json.length)];
      setSolution(randomSolution.word);
    })
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
