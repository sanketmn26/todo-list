import React from 'react';

function Child({ change_clr }){
    let clr2="green";

    let get_clr2 = () =>{
        clr2=document.getElementById('input').value;
        document.getElementById('btn1').style.background=clr2;
    }
    
    return(
        <>
        <button id='btn1' style={{background:clr2}} onClick={()=>change_clr(clr2)}>change color</button><br/>
        <input type="color" id="input" onInput={get_clr2}/>
        </>
    )
}

export {Child};

