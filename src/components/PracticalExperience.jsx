import React from 'react'

function PracticalExperience({
  show, 
  onCloseButtonClick,
  employer,
  setEmployer,
  employerAddress,
  setEmployerAddress,
  employerCity, 
  setEmployerCity,
  employerZip, 
  setEmployerZip,
  jobTitle, 
  setJobTitle
}) {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="modal-wrapper">
      <div className="modal">
        <div className="body">
          Click on the close button to close the modal.
        </div>
        <div className="genInfoForm">
          <label htmlFor="employer">Company Name:</label>
          <input 
            type="text" 
            name="employer" 
            id="employer" 
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          />
          <label htmlFor="employerAdress">Company Adrress:</label>
          <input 
            type="text" 
            name="employerAdress" 
            id="employerAdress" 
            value={employerAddress}
            onChange={(e) => setEmployerAddress(e.target.value)}
          />
          <label htmlFor="employerCity">Company City:</label>
          <input 
            type="text" 
            name="employerCity" 
            id="employerCity" 
            value={employerCity}
            onChange={(e) => setEmployerCity(e.target.value)}
          />
          <label htmlFor="employerZip">Zip Code:</label>
          <input 
            type="text" 
            name="employerZip" 
            id="employerZip" 
            value={employerZip}
            onChange={(e) => setEmployerZip(e.target.value)}
          />
          <label htmlFor="jobTitle">Job Title:</label>
          <input 
            type="text" 
            name="jobTitle" 
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)} 
          />
        </div>
        <div className="footer">
          <button onClick={onCloseButtonClick}>Close Modal</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default PracticalExperience