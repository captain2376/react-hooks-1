import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import { HookCounter } from './components/HookCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import { HookCounterThree } from './components/HookCounterThree';
import { HookCounterFour } from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import { HookCounterOne } from './components/HookCounterOne';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      <HookCounterOne/>
    </div>
  );
}

export default App;
