import React from 'react'

function EducationalInfo({
  show, 
  onCloseButtonClick,
  school,
  setSchool,
  major,
  setMajor,
  startDate,
  setStartDate,
  finalDate,
  setFinalDate

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
          <label htmlFor="school">School name:</label>
          <input 
            type="text" 
            name="school" 
            id="school" 
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <label htmlFor="major">Major name:</label>
          <input 
            type="text" 
            name="major" 
            id="major" 
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
          <label htmlFor="startDate">Enrollment Date:</label>
          <input 
            type="text" 
            name="startDate" 
            id="startDate" 
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label htmlFor="finalDate">Graduated:</label>
          <input 
            type="text" 
            name="finalDate" 
            id="finalDate" 
            value={finalDate}
            onChange={(e) => setFinalDate(e.target.value)}
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

export default EducationalInfo