import { useState } from 'react'

function GeneralInfo() {

  const [resume, setResume] = useState({
    firstName: "FirstName",
    lastName: "LastName"
  })
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

export default GeneralInfo