import React, { ChangeEvent } from 'react'
import { useState } from 'react'
export default function Input() {

  const [first, setfirst] = useState("")
  const [set, setSet] = useState("");

  const [val1, setVal1] = useState(0)
  const [val2, setVal2] = useState(0);
  const [add, setAdd] = useState(0);

  const handleChange = (event: ChangeEvent): void => {
    setfirst((event.target as HTMLInputElement).value);
  };

  const handleChange1 = (event: ChangeEvent): void => {
    let data:number=parseInt((event.target as HTMLInputElement).value);
    setVal1(data);
  };
  const handleChange2 = (event: ChangeEvent): void => {
    let data:number=parseInt((event.target as HTMLInputElement).value);
    setVal2(data);
  };

  const handleAdd = (): void => {
    setAdd(val1+val2);
  };

  const handleCopy = () => {
    setSet(first);
  }

  const chmod = (event: ChangeEvent) => {
    setSet(set + (event.target as HTMLInputElement).value);
  }
  return (
    <div>{first}
      <br />
      <input type={"text"} onChange={handleChange} />
      <input type={"text"} value={set} />

      <button onClick={handleCopy}>copy</button>
      <input type={"text"} onChange={handleChange1} />
      <input type={"text"} onChange={handleChange2} />
      <input type={"text"} value={add} onChange={(event:ChangeEvent)=>{

      }} />

      <button onClick={handleAdd}>Add</button>
    </div>
  )
}
