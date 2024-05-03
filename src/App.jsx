
import './App.css'
import Homepage from './components/HomePage/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrePage from './components/PrePage/PrePage';
import NavigationPage from './components/NavigationPage/NavigationPage';
import Popup from './components/Popup/Popup';
import NewsId from './components/NewsId/NewsId';
import News from './components/News/News';
import DocId from './components/DocId/DocId';
import SearchPage from './components/SearchPage/SearchPage';


function App() {


  return (
    <BrowserRouter >
      <div className='app'>

        <Routes>
          <Route path='/' element={<PrePage />} />
          <Route exact path='/home' element={<Homepage />} />
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/navigation' element={<NavigationPage />} />
          <Route path={`/news/:id`} element={<NewsId />} />
          <Route path={`/documents/:id`} element={<DocId />} />
          <Route path='/news' element={<News />} />
          < Route path='/enroll-child-in-1-grade' element={<Popup />} />



        </Routes>
      </div>
    </BrowserRouter >

  )
}

export default App
