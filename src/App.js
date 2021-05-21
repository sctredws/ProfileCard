
import { render } from '@testing-library/react';
import { Component, useState } from 'react';
import './App.css';
import Display from './Component/Display'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wynault from './Images/wynault.png'

library.add(
  faGithubAlt,
  faUserGraduate
);

function App() {

//  const [state, setState ] = useState(initialState)

const [skills, setSkills] = useState("My Name Is Sasha")
const [count, setCount] = useState(0);

const handleName = ()=>{
  setSkills("My Name Is Sasha")
}

const handleSkills = ()=>{
  setSkills("I am a Frontend Developer")
}


const element = <FontAwesomeIcon icon = {faGithubAlt}/>
const element2 = <FontAwesomeIcon icon = {faUserGraduate}/>
const element3 = <FontAwesomeIcon icon = {faHeart}/>



  return (
    <div className="App">
      
      <main>
        <div className= "img" >  <img className="wynault" src={wynault} alt="wynault" /></div>
        <div><strong>Hello World!</strong></div>

        <Display tech = {skills} />

        <div className= "btn-grp">
          <div><button className = "buttons" onClick= {handleName}> Name </button><button className = "buttons" onClick = {handleSkills}>Skills</button></div> 
          </div>
        <div className = "like"> {count} <button  className = "counter" onClick={() => setCount(count + 1)}> <FontAwesomeIcon icon = {faHeart}/> </button></div>
        <div><a href = "https://github.com/sctredws" target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon icon={faGithubAlt} size="2x" style={{ color: "#f156bb"}} /> </a> </div>

      </main>

    </div>
  );
}


export default App;
