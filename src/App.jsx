import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Profiles from "./components/Profiles"
import MyButton from "./components/MyButton"

const person = {
  name: 'Nahid Parvez',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function App() {

  return (
    <div style={person.theme}>
      <h1> Hi, {person.name} </h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="avatar"
      />
      <ul>
        <li>Invent new traffic lights </li>
        <li>Rehearse a movie scene </li>
        <li>Improve spectrum technology </li>
      </ul>

    </div>

  )

}

export default App
