

function GeneralInfo({ show, onCloseButtonClick, onGeneralInfoSubmit, firstName }) {
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
          onChange={onGeneralInfoSubmit}
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