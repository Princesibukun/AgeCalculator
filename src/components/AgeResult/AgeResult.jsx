import React from 'react';
import PropTypes from 'prop-types';

const AgeResult = ({ age }) => {
  return (
    <div className="age-result">
      <p>Present Date: {age.presentDate}</p>
      <p>Your exact age is: {age.years} years, {age.months} months, and {age.days} days</p>
    </div>
  );
};

AgeResult.propTypes = {
  age: PropTypes.shape({
    presentDate: PropTypes.string.isRequired,
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }).isRequired,
};

export default AgeResult;
