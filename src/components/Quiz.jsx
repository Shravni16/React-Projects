import React, { useContext, useEffect, useState } from "react";
import "./component.css";
import { QuizContext } from "../context/QuizContext";


function Quiz(props){
    const question=props.question;
    const data=props.data;
    const options=props.data.options;
    const [color,setColor]=useState({A:"normal",B:"normal",C:"normal",D:"normal"});
   
    const {answer,setAnswer}=useContext(QuizContext);
    const [lock,setLock]=useState(true);

    function optionClickHandler(col){
        if(lock){

        const ans=data.ans;

        setColor((prevColor) => ({
            ...prevColor,
            [ans]: "active-green"
          }));
         if(ans!==col){
            setColor((prevColor) => ({
                ...prevColor,
                [col]: "active-red"
              }));
         }
         if(ans===col){
           setAnswer(answer+1);
         }
         setLock(false);
        }
        

    }

    useEffect(()=>{
        setColor({
            A: 'normal',
            B: 'normal',
            C: 'normal',
            D: 'normal'
          });
          setLock(true);
    },[question])
   
    return(<div>
        <h2 className="heading">{data.que}</h2>
        <div className={color.A} onClick={()=>{optionClickHandler("A") }}>A . {options.A}</div>
        <div className={color.B} onClick={()=>{optionClickHandler("B") }}>B . {options.B}</div>
        <div className={color.C} onClick={()=>{optionClickHandler("C") }}>C . {options.C}</div>
        <div className={color.D} onClick={()=>{optionClickHandler("D") }}>D . {options.D}</div>
    </div>)

}

export default Quiz;