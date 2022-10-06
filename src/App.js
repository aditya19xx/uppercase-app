import './App.css';
import AboutUs from './components/About/AboutUs';
import Navbar from './components/Navbar/Navbar';
// import TextForm from './components/Navbar/TextForm/TextForm';

function App() {
  return (
    <>
  <Navbar title="TexttUtils2" />
  {/* <div className="container my-3">
    <TextForm heading="Enter Your text here" />
  </div> */}
  <AboutUs/>
    </>
  );
}

export default App;
