
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
   Switch,
  Route
} from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(massage,type)=>{
    setAlert({
           msg : massage,
           type : type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);


  let removeclass=()=>{                             //
    document.body.classList.remove('bg-primary')   // 
    document.body.classList.remove('bg-success')  // 
    document.body.classList.remove('bg-warning') // 
    document.body.classList.remove('bg-danger') //
  }                                            //
  const togglemode=(cls)=>{                   //
    removeclass();                           //
    document.body.classList.add("bg-"+cls); //
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#031b32';
        showAlert("dark mode anable","success");
        document.title ='TextUtils - Dark mode';
       
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
         showAlert("light mode anable","success");
         document.title='TextUtils - light mode';


         setInterval(() => {
          document.title ='TextUtils - Home';
        }, 2000);
    }
  }
  return (
    <>
    <Navbar AboutText="About us" mode={mode} togglemode={togglemode}/>
    <Alert Alert={alert}/>
    <div className="container my-2">
  
    <Router>
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} mode={mode}/>
          </Route>
    </Switch>
    </Router>
  
    </div>
   </>
  );
}

export default App;