
const defaultState: any = {
  counter: 0,
  counterDB: 0,
};

export const actions = {
  SET_COUNTER_DB: 'SET_COUNTER_DB',
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
};

export const counterIncrement = () => ({ type: actions.INCREMENT });
export const counterDecrement = () => ({ type: actions.DECREMENT });


const counterReducer = function(state = defaultState, action: any) {
  console.log('action',action)
  switch (action.type) {
    case actions.INCREMENT:
      return {...state, counter: state.counter + 1};
    case actions.DECREMENT:
      return {...state, counter: state.counter - 1};
    case actions.SET_COUNTER_DB:
      return {...state, counterDB: action.payload};
    default:
      return state
  }
}
export default counterReducer;