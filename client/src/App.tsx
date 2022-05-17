import React, { useEffect } from 'react';
import { Cranes } from './components/Cranes/Cranes';
import { useDispatch } from 'react-redux';
import { getCranesAsync } from './store/crane/getCranes';

import './App.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCranesAsync());
  }, [dispatch]);

  return (
    <div className='App'>
        <Cranes />
    </div>
  );
};
