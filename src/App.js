import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import { useState } from 'react';
//import Welcome from './components/Welcome';

function App() {
  const [age, setAge]= useState(0);
  const increasedAge=()=>{
    setAge(age+1);
    
  }; 
  const [inputvalue, setinputvlaue]= useState("")
  const handleInput = (event) => {
    setinputvlaue(event.target.value);

  }
  
  const [count,setcount ]=  useState(0);

  
  const user=[
    {name:"Mars" ,isGasPlanet: false},
    {name:"Earth" ,isGasPlanet: false},
    {name:"Jupiter" ,isGasPlanet:true},
    {name:"venus" ,isGasPlanet:false},
    {name:"Neptune" ,isGasPlanet:true},
    {name:"Uranus" ,isGasPlanet:true}
  ];
  
    return (
      <div className="App">
        {user.map((nmme,key)=>!nmme.isGasPlanet && <h1 >{nmme.name} </h1>
        )}
        <Greet/>
        <div>{age} <button onClick={increasedAge}>increase age</button></div>
        <input type="text" onChange={handleInput}/>{inputvalue}
        <button 
        onClick={() => { (setcount(count+1));
        }}>increase
        </button>
        <button 
        onClick={() => { setcount(count-1);
        }}>decrease
        </button>
        <button 
        onClick={() => { setcount(0);
        }}>set to zero
        </button>
         <h1> {count}</h1>
      </div>
    );
  
}



export default App;
