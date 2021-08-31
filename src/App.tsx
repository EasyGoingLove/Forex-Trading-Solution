import React from 'react';
import './App.css';

import Header from './componenets/Header/Header'
import PairBox from './componenets/PairBox/PairBox'
import data from './Data/currencies.json'
import imgs from './Data/ImgPaths'





const App = () => {
  
  const fullNames:string[]  = Object.values(data.fullName);
  const values:any[]  = Object.values(data.rates);
  const shortNames:string[] = Object.keys(data.rates);
  
  
  
  return (
      <div className="App">
       <Header/>
      {fullNames.map((element:string,index:number) => {
        return <PairBox 
        key={`ID:${index}`}
        image={imgs[index]}
        shortName={`EUR${shortNames[index]}`}
        fullName={`Euro / ${element}`}
        value={
          values[index] >= 1.0001 
          ? Number(parseFloat(values[index]).toFixed(4))
          : 1.0001 }
        />
      })}

    </div>
  );
}

export default App;
