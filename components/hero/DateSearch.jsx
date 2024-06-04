'use client'

import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = () => {
  const [date, setDate] = useState(new DateObject());

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={date}
        onChange={setDate}
        numberOfMonths={1}
        offsetY={10}
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;