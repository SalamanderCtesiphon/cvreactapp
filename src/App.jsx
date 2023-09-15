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
  
  const [firstName, setFirstName] = useState("FirstName")
  const [lastName, setLastName] = useState("LastName")
  const [address, setAddress] = useState("1234 Some St.")
  const [city, setCity] = useState("Some Town")
  const [province, setProvince] = useState("Some State")
  const [zip, setZip] = useState("12345")
  const [email, setEmail] = useState("sample@sample.com")
  const [phone, setPhone] = useState("1-123-123-1234")
  const [resume, setResume] = useState({
    firstName: "FirstName",
    lastName: "LastName",
    address: "1234 Some St.",
    city: "Some Town",
    province: "Some State",
    zip: "12345",
    email: "sample@samplemail.com",
    phone: '1-123-123-1234'
  })

  const onGeneralInfoSubmit = () => {
    setResume({...resume, firstName: firstName, lastName: lastName})
  }


  console.log(resume)
  useEffect(() => {
    onGeneralInfoSubmit()
    console.log(resume)
    
  }, [])
  return (
    <>
    <button onClick={() => onGeneralInfoSubmit()}>update Resume</button>
    <div className="App">
      <GeneralInfo 
        show={showModal} 
        onCloseButtonClick={toggleShowModal} 
        setFirstName={setFirstName}
        firstName={firstName}
        setLastName={setLastName}
        lastName={lastName}
      />
      <button 
        className="blue-button" 
        onClick={toggleShowModal}
      >
        Edit General Info
      </button>
      <div className="resumeDisplay">
        <div className="resumeHeader">
          <div className="headLeft">
            <ul>
              <li>{resume.firstName}  {resume.lastName}</li>
              <li>{resume.address}</li>
              <li>{resume.city}, {resume.province}</li>
              <li> {resume.zip}</li>
            </ul>      
          </div>
          <div className="headRight">
            <ul>
              <li> {resume.email}</li>
              <li> {resume.phone}</li>
            </ul>
           
           
          </div>
        </div>
      </div>
      <EducationalInfo />
      <PracticalExperience />
    </div>
    </>
  )
}

export default App
