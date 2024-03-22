
import './App.css'
import Homepage from './components/HomePage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrePage from './components/PrePage/PrePage';
import NavigationPage from './components/NavigationPage/NavigationPage';


function App() {


  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<PrePage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/navigation' element={<NavigationPage />} />

        </Routes>
      </div>
    </BrowserRouter >

  )
}

export default App
