import './App.css';
import { Clock } from './components/ClockFromDocumentation';
import { FunctionalClock } from './components/FunctionalFromClockFromDocumentation';

function App() {
  return (
    <div className="App">
      <Clock />
      <FunctionalClock />
    </div>
  );
}

export default App;
