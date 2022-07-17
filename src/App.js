
import React,{ useState } from 'react';
import './App.css';
import Navbar from './Components.js/Navbar';
import Text from './Components.js/Text';
// import Alert from './Components.js/Alert';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = ' rgb(11 1 17)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
  {/* <Navbar title="Adwaith react" /> */}
    <Navbar title="Adwaith react" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    {/* <Text heading="Enter the text to analyze below"/> */}
    <Text heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </>
  );
}

export default App;
