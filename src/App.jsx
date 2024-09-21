import React, { useState } from 'react';
import AgeCalculator from './components/AgeCalculator/AgeCalculator';
import AgeResult from './components/AgeResult/AgeResult';
import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const totalMonths = differenceInMonths(today, birthDateObj);
    const ageMonths = totalMonths % 12;
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDateObj.getDate());
    const ageDays = differenceInDays(today, lastMonth);

    const ageResult = {
      presentDate: today.toLocaleDateString(),
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    };

    setAge(ageResult);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <AgeCalculator calculateAge={calculateAge} />
      {age && <AgeResult age={age} />}
    </div>
  );
}

export default App;
