import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Personal from './personal.jsx'

function CustomComponent(){
  return(
    <h2>Our Custom Component</h2>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Personal />
    { /* <CustomComponent /> */}
  </React.StrictMode>,
)
