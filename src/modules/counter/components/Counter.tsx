import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { counterIncrement, counterDecrement } from '../reducers';
import { useTranslation } from "react-i18next";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: any) => state.counter);
  const {t} = useTranslation()

  return (<>
    <div>Counter Redux</div>
    {counter}
    <button onClick={() => dispatch(counterIncrement())}>{t('increment')}</button>
    <button onClick={() => dispatch(counterDecrement())}>{t('decrement')}</button>
  </>)
}

export default Counter;
