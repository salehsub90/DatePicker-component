import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';


function App() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="App">
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable={true}
        showYearDropdown
      />
    </div>
  );
}

export default App;
