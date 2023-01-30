import './App.css';
import { ReactDOM } from 'react';
import React from 'react';
// import HookCount from './components/HookCount';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import UseEffectHookConditional from './components/UseEffectHookConditional';
import HookMouse from './components/HookMouse';
import HookMouseCleanUp from './components/HookMouseCleanUp';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetch from './components/DataFetch';
import UseContext1 from './components/UseContext1';
import UseReducerOne from './components/UseReducerOne';
import UseReducerTwo from './components/UseReducerTwo';
import UseReducerThree from './components/UseReducerThree';
import UseReducerFour from './components/UseReducerFour';
import UseReducerFive from './components/UseReducerFive';
import UseReducer from './components/UseReducer';
import UseReducer2 from './components/UseReducer2';
import UseReducer3 from './components/UseReducer3';
export const UserContext=React.createContext();
export const ChannelContext=React.createContext();
function App() {
  return (
 <div className='App'>
  <>
  <UseReducer3/>
  {/* <UseReducer2/> */}
  {/* <UseReducer/> */}
  {/* <UseReducerFive/> */}
  {/* <UseReducerFour/> */}
  {/* <UseReducerThree/> */}
  {/* <UseReducerTwo/> */}
  {/* <UseReducerOne/> */}
  {/* <UserContext.Provider value={'Anand'}>
    <ChannelContext.Provider value={'Aryan'}>
    <UseContext1/>
    </ChannelContext.Provider>
 
  </UserContext.Provider> */}
  
  {/* <DataFetch/> */}
  {/* <IntervalHookCounter /> */}
  {/* <HookMouseCleanUp/> */}
  {/* <HookMouse/> */}
  {/* <UseEffectHookConditional/> */}
  {/* <HookCounterOne/> */}
  {/* <HookCounterFour/> */}
  {/* <HookCounterThree/> */}
  {/* <HookCounterTwo/> */}
  {/* <HookCount/> */}
  </>
 </div>
  )
}

export default App;
