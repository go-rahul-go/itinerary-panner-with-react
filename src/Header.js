import React, { useContext } from 'react'
import "./style.css"
import { ThemeContext } from './App'
const Header = () => {
  const newTheme=useContext(ThemeContext);
  // console.log(newTheme)
  let newStyle={
    backgroundColor:"",
    color:"",
    
  }
  let h1Border={
    borderBottom:""
  }
  if(newTheme==="dark")
  {
      newStyle.backgroundColor="#2E282A"
      newStyle.color="#FFC914"
      h1Border.borderBottom="1px solid #FFC914"
  }
  else{
    newStyle.backgroundColor="#F7F7FF"
      newStyle.color="#2E282A"
      h1Border.borderBottom="1px solid black"
  }
  return (
    <header style={newStyle}>
        <h1 style={h1Border}>Itinerary planner</h1>
    </header>
  )
}

export default Header;