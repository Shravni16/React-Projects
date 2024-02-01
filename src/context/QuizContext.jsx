import { useState } from "react";
import { createContext } from "react";

export const QuizContext = createContext();

function QuizContextProvider({ children }){
   const [answer,setAnswer]=useState(0);


 const val={answer,setAnswer};

return <QuizContext.Provider value={val}>{children}</QuizContext.Provider>;
}
export default QuizContextProvider;