import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
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

  const [school, setSchool] = useState("Some University")
  const [major, setMajor] = useState("An Important Degree")
  const [startDate, setStartDate]= useState("January 2021")
  const [finalDate, setFinalDate] = useState("January 2012")
  const [education, setEducation] = useState({
    school: "Some University",
    major: "An Important Degree",
    startDate: "January 2021",
    finalDate: "January 2012"
  })

  const [id, setId] = useState('')
  const [employer, setEmployer] = useState('')
  const [employerAddress, setEmployerAddress] = useState('')
  const [employerCity, setEmployerCity] = useState('')
  const [employerZip, setEmployerZip] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [job, setJob] = useState({
    id: id,
    employer: employer,
    employerAddress: employerAddress,
    employerCity: employerCity,
    employerZip: employerZip,
    jobTitle: jobTitle
  })
  const [jobsArray, setJobsArray] = useState([
    {
      id: 1,
      employer: "A Business",
      employerAddress: "4455 Another St.",
      employerCity: "New Orleans",
      employerZip: "78978",
      jobTitle: "Janitor"
    }
  ])

  

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
    setEducation({
      ...education,
      school: school,
      major: major,
      startDate: startDate,
      finalDate: finalDate
    })    
  }

  const addJob = () => {
    setJob({
      id: uuidv4(),
      employer: employer,
      employerAddress: employerAddress,
      employerCity: employerCity,
      employerZip: employerZip,
      jobTitle: jobTitle
    })
    const btn = document.getElementById('addBtn')
    btn.style.visibility = 'hidden'
  }

  const addJobToList = () => {
    setEmployer("")
    setEmployerAddress("")
    setEmployerCity("")
    setEmployerZip("")
    setJobTitle("")
    setJobsArray([
      ...jobsArray,
      job
    ])

    const btn = document.getElementById('resumeBtn')
    btn.style.visibility = 'hidden'
    
    console.log(jobsArray)
  }

  useEffect(() => {
    console.log(job, jobsArray)
  }, [education, resume, job, jobsArray])

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
        school={school}
        setSchool={setSchool}
        major={major}
        setMajor={setMajor}
        startDate={startDate}
        setStartDate={setStartDate}
        finalDate={finalDate}
        setFinalDate={setFinalDate}
      />
      <PracticalExperience 
        show={showExperience}
        onCloseButtonClick={toggleShowExperience}
        employer={employer}
        setEmployer={setEmployer}
        employerAddress={employerAddress}
        setEmployerAddress={setEmployerAddress}
        employerCity={employerCity}
        setEmployerCity={setEmployerCity}
        employerZip={employerZip}
        setEmployerZip={setEmployerZip}
        jobTitle={jobTitle}
        setJobTitle={setJobTitle}
        addJob={addJob}
        addJobToList={addJobToList}
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
        <div className="eduDiv">
          <ul>
            <li>{education.school}</li>
            <li>{education.major}</li>
            <li>{education.startDate} - {education.finalDate}</li>
          </ul>
        </div>
        <div className="jobs">
          {jobsArray.map((job) => {
            return (
              <h2 key={job.id}>{job.employer}</h2>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
