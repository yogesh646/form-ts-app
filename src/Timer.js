import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

const Timer = () => {
    const [count1,setcount1]=useState(0);
    useDocumentTitle(count1)
  return (
    <div>
   Count 1:{count1}
   <button onClick={()=>setcount1(count1+1)}>+</button>
    </div>
  )
}

export default Timer;