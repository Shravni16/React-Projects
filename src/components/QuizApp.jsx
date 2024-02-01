import React, { useState } from "react";

import Questions from "../Data";
import Quiz from "./Quiz";
import { QuizContext } from "../context/QuizContext";
import { useContext } from "react";

function QuizApp(){
const [question,setQuestion]=useState(1);
const data= Questions[question-1];
const { answer ,setAnswer} = useContext(QuizContext);


function nextClickHandler(){
    setQuestion(question+1);}

    function resetHandler(){
        setQuestion(1);
        setAnswer(0);

    }
    


return(<div className="big-wrapper">
    <h1>QUIZ</h1>
    {
    question > 5?
    <div className="quiz-wrapper-reset">
        <div className="score">
        <p >Your Score Is : { answer }</p>
        </div>
        
        <button onClick={resetHandler} className="next-btn-reset">Reset</button>

    </div>
    :
    <div className="quiz-wrapper">
        <Quiz data={data} question={question}/>
        <p className="question-out-of">Question {question} out of 5</p>
        <button className="next-btn" onClick={nextClickHandler}>Next</button>
    </div>

    }
    
</div>)

}

export default QuizApp;