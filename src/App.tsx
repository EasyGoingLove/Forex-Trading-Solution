import React,{lazy } from 'react';
import './App.css';
import { JSXElement } from '@babel/types';
import PairBox from './componenets/PairBox/PairBox'
import data from './Data/currencies.json'
import imgs from './Data/ImgPaths'





const App = () => {
  
  const fullNames  = Object.values(data.fullName);
  const values  = Object.values(data.rates);
  const shortNames = Object.keys(data.rates);
  
  
  
  return (
      <div className="App">

      {fullNames.map((element:string,index:number) => {
        return <PairBox 
        key={`ID:${index}`}
        image={imgs[index]}
        shortName={`EUR${shortNames[index]}`}
        fullName={`Euro / ${element}`}
        value={values[index]}
        />
      })}

    </div>
  );
}

export default App;
