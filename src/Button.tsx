import React from 'react'
type ButtonProps={
  handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void;
  handleInput:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}


  export  const Button=(props:ButtonProps)=>{
  return (
    <>
    <button type={'button'} onClick={(event)=>props.handleClick(event)}>Button</button>
    <input type={"text"} onChange={(event)=>{
      
props.handleInput(event)
    }}/>
    </>
  )
};


