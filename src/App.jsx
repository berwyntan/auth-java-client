import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import CheckAuth from './components/CheckAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="auth" element={<CheckAuth />}>
            <Route path="" element={<Welcome />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  )
}

export default App
