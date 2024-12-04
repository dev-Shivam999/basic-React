import React from 'react';

const Btn = ({click}) => {
    const arr=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','='];
    return (
      <div>

        {
            arr.map((p,i)=><button key={i} onClick={()=>click(p)}>{p}</button>)
        }
      </div>
    );
};

export default Btn;