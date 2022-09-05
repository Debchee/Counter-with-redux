import './App.css';
import Count from './Count';
import {useSelector} from 'react-redux';


function App() {
  const count= useSelector(state => state.counter.count);

  return (
    <div className="App">
    <h1>Redux made easy</h1>
    <h2>Count is: {count}</h2>
       <Count/>
    </div>
  );
}

export default App;
