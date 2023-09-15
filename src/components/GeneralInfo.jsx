

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
        <input 
          type="text" 
          name="firstName" 
          id="firstName" 
          value={firstName}
          placeholder='enter your first name'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          type="text" 
          name="LastName" 
          id="LastName" 
          value={lastName}
          placeholder='enter your last name'
          onChange={(e) => setLastName(e.target.value)}
        />
        <div className="footer">
          <button onClick={onCloseButtonClick}>Close Modal</button>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default GeneralInfo