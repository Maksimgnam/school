
import './App.css'
import Homepage from './components/HomePage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrePage from './components/PrePage/PrePage';
import NavigationPage from './components/NavigationPage/NavigationPage';
import Popup from './components/Popup/Popup';
import NewsId from './components/NewsId/NewsId';
import News from './components/News/News';
import Header from './components/Header/Header';


function App() {


  return (
    <BrowserRouter >
      <div className='app'>

        <Routes>
          <Route path='/' element={<PrePage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/navigation' element={<NavigationPage />} />
          <Route path={`/news/:id`} element={<NewsId />} />
          <Route path='/news' element={<News />} />
          < Route path='/enroll-child-in-1-grade' element={<Popup />} />



        </Routes>
      </div>
    </BrowserRouter >

  )
}

export default App
