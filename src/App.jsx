import { useState, useEffect } from 'react'

function App() {
  const [color,setcolor] = useState("blue")
  const click = color =>{
    setcolor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  const buttonStyle = {
    padding: '10px 20px', // Adjust padding as needed
    textAlign: 'center',
  }
  return (
    <div className = "App">
      <h3 style={{ textAlign: 'center' }}>Change the background color</h3>
      <div style={{ textAlign: 'center' }}>
        <button style={buttonStyle} onClick={
          () => click("red")
          }>RED</button>
        <button style={buttonStyle} onClick={
          () => click("yellow")
          }>YELLOW</button>
        <button style={buttonStyle} onClick={
          () => click("green")
          }>GREEN</button>
        <button style={buttonStyle} onClick={
          () => click("blue")
          }>BLUE</button>
      </div>
      
    </div>
  )
}

export default App
