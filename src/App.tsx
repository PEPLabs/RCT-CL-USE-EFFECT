import React from 'react';
import './App.css';
import DemoUseEffectComponent from './components/demo-component';
import TodoUseEffectComponent from './components/todo-component';

function App() {
  return (
    <div className="App">
      <h2>UseEffect in React</h2>
      <p>When creating fully feature front-end applications you soemtimes need to create logic that triggers when a component enters or leaves the screen; for example, when
        a social media component that holds posts & comments first appears you may want to ping a server to get the lastest posts. Well, the "useEffect" hook in React makes
        this easy to work with in React function components. The "useEffect" function can allows you to trigger logic when a component is "mounted", when a component is
        "unmounted", when a component is being updated, or even when a specific variable's state is altered.
      </p>
      <p>In this lab we'll explore useEffect for mounting, unmountng, and updating:</p>
      <ul style={{textAlign: "left"}}>
        <li>A component "mounts" when it appears on screen</li>
        <li>A component "unmounts" when it disappers from the screen</li>
        <li>A component "updates" when the state is updated</li>
      </ul>


      <div className="section-container">
        <DemoUseEffectComponent></DemoUseEffectComponent>

      </div>
      <div className="todo-container">
        <TodoUseEffectComponent></TodoUseEffectComponent>
      </div>

      <div>
        <a href="https://react.dev/learn/lifecycle-of-reactive-effects">https://react.dev/learn/lifecycle-of-reactive-effects</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try to create functinality that triggers once, on page load. There is a note in the demo-component that explains how to do this.*/}
    </div>
  );
}

export default App;
