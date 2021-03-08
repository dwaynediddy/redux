import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h2>Coutner {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      {isLogged ? 
      <h3>Valuable info Shouldnt see if not logged in</h3> : ''}
    </div>
  );
}

export default App;
