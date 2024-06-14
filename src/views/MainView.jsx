import { useState } from 'react';

import MainScreen from '@widgets/MainScreen/MainScreen';
import Ships from '@widgets/Ships/Ships';

import ship1 from '@assets/img/ships/1.jpg';
import ship2 from '@assets/img/ships/2.jpg';
import ship3 from '@assets/img/ships/3.jpg';
import ship4 from '@assets/img/ships/4.jpg';
import ship5 from '@assets/img/ships/5.jpg';
import ship6 from '@assets/img/ships/6.jpg';
import ship7 from '@assets/img/ships/7.jpg';
import ship8 from '@assets/img/ships/8.jpg';
import ship9 from '@assets/img/ships/9.jpg';
import ship10 from '@assets/img/ships/10.jpg';

export default function MainView() {
  const [personsCount, setPersonsCount] = useState(8);
  const [hoursCount, setHoursCount] = useState(16);
  const [date, setDate] = useState('');

  const [startTime, setStartTime] = useState(15);
  const [price, setPrice] = useState([15000, 80000]);

  const ships = [
    {
      imgSrc: ship1,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 8,
      unavailable: false
    },
    {
      imgSrc: ship2,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 5,
      unavailable: false
    },
    {
      imgSrc: ship3,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 3,
      unavailable: false
    },
    {
      imgSrc: ship4,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 4,
      unavailable: false
    },
    {
      imgSrc: ship5,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 8,
      unavailable: false
    },
    {
      imgSrc: ship6,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 4,
      unavailable: false
    },
    {
      imgSrc: ship7,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 8,
      unavailable: false
    },
    {
      imgSrc: ship8,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 4,
      unavailable: false
    },
    {
      imgSrc: ship9,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 8,
      unavailable: false
    },
    {
      imgSrc: ship10,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 4,
      unavailable: false
    },
    {
      imgSrc: ship1,
      title: "Яхта Azimut 68 Princess",
      recommendedPrice: 1500,
      curPrice: 3000,
      length: 40,
      capacity: 8,
      unavailable: false
    },

  ];

  
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
      <Ships ships={ships}/>
    </div>
  )
}
