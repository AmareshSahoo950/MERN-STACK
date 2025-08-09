import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Dashboard, Home, Signup, Login} from './index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Home /> */}
      <Dashboard />
      {/* <Login /> */}
      {/* <Signup /> */}
      <Footer />
    </>
  )
}

export default App
