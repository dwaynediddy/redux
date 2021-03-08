import './App.css';
import { useSelector } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
      <h2>Coutner {counter}</h2>
    </div>
  );
}

export default App;
