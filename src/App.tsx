import './App.css'
import Button from './components/Button/Button'
import InputFormField from './components/InputFormField/InputFormField'

function App() {

  return (
    <>
      <InputFormField label='Username' id='username' inputType='text' placeholder='petar@gmail.com' onChange={()=>{}} value=''/>
      <InputFormField label='Password' id='password' inputType='password' onChange={()=>{}} value=''/>
      <Button title='Click Me' onClick={() => {}}/>
    </>
  )
}

export default App
