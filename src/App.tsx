import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import './App.css'


function App() {

  return (
<<<<<<< HEAD
    <main className='props-app'>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </main>
=======
    <>
      <InputFormField label='Username' id='username' inputType='text' placeholder='petar@gmail.com' onChange={()=>{}} value=''/>
      <InputFormField label='Password' id='password' inputType='password' onChange={()=>{}} value=''/>
      <Button title='Click Me' onClick={() => {console.log('hello')}}/>
    </>
>>>>>>> 2e6b99e (button component created)
  )
}

export default App
