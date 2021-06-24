
import '../App.css';
import '../theme.css';
import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const getMode = () => {
    return JSON.parse( localStorage.getItem("mode")) || false
}

const [dark, setMode] = useState(getMode)
useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
    
}, [dark])
  return (

    <div className={dark ? "App dark-mode" : "App"}>
     

      <div className="darking">
        <label className="switch">
            <input type="checkbox"
            checked ={dark}
            onChange={()=> setMode(!dark)}
            />
            <span className="slider round"></span>
        </label>
      </div>
  
      </div>

  );
}

export default App;
