import { useDispatch } from "react-redux"
import { deleteTask, handleDone } from "../Redux/Actions"

const CardTask=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
            <h3>{el.title}</h3>
            <h4>{el.isDone ? "TRUE" : "FALSE"}</h4>
            <button onClick={()=>dispatch(handleDone(el.id))}>Done</button>
            <button onClick={()=> dispatch(deleteTask(el.id))}>Delete</button>
        </div>
    )
}

export default CardTask