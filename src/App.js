import "./App.css";
import { useState } from "react";

const tip = [5, 10, 15, 25, 50];

function App() {
  const [bill, setBill] = useState();
  const [total, setTotal] = useState();
  const [chooseTip, setChooseTip] = useState();

  const handleBill = (e) => {
    let bill = parseFloat(e.target.value);
    setBill(bill);
  };

  const tipSelect = (item, i) => {
    if (bill === undefined || bill === 0) {
      alert("You have to enter your bill");
    } else {
      setChooseTip(() => (bill * item) / 100);
    }
  };

  const customTip = (e) => {
    if (bill === 0 || bill === undefined) {
      alert("You have to enter your bill");
    } else {
      let ex = (bill * e.target.value) / 100;
      setChooseTip(ex);
    }
  };

  const getTotal = (e) => {
    if (bill === 0 || bill === undefined) {
      alert("You first enter your bill or tip");
      e.target.value = "";
    } else if (
      parseFloat(e.target.value).toString() === "NaN" ||
      e.target.value === "0"
    ) {
      return false;
    } else {
      let ex = chooseTip;
      setChooseTip(ex / e.target.value);
      setTotal(chooseTip + bill);
    }
  };

  const resetHandler = () => {
    setBill(0);
    setChooseTip(0);
    setTotal(0);
  };
  return (
    <div className='App'>
      <div className='container'>
        <div className='left-side'>
          <div className='input'>
            <div className='dollar'></div>
            <p className='greyfont'>Bill</p>
            <input
              type='number'
              name=''
              id=''
              placeholder='0'
              onChange={handleBill}
            />
          </div>
          <div className='select-tip-container'>
            <p className='greyfont'>Select Tip %</p>
            <div className='tip-container'>
              {tip.map((item, i) => (
                <div
                  key={i}
                  className='tip-box'
                  onClick={() => tipSelect(item, i)}
                >
                  {item}%
                </div>
              ))}

              <div className='tip-box'>
                <input
                  type='number'
                  name=''
                  id=''
                  placeholder='Custom'
                  className='tip-box custom'
                  maxLength='3'
                  onChange={customTip}
                />
              </div>
            </div>
          </div>
          <div className='people-container'>
            <p className='greyfont'>Number of People</p>
            <div className='person'></div>
            <input
              type='text'
              name=''
              id=''
              placeholder='0'
              onChange={getTotal}
              maxLength='3'
            />
          </div>
        </div>
        <div className='right-side'>
          <div className='tip-amount-container'>
            <div className='title-tip-container'>
              <div className='title'>
                <p>Tip Amount</p>
                <small>/person</small>
              </div>
              <div className='price1'>
                <p className='money'>
                  {" "}
                  {chooseTip ? `$${chooseTip}` : "$0.00"}
                </p>
              </div>
            </div>
            <div className='total-container'>
              <div className='total'>
                <p>Total</p>
                <small>/person</small>
              </div>
              <div className='price2'>
                <p className='money'> {total ? `$${total}` : "$0.00"}</p>
              </div>
            </div>
            <div className='reset-container'>
              <button onClick={resetHandler}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
