import { useState } from 'react';
import './App.css';
// import AboutUs from './components/About/AboutUs';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/Navbar/TextForm/TextForm';

function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not

  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
  <Navbar title="TexttUtils2" mode={mode} togglemode = {togglemode} />
  <div className="container my-3">
    <TextForm heading="Enter Your text here" />
  </div>
  {/* <AboutUs/> */}
    </>
  );
}

export default App;
