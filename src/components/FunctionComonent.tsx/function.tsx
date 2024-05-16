import React, { useState } from 'react'

export default function Function() {
  const [name,setName]= useState<string>('hoa');
  /*
    Even: sự kiện
    onclick
    onchange
    oninput
    onkeydown
    onkeyup
    .....

  */
  // nơi khai báo các hàm
  // dùng các từ khóa khai báo: let const var
  const handleChange=()=>{
    console.log(1);
  }
  return (
    <div>
      <p>{name}</p>
      <button onClick={handleChange}>click</button>
    </div>
  )
}