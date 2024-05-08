import { useState } from "react";

export const GetAge = () => {
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const handleDate = (e) => setDate(e.target.value);
  const handleMonth = (e) => setMonth(e.target.value);
  const handleYear = (e) => setYear(e.target.value);

  const handleChange = () => {
    const x = new Date();
    const currentDate = x.getDate();
    const currentMonth = x.getMonth() + 1;
    const currentYear = x.getFullYear();
    console.log(date, month - 500, year);
  };

  return (
    <div>
      <div onChange={handleChange} className='flex flex-col gap-8'>
        <input
          type='number'
          onChange={handleDate}
          name='date'
          placeholder='Enter Born Date'
        />
        <input
          type='number'
          onChange={handleMonth}
          name='month'
          placeholder='Enter Born Month'
        />
        <input
          type='number'
          onChange={handleYear}
          name='year'
          placeholder='Enter Born Year'
        />
      </div>
    </div>
  );
};
