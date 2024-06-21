import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import formContext from "../context/form-context";

function Address() {
  const { setAddressInfo } = useContext(formContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address1: "",
    address2: "",
    state: "",
    zipCode: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    let validArr = [];
    inputs.forEach((input) => {
      if (input.value === "") {
        input.style.borderColor = "var(--strawberry-red)";
        input.previousElementSibling.children[1].textContent =
          "This field is required";
      } else {
        validArr.push("valid");
        input.style.borderColor = "var(--cool-gray)";
        input.previousElementSibling.children[1].textContent = "";
      }
    });
    if (validArr.length >= 3) {
      setAddressInfo(formData);
      navigate("/confrmation");
    }
  }

  return (
    <main className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <div className="form-data">
          <h1>Address Information</h1>
          <p>
            Address Information (Address Line 1, Address Line 2, City, State,
            Zip Code)
          </p>
          <div className="input-div">
            <label htmlFor="address1">
              <span>Address Line 1</span> <span> </span>
            </label>
            <input
              type="text"
              id="address1"
              value={formData.address1}
              onChange={handleChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="address2">
              <span>Address Line 2</span> <span> </span>
            </label>
            <input
              type="text"
              id="address2"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="state">
              <span>State</span> <span> </span>
            </label>
            <input
              type="text"
              id="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="zipCode">
              <span>Zip Code</span> <span></span>
            </label>
            <input
              type="number"
              id="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-submit">
          <div>
            <Link to="/" className="cool-gray">
              Go Back
            </Link>
          </div>
          <button type="submit" className="submit-btn">
            Next Step
          </button>
        </div>
      </form>
    </main>
  );
}

export default Address;
