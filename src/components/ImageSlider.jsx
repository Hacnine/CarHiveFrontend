
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

 const ImageSlider = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      customInput={<CustomDateInput />} // You can use a custom input component
      dateFormat="MM/dd/yyyy" // Customize the date format
    />
  );
}

function CustomDateInput({ value, onClick }) {
  return (
    <button className="custom-date-input" onClick={onClick}>
      {value || 'Select a date'}
      <i className="custom-calendar-icon">📅</i>
    </button>
  );
}
export default ImageSlider;
