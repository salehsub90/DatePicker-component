import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { DateRange, DateRangePicker } from 'react-date-range';
import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import './App.css';


function App() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    }
  ]);

  return (
    <div className="App">
      <span>Single:</span>< br />
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable={true}
        showYearDropdown
      />
      <br />
      <span>Range:</span>< br />
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      
    </div>
  );
}

export default App;
