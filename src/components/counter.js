import React, { useEffect, useReducer } from 'react';

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  const { count, step } = state;
  if (action.type === 'tick') {
    return { count: count + step, step };
  } else if (action.type === 'step') {
    return { count, step: action.step };
  } else {
    throw new Error();
  }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { count } = state;

    useEffect(() => {
      const id = setInterval(() => {
        dispatch({ type: 'tick' }); // Instead of setCount(c => c + step);
      }, 1000);
      return () => {
        console.log('清除定时器....')
        clearInterval(id);
      }
    }, []);
  
    console.log('count = ', count)
    return <h1>{count}</h1>;
};

export default Counter;