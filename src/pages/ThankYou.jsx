import { useContext } from 'react';
import checkMark from '../images/icon-thank-you.svg';
import formContext from "../context/form-context";

function ThankYou() {
  const { name } = useContext( formContext );

  return (
    <main className="form-container thank-you-container">
      <div className="form-data thank-you-data">
        <img src={checkMark} alt="checkmark" />
        <h1>Thank you{name}!</h1>
        <p>Thanks</p>
      </div>
    </main>
  )
}

export default ThankYou