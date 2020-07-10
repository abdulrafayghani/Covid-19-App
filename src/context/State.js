import React, { createContext, useReducer } from 'react';
import { reducer } from './Reducer';

const initialState = {
  loading: 'true',
  country: '',
  data: {
    confirmed: 0,
    deaths: 0,
    recovered: 0,
  },
};

export const GlobalContext = createContext(initialState);

export const DataProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const updateData = ({ confirmed, recovered, deaths }) => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
          confirmed: confirmed.value,
          deaths: deaths.value,
          recovered: recovered.value,
      },
    });
  };

   const updateCountryData = ( { confirmed, recovered, deaths } ) => {
    dispatch({
      type: 'UPDATE_DATA',
      payload: {
          confirmed: confirmed.value,
          deaths: deaths.value,
          recovered: recovered.value,
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        country: state.country,
        loading: state.loading,
        updateData,
        updateCountryData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
