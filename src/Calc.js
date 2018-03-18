import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

export const Calc = ({value, buttons, addElem, clear, equal}) => (
  <div className="calc">
    <div className="value-container">
      <input type="text" value={value}/>
    </div>
    <div className="buttons-container">
      {
        buttons.map((item, key) => {
          switch (item) {
            case 'C':
              return (
                <button onClick={clear.bind(this)} key={key}>{item}</button>
              );
            case '=':
              return (
                <button onClick={equal.bind(this, value)} key={key}>{item}</button>
              );
            default:
              return (
                <button onClick={addElem.bind(this, item)} key={key}>{item}</button>
              );
          }
        })
      }
    </div>
  </div>
);

const mapStateToProps = ({value, buttons}) => {
  return {value, buttons}
};

const mapDispatchToProps = dispatch => {
  return {
    addElem: text => {
      dispatch({
        type: actions.ADD_ELEM,
        text
      })
    },
    clear: () => {
      dispatch({
        type: actions.CLEAR
      })
    },
    equal: value => {
      dispatch({
        type: actions.EQUAL,
        value
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
