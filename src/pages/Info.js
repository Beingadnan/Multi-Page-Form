import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import formContext from "../context/form-context";

function Home() {
  const { setPersonalInfo } = useContext(formContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      setPersonalInfo(formData);
      navigate("/address");
    }
  }

  return (
    <main className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <div className="form-data">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <div className="input-div">
            <label htmlFor="name">
              <span>Name</span> <span>&nbsp;</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="email">
              <span>Email Address</span> <span>&nbsp;</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-div">
            <label htmlFor="phone">
              <span>Phone Number</span> <span>&nbsp;</span>
            </label>
            <input
              type="number"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-submit">
          <div>&nbsp;</div>
          <button type="submit" className="submit-btn">
            Next Step
          </button>
        </div>
      </form>
    </main>
  );
}
export default Home;
