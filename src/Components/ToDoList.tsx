import { useRecoilValue } from "recoil";
import { toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";



function Todolist(){
    {/* useReocilValue : 값만 반환해주는 함수 */}
    const toDos = useRecoilValue(toDoState) 
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateToDo/>
            <ul>
                {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo}/>)}
            </ul>
        </div>
    )
}

export default Todolist;