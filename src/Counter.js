import React, { useState } from 'react';

const Counter = () => {
   const [value, setValue] = useState(0);
   
   return (
       <div className="incrementButton">
           <div>Count: {value} </div>
           <button onClick={() => setValue(value + 1)}>Increment</button>
           <button onClick={() => setValue(value - 1)}>Decrease</button>
       </div>
   )
}

export default Counter;