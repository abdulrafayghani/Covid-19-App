import React, { Suspense } from 'react';
import { DataProvider } from './context/State';
import { Header } from './components/header/Header';
import { Background } from './components/Background/Background';
import { Chart } from './components/chart/Chart';
import { Loading } from './components/loading/Loading'

// const BackGround = React.lazy( () => import('./components/Background/Background')) 
// const Chart = React.lazy( () => import('./components/chart/Chart')) 


const App = () => {
  return (
    <>
      <DataProvider>
      <Suspense fallback={ <Loading /> }>
          <Header /> 
          <Background />
         <Chart />
        </Suspense>
      </DataProvider>
    </>
  );
};

export default App;
