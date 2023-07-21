import React , { useState } from "react";


const TodoList = (props)=>{
    
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    
    const getValueOfItem =(e)=>{
       setItem(e.target.value)
       
    }
    const addToList =()=>{
        list.push(item)
    }

    return(
        <div>
            <h5>{list.index}</h5>
            <h4 style={{textAlign:"center"}}>{props.title}</h4>
            <input onChange={getValueOfItem} type="text" />
            <button onClick={addToList}>Add the task</button>
        </div>
    )
}
export default TodoList;