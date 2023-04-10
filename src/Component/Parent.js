import React, {useState} from 'react';
import {Child} from './Child.js'

function Parent(){

    let [clr, setclr] = useState("red");

    const change_clr = (clr1) =>{
        setclr(clr1);
    }
    
    return(
        <>
        <div style={{background:clr}} id='parent_div'>Hello</div>
        <Child change_clr={change_clr}/>
        </>
    );
}

export default Parent; 

// Add this in App.js

// import Parent from './Component/Parent.js'
{/* <div id='main_div'>
    <Parent/>
    </div> */}