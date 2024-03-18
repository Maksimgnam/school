
import './App.css'
import Header from './components/Header/Header';
import Homepage from './components/HomePage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImagePage from './components/ImagePage/ImagePage';
import PrePage from './components/PrePage/PrePage';


function App() {


  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<PrePage />} />
          <Route path='/home' element={<Homepage />} />

        </Routes>
      </div>








    </BrowserRouter >

  )
}

export default App
