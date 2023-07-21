import React , { useState } from "react";


const TodoList = (props)=>{
    
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    
    const getValueOfItem =(e)=>{
       setItem(e.target.value)
       
    }
    const addToList =()=>{
        list.push(item);
        setList([...list])
    }
    const remove = (index)=>{
        list.splice(index,1);
        setList([...list])

    }
    return(
        <div>            
            <table>
                <tbody>
                    {
                        list.length!==0?(
                        list.map((item,index)=>{
                           return(
                            <tr>
                                <td>{item}</td>
                                <td>
                                    <button onClick={()=>{remove(index)}}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                           )
                           
                        })
                        ):(<tr></tr>)
                    }
                </tbody>
            </table>
            
            <h4 style={{textAlign:"center"}}>{props.title}</h4>
            <input onChange={getValueOfItem} type="text" placeholder="item"/>
            <button onClick={addToList}>Add the task</button>
        </div>
    )
}
export default TodoList;
