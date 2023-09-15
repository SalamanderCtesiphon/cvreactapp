import { useEffect, useState } from 'react'
import './App.css'
import EducationalInfo from './components/EducationalInfo'
import GeneralInfo from './components/GeneralInfo'
import PracticalExperience from './components/PracticalExperience'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEducation, setShowEducation] = useState(false)
  const [showExperience, setShowExperience] = useState(false)

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const toggleShowEducation = () => {
    setShowEducation(!showEducation);
  };

  const toggleShowExperience = () => {
    setShowExperience(!showExperience);
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
    setResume({
      ...resume, 
      firstName: firstName, 
      lastName: lastName,
      address: address,
      city: city,
      province: province,
      zip: zip,
      email: email,
      phone: phone
    })
  }

  useEffect(() => {
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
        setAddress={setAddress}
        address={address}
        setCity={setCity}
        city={city}
        setProvince={setProvince}
        province={province}
        setZip={setZip}
        zip={zip}
        setEmail={setEmail}
        email={email}
        setPhone={setPhone}
        phone={phone}
      />
      <EducationalInfo 
        show={showEducation}
        onCloseButtonClick={toggleShowEducation}
      />
      <PracticalExperience 
        show={showExperience}
        onCloseButtonClick={toggleShowExperience}
      />
      <div className="btnBox">
        <button 
          className="blue-button" 
          onClick={toggleShowModal}
        >
          Edit General Info
        </button>
        <button
          className='blue-button'
          onClick={toggleShowEducation}
        >
          Update Education
        </button>
        <button
          className='blue-button'
          onClick={toggleShowExperience}
        >
          Update Experience
        </button>
      </div>
      <div className="resumeDisplay">
        <div className="resumeHeader">
          <div className="headLeft">
            <ul>
              <li>{resume.firstName}  {resume.lastName}</li>
              <li>{resume.address}</li>
              <li>{resume.city}, {resume.province} {resume.zip}</li>
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
    </div>
    </>
  )
}

export default App
