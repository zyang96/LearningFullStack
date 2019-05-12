import React from 'react';
import './App.css';
import FirstComponent, {SecondComponent} from './components/simplecomponents/SimpleComponent.jsx'

function App() {
  return (
    <div className="App">
        <FirstComponent />
        <SecondComponent />
    </div>
  );
}

export default App;
