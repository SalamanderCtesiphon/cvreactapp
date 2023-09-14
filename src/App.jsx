import { useState } from 'react'
import './App.css'
import EducationalInfo from './components/EducationalInfo'
import GeneralInfo from './components/GeneralInfo'
import PracticalExperience from './components/PracticalExperience'

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };
  
  const [resume, setResume] = useState({
    firstName: "FirstName",
    lastName: "LastName",
    email: "sample@samplemail.com",
    phone: '1-123-123-1234'
  })

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const updateResume = () => {
    setResume({...resume, firstName: firstName, lastName: lastName, email: email, phone: phone})
  }

  return (
    <>
    <div className="App">
      <GeneralInfo 
        firstName={firstName}
        setFirstName={setFirstName}
        show={showModal} 
        onCloseButtonClick={toggleShowModal} 
      />
      <button 
        className="blue-button" 
        onClick={toggleShowModal}
      >
        Open Modal
      </button>
    </div>
    <EducationalInfo />
    <PracticalExperience />
    </>
  )
}

export default App
