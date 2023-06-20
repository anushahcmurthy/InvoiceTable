import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/pages/layout'
import Invoice from './components/invoice'
import Home from './components/Home'

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="Invoice" element={<Invoice/>}/>
      </Route>
    </Routes>
  </Router>  
  )  
}

export default App