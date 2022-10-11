import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IForm {
    toDo: string;
}


function CreateToDo(){
    const settoDos = useSetRecoilState(toDoState) 
    {/* 값을 변경만 하는 함수 useSetRecoilState */}
    const {register,handleSubmit,setValue} = useForm<IForm>();
    const handleValid = ({toDo}:IForm) => {
        settoDos(old => [{text:toDo, id:Date.now() ,category:'TODO'}, ...old])
    }
    setValue('toDo','')
    return(
        <>
        <form onSubmit={handleSubmit(handleValid)}>
                <input {...register('toDo',
                {required:true})} 
                placeholder="Write a to do"/>
                <button>Add</button>
            </form>
        </>
    )
}

export default CreateToDo;