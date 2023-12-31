
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


const App = () => {


  return (
    <div className='lg:mx-6'>
      <Header />
      <Outlet />
      <Footer />

    </div>
  )
}

export default App
