import React from 'react'

function PracticalExperience({show, onCloseButtonClick}) {
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
          />
          <label htmlFor="employerAdress">Company Adrress:</label>
          <input 
            type="text" 
            name="employerAdress" 
            id="employerAdress" 
          />
          <label htmlFor="employerCity">Company City:</label>
          <input 
            type="text" 
            name="employerCity" 
            id="employerCity" 
          />
          <label htmlFor="employerZip">Zip Code:</label>
          <input 
            type="text" 
            name="employerZip" 
            id="employerZip" 
          />
          <label htmlFor="jobTitle">Job Title:</label>
          <input 
            type="text" 
            name="jobTitle" 
            id="jobTitle" 
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