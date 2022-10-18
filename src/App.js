import { useState } from 'react';
import './App.css';
import Alert from './components/Alert/Alert';
// import AboutUs from './components/About/AboutUs';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/Navbar/TextForm/TextForm';

function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
    setAlert(null)
   }, 1500);
  }
  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#171b2f';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Normal mode has been enabled", "success")
    }
  }
  return (
    <>
  <Navbar title="TexttUtils2" mode={mode} togglemode = {togglemode} />
  <Alert alert={alert}/>
  <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter Your text here" mode={mode} />
  </div>
  {/* <AboutUs/> */}
    </>
  );
}

export default App;
