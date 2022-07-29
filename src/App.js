
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({

      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)

    }, 3000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Darkmode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Lightmode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtlis" about="About US" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

