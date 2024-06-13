import MainScreen from '@widgets/MainScreen/MainScreen';
import { useState } from 'react';

export default function MainView() {
  const [personsCount, setPersonsCount] = useState(1);
  const [hoursCount, setHoursCount] = useState(1);
  const [date, setDate] = useState('');

  const [startTime, setStartTime] = useState(15);
  const [price, setPrice] = useState([15000, 80000]);
  
  const searchFromProps = {
    personsCount: personsCount,
    setPersonsCount: setPersonsCount,
    hoursCount: hoursCount,
    setHoursCount: setHoursCount,
    date: date,
    setDate: setDate,
    startTime: startTime,
    setStartTime: setStartTime,
    price: price,
    setPrice: setPrice
  };

  return (
    <div>
      <MainScreen searchFromProps={searchFromProps}/>
    </div>
  )
}
