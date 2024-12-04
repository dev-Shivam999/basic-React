import React, { useState } from 'react';
import Input from './components/Input';
import Btn from './components/Btn';

const App = () => {
  const [btn,setBtn]=useState("")

  const click=(e)=>{
    console.log(e);
    
    
    if (e!="=") {

    if (
      (btn.length == 0 && e == "+") ||
      (btn.length == 0 && e == "-") ||
      (btn.length == 0 && e == "*") ||
      (btn.length == 0 && e == "/")
      
    ) {
    } 
    else {
   

        setBtn((p) => p + e);
    }
        
      
    }else{
      
      if (btn.length == 0 && e == "=") {}
  else{
        const lol=eval(btn)
      console.log(lol);
      setBtn(lol)
  }
      
    }
  }
  
  
  return (
    <div>
      <Input value={btn}/>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    <Btn click={click}/>
    </div>
  );
};

export default App;