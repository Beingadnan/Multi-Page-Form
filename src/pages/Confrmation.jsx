import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import formContext from "../context/form-context";

function Confrmation() {
  const { formData, resetSelectedAddOns } = useContext(formContext);
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate("/thank-you");
  }

  return (
    <main className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <div className="form-data">
          <h1>Confirmation</h1>
          <h2>Personal Info</h2>
          <p>Name: {formData.personalInfo.name}</p>
          <p>Email: {formData.personalInfo.email}</p>
          <p>Phone: {formData.personalInfo.phone}</p>
          <h2>Address Info</h2>
          <p>Address Line 1: {formData.addressInfo.address1}</p>
          <p>Address Line 2: {formData.addressInfo.address2}</p>
          <p>State: {formData.addressInfo.state}</p>
          <p>Zip Code: {formData.addressInfo.zipCode}</p>
        </div>
        <div className="form-submit">
          <div onClick={resetSelectedAddOns}>
            <Link to="/address" className="cool-gray">
              Go Back
            </Link>
          </div>
          <button type="submit" className="submit-btn confirm-btn">
            Confirm
          </button>
        </div>
      </form>
    </main>
  );
}

export default Confrmation;
