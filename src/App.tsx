import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./componenets/Header/Header";
import PairBox from "./componenets/PairBox/PairBox";
import data from "./Data/currencies.json";
import imgs from "./Data/ImgPaths";

const App = () => {
  const fullNames: string[] = Object.values(data.fullName);
  const values: any[] = Object.values(data.rates);
  const shortNames: string[] = Object.keys(data.rates);

  const [ticking, setTicking] = useState(true),
    [count, setCount] = useState(1),
    [stValues, setValues] = useState(values),
    [style, setStyle] = useState("");

  useEffect(() => {
    if (ticking) {
      const interval = setInterval(() => {
        let newValues: number[] = [];
        if (
          count <= 12 ||
          (count >= 25 && count < 37) ||
          (count > 48 && count <= 60)
        ) {
          for (let i in values) {
            newValues[i] = stValues[i] + 0.0001;
          }
          setStyle("green");
        } else {
          for (let i in values) {
            newValues[i] = stValues[i] - 0.0001;
          }
          setStyle("red");
        }

        setValues(newValues);
        setCount(count + 1);
        if (count / 6 === 10) {
          setTicking(false);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [count, stValues, ticking, values]);

  return (
    <div className="App">
      <Header />
      {fullNames.map((element: string, index: number) => {
        return (
          <PairBox
            valueStyle={stValues[index] > 1.0001 ? style : ""}
            key={`ID:${index}`}
            image={imgs[index]}
            shortName={`EUR${shortNames[index]}`}
            fullName={`Euro / ${element}`}
            value={
              stValues[index] > 1.0001 ? stValues[index].toFixed(4) : 1.0001
            }
          />
        );
      })}
    </div>
  );
};

export default App;
