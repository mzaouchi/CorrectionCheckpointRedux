import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"

const AddTask=()=>{
    const [title,setTitle] = useState('')
    const dispatch = useDispatch()

    const handleAdd=()=>{
        if (title == '') {
            alert('3amer')
        } else {
            dispatch(addTask(title))
            setTitle('')
        }        
    }
    return(
        <div>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text"/>
            <button onClick={()=>handleAdd()}>Add</button>            
        </div>
    )
}

export default AddTask