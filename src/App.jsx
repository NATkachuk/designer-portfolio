import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './pages/layout/layout'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import About from './pages/About/About'

function App() {
  return (
    <>
      <BrowserRouter basename='/designer-portfolio/'>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
