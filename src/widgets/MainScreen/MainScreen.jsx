import React from 'react';
import s from './style.module.css';

import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';

export default function MainScreen({ searchFromProps }) {
  return (
    <div className={s.wrapper}>
      <Nav/>
      <SearchForm searchFromProps={searchFromProps}/>
    </div>
  )
}
