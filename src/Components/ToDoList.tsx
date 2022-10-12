import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categories, categoryState, toDoSelector, toDoState } from "../atom";
import Category from "./Category";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function Todolist(){
    {/* useReocilValue : 값만 반환해주는 함수 */} 
    const toDos = useRecoilValue(toDoSelector)
    {/* useRecoilState : 값과 더불어서 수정 함수도 제공함. */}
    

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <Category/>
            <CreateToDo/>
            {toDos?.map((toDo)=>(
                <ToDo key={toDo.id} {...toDo}/>
            ))}
            <hr/>
            <h1>I can't make Category making part T.T </h1>
            <h1>It's very very hard for me Sorry Teacher </h1>
            <h1>Can you tell me how to make that part? T.T</h1>
            <h1>My email is kkb4363@naver.com </h1>
        </div>
    )
}

export default Todolist;