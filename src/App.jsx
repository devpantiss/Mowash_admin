import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/common/Layout/Layout'
import Dashboard from './Pages/Dashboard'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'


function App() {
  

  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path="page1" element={<Page1 />}/>
          <Route path="page2" element={<Page2 />}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
