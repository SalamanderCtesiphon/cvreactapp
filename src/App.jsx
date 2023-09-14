import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')

  return (
    <>
    <input 
      type="text" 
      name="firstName" 
      id="firstName" 
      value={firstName}
      placeholder='enter your first name'
      onChange={(e) => setFirstName(e.target.value)}
    />
    {firstName}
    </>
  )
}

export default App
