

function GeneralInfo({ 
  show, 
  onCloseButtonClick, 
  setFirstName, 
  firstName, 
  setLastName,
  lastName
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
          <label htmlFor="firstName">First name:</label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last name:</label>
          <input 
            type="text" 
            name="LastName" 
            id="LastName" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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

export default GeneralInfo