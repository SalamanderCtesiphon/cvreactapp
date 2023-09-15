import React from 'react'

function EducationalInfo({show, onCloseButtonClick}) {
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
          <label htmlFor="firstName">First name:</label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName" 
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