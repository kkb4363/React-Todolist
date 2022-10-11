import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atom";

function ToDo({text, category, id}:IToDo){
    const settoDos = useSetRecoilState(toDoState)

    {/*typescript에서 하나만 가져오고 싶을때
    IToDo['category'] <- 이런식으로 쓸 수 있다.    
    */}
    {/* event:React.MouseEvent<HTMLButtonElement>
        console.log(event.currentTarget.name)
        이렇게 쓰면 현재 클릭한 버튼의 name값을 얻을 수 있다. */}
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name},} = event;
        settoDos((old)=>{
            const targetIndex = old.findIndex(toDo => toDo.id === id)
            const oldToDo = old[targetIndex]
            const newToDo = {text, id, category:name}

            console.log(oldToDo,newToDo)
        return old;
        })
    }


    return (
        <>
        <li>
            {text}
            {category !== 'TODO' && <button name="TODO" onClick={onClick}>TODO</button>}
            {category !== 'DOING' && <button name="DOING" onClick={onClick}>DOING</button>}
            {category !== 'DONE' && <button name="DONE" onClick={onClick}>DONE</button>}
        </li>
        </>
    )
}
export default ToDo;