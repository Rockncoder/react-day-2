import * as actions from './actions';

const initialState = {
  value: 0,
  buttons: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.','=', '+', 'C']
};

export default (state = initialState, action) => {
  switch(action.type){
    case actions.ADD_ELEM:
      return {
        ...state,
        value: state.value === 0? action.text: state.value + action.text
      };
    case actions.CLEAR:
      return {
        ...state,
        value: 0
      };
    case actions.EQUAL:
      return {
        ...state,
        value: eval(action.value) // eslint-disable-line
      };
    default:
      return state;
  }
};