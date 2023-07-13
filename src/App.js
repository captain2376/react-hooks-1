import logo from './logo.svg';
import './App.css';
import React from 'react'
import ClassCounter from './components/ClassCounter';
import { HookCounter } from './components/HookCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import { HookCounterThree } from './components/HookCounterThree';
import { HookCounterFour } from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import { HookCounterOne } from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import { HookMouse } from './components/HookMouse';
import { MouseContainer } from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import { IntervalHookCounter } from './components/IntervalHookCounter';
import { DataFetching } from './components/DataFetching';
import { ComponentC } from './components/ComponentC';
import { CounterOne } from './components/CounterOne';

export const UserContext = React.createContext()
export const CompanyContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value='Fathima'>
        <CompanyContext.Provider value='CGG'>
           <ComponentC/>
        </CompanyContext.Provider>
      </UserContext.Provider> */}
      <CounterOne/>
      
    </div>
  );
}

export default App;
