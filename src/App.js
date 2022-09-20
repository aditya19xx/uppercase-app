import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/Navbar/TextForm/TextForm';

function App() {
  return (
    <>
  <Navbar title="TexttUtils2" />
  <div className="container my-3">
    <TextForm heading="Enter Your text here" />
  </div>
    </>
  );
}

export default App;
