import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

export const Counter = ({count, increment, decrement}) => {
    return (
        <p>
            Contador: <span className='counter'>{ count }</span>
            <button className='increment' onClick={() => increment(10) }>+</button>
            <button className='decrement' onClick={() => decrement(20) }>-</button>
        </p>
    )
}

const mapStateToProps = (state) => {
    return {
      count: state.count
    }
  }
  
  const mapDispatchProps = (dispatch) => {
    return {
      increment: (value) => dispatch(increment(value)),
      decrement: (value) => dispatch(decrement(value))
    }
  }

export default connect(mapStateToProps, mapDispatchProps)(Counter);
