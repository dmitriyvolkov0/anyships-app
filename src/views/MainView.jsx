import MainScreen from '@widgets/MainScreen/MainScreen';
import { useState } from 'react';

export default function MainView() {
  const [personsCount, setPersonsCount] = useState(1);
  const [hoursCount, setHoursCount] = useState(1);
  const [date, setDate] = useState(null);
  
  const searchFromProps = {
    personsCount: personsCount,
    setPersonsCount: setPersonsCount,
    hoursCount: hoursCount,
    setHoursCount: setHoursCount,
    date: date,
    setDate: setDate
  };

  return (
    <div>
        <MainScreen
          searchFromProps={searchFromProps}
        />
    </div>
  )
}
