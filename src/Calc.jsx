import { useState } from "react";


function CalcResults(){
  return(
    <>
      <h2>
        Results
      </h2>
      <p>Monthly Mortgage = {100}</p>
    </>
  );
}
function CalcInput() {
  const [amountRange, setAmountRange] = useState(0);
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);

  function handleSliderChange(e){
    
    // e.target.value !== '' ?
    setAmountRange(e.target.value);
    // :setAmountRange(0);
}
  function handleTerm(e){
    
    // e.target.value !== '' ?
    setTerm(e.target.value);
    // :setAmountRange(0);
}
  function handleInterest(e){
    setInterest(e.target.value);
  }


  return (
    <>
      <form action="" className="CalcInput">
        <label>
          Mortgage Amount:
          <input type="" placeholder={0} value={amountRange} onChange={handleSliderChange}/>
          <input placeholder={0} type="range" value={amountRange!=''?amountRange:0} id="mortAmountSlider" min={0} max={1000000} onChange={handleSliderChange}/>
        </label>
  
        <label>
          Term in years:<input value={term} onChange={handleTerm} />
          <input type="range" id="Slider" value={term !=''?term:0} onChange={handleTerm} min={0} max={1000000} />

        </label>

        <label>
          
          Interest Rate:<input value={interest} onChange={handleInterest}/>

          <input type="range" id="Slider" value={interest!=''?interest:0}onChange={handleInterest}min={0} max={1000000} />
        </label>
      </form>
      
      <CalcResults />
    </>
  );
}

function Calc() {
  return (
    <>
      <h2>Calculator Interface</h2>
      <CalcInput />
    </>
  );
}

export default Calc;
