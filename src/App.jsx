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
    lastName: "LastName"
  })
  const [firstName, setFirstName] = useState('')

  return (
    <>
    <div className="App">
      <GeneralInfo 
        firstName={firstName}
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
