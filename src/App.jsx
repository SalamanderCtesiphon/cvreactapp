import { useEffect, useState } from 'react'
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

  



  useEffect(() => {
    console.log(resume)
    
  }, [])
  return (
    <>
    <div className="App">
      <GeneralInfo 
        show={showModal} 
        onCloseButtonClick={toggleShowModal} 
      />
      <button 
        className="blue-button" 
        onClick={toggleShowModal}
      >
        Edit General Info
      </button>
      <div className="resumeDisplay">
        {resume.firstName}
        {resume.lastName}
        {resume.email}
        {resume.phone}
      </div>
      <EducationalInfo />
      <PracticalExperience />
    </div>
    </>
  )
}

export default App
