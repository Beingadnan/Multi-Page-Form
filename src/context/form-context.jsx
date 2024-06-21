import { createContext, useState } from "react";

const formContext = createContext();

export const FormContextProvider = ({ children }) => {

  const [formData, setFormData] = useState({
    personalInfo: {},
    addressInfo: {}
  });

  const setPersonalInfo = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: data
    }));
  };

  const setAddressInfo = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      addressInfo: data
    }));
  };
  

  return (
    <formContext.Provider value={{ formData, setPersonalInfo, setAddressInfo, }}>
      {children}
    </formContext.Provider>
  );
};

export default formContext;
