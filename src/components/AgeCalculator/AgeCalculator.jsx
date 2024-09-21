import { useState } from "react";
import PropTypes from 'prop-types';
import './AgeCalculator.css';

const AgeCalculator = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  return (
    <div>
      <img src="/clock.jpg" alt="clock" />
      <form onSubmit={handleSubmit}>
        <input
          value={birthDate}
          type="date"
          onChange={handleChangeDate}
          max={new Date().toISOString().split('T')[0]}
        />
        <button disabled={!birthDate} type="submit">Calculate Age</button>
      </form>
    </div>
  );
};

AgeCalculator.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};

export default AgeCalculator;