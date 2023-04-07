
import React, {useState} from 'react'

export default function Test2() {

    const  [first, setfirst] = useState(0);
   
  return (<>
<div>{first}</div>
    <button onClick={()=>setfirst(first+3)}>Buttons</button></>
  )
}
