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
  const [range, setRange] = useState(0);

  function handleSliderChange(e){
    
    e.target.value !== '' ?setRange(e.target.value):setRange(0);
}

  return (
    <>
      <form action="" className="CalcInput">
        <label htmlFor="" className="">
          Mortgage Amount:
          <input type="" placeholder={0} value={range} onChange={handleSliderChange}/>
          <input placeholder={0} type="range" value={range} id="mortAmountSlider" min={1} max={1000000} onChange={handleSliderChange}/>
        </label>
  
        <label htmlFor="" className="">
          Term in years:<input />
          <input type="range" id="mortAmountSlider" min={0} max={1000000} />

        </label>

        <label htmlFor="" className="">
          
          Interest Rate:<input/>

          <input type="range" id="mortAmountSlider" min={0} max={1000000} />
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
