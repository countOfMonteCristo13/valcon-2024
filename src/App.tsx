import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import './App.css'


function App() {

  return (
    <main className='props-app'>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </main>
  )
}

export default App
