import React, { ComponentType } from 'react';
import { connect } from "react-redux";
import { updateCounterDB } from "../sagas";

const Counter: ComponentType<any> = ({ counter, updateCounterDB }: any) => {
  const counterIncrement = () => {
    setTimeout(()=> {
      updateCounterDB({ counterDB: counter +1 })
    }, 500);
  };

  const counterDecrement = () => {
    setTimeout(()=> {
      updateCounterDB({ counterDB: counter - 1 })
    }, 500);
  };

  return (<>
    <div>Counter DB</div>
    {counter}
    <button onClick={counterIncrement}>counterIncrement</button>
    <button onClick={counterDecrement}>counterDecrement</button>
  </>)
};

const mapState = ({ counter: { counterDB: counter } }: any) => ({ counter });
const mapDispatch = ({updateCounterDB});

export default connect(mapState, mapDispatch)(Counter);
