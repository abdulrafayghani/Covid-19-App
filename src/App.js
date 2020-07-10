import React, { Suspense } from 'react';
import { DataProvider } from './context/State';
import { Header } from './components/header/Header';
import { Background } from './components/Background/Background';
import { Chart } from './components/chart/Chart';

const App = () => {
  return (
    <>
      <DataProvider>
      <Suspense >
          <Header /> 
          <Background />
         <Chart />
        </Suspense>
      </DataProvider>
    </>
  );
};

export default App;
