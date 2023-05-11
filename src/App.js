import React from 'react';
import { useState } from 'react';
import Button from './component/button';
import "./index.css"

function App() {
  const [count,setCount]=useState(0)
  const updateCount = sign =>{
    let c=count
    if(sign==="increment")setCount(c+1)
    else if(sign==="decrement")setCount(c-1)
    else if(sign==="Reset") setCount(0)
  }
  return (
    <div class="App">
      <div class="item1">
        <Button sign = "increment" updateCount={updateCount}/>
        <div class="count">
          {count}
        </div>
        <Button sign = "decrement" updateCount={updateCount}/>
      </div>
      <div class="item2">
        <Button sign = "Reset" updateCount={updateCount}/>
      </div>
    </div>
  )
}

export default App