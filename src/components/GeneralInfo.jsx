

function GeneralInfo({ firstName, setFirstName, show, onCloseButtonClick }) {
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
        {firstName}
        <div className="footer">
          <button onClick={onCloseButtonClick}>Close Modal</button>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default GeneralInfo