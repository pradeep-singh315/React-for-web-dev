import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Personal from './personal.jsx'

// function CustomComponent(){
//   return(
//     <h2>Our Custom Component</h2>
//   )
// }

const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Click here to Visit Google </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
     
    anotherElement
)
