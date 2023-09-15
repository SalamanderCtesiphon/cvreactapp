

function GeneralInfo({ 
  show, 
  onCloseButtonClick, 
  setFirstName, 
  firstName, 
  setLastName,
  lastName,
  setAddress,
  address,
  city,
  setCity,
  province, 
  setProvince,
  zip,
  setZip,
  email,
  setEmail,
  phone,
  setPhone

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
            name="lastName" 
            id="lastName" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="address">Street Address:</label>
          <input 
            type="text" 
            name="address" 
            id="address" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="city">City:</label>
          <input 
            type="text" 
            name="city" 
            id="city" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="province">State:</label>
          <input 
            type="text" 
            name="province" 
            id="province" 
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
          <label htmlFor="zip">Zip Code:</label>
          <input 
            type="text" 
            name="zip" 
            id="zip" 
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="text" 
            name="phone" 
            id="phone" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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