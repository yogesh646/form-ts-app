import React, { useState } from 'react';

const Count = () => {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const dateRegex = /^(19[0-9]{2}|20[0-9]{2}|2100)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    setDate(inputDate);

    // Validate the input using regex
    if (dateRegex.test(inputDate)) {
      setError('');
    } else {
      setError('Invalid date format or out of range. Format: YYYY-MM-DD');
    }
  };

  return (
    <div>
      <label htmlFor="date">Enter Date (YYYY-MM-DD):</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateChange}
        placeholder="YYYY-MM-DD"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Count;