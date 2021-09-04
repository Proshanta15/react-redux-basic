import React from 'react';
import './app.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';
import { mulNumber, divNumber } from './actions/index';

function App() {

 const myState = useSelector((state) => state.changeTheNumber);
 const myState2 = useSelector((state) => state.mulDivTheNumber);
 const dispatch = useDispatch();

  return (
    <>
    <div className="container">

      <h1>Increment Decrement counter</h1>
      <h4>Using React & Redux</h4>

      <div className="quantity">
        <a onClick={ () => dispatch(decNumber())} className="minus" title="Decrement"> <span> - </span></a>
        <input name="quantity" type="text" className="input" value={myState}/>
        <a onClick={ () => dispatch(incNumber(5))} className="plus" title="Increment"> <span> + </span></a>
      </div>
    </div>

    <div className="container">

      <h1>Multiplication Devision counter</h1>
      <h4>Using React & Redux</h4>

      <div className="quantity">
        <a onClick={ () => dispatch(divNumber())} className="minus" title="Decrement"> <span> / </span></a>
        <input name="quantity" type="text" className="input" value={myState2}/>
        <a onClick={ () => dispatch(mulNumber(5))} className="plus" title="Increment"> <span> * </span></a>
      </div>
    </div>
    </>
  );
}

export default App;
