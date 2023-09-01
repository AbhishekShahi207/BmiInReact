import { React, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(80);
  const [categ, newCateg] = useState("Normal Weight");

  const onWChange = (e) => {
    setWeight(e.target.value);
  };
  const onHChange = (e) => {
    setHeight(e.target.value);
  };

  const output = useMemo(() => {
    const newHeight = height / 100;
    return (weight / (newHeight * newHeight)).toFixed(2);
  },[height,weight]);

  const category = () => {
   
   if (output<16.5){
   newCateg( "Severly Underweight")
   }
   else if (output>=16.5 && output<18.5 ){
   newCateg("UnderWeight")
   }
   else if (output>=18.5 && output<24.9 ){
   newCateg( "Normal Weight")
   }
   else if (output>=24.9 && output<=29.9 ){
   newCateg( "OverWeight")
   }
   else{
  newCateg("Obesity")
   }
  
  };

useMemo(()=>{
  category()

},[height,weight])


  return (
    <div className="container">
      <main className="main">
        <h1> *BMI Calculator</h1>
        <div className="input-part">
          <p className="slider-value">Weight : {weight} kg</p>
          <input
            className="slider"
            type="range"
            step="1"
            min="20"
            max="200"
            onChange={onWChange}
          />
          <p className="slider-value">Height : {height} cm</p>
          <input
            className="slider"
            type="range"
            step="1"
            min="100"
            max="250"
            onChange={onHChange}
          />
        </div>

        <div className="output-value">
          <p>Your BMI is : <span className="result">{output}</span></p>
      
          <p>You Belong to {categ} BMI Category</p>
        </div>
      </main>
    </div>
  );
}

export default App;
