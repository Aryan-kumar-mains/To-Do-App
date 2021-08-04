import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-container" >
            <li onClick={() => {
            props.toggleTaskCompleted(props.id)
        }} style={{textDecoration:   props.isDone ? "line-through": "none"}} > {props.name} </li>
            <div>
               <i className="fas fa-trash-alt" 
                    onClick= {() => {
                        props.onChecked(props.id);
                    }}
                ></i>
            </div>
            <div>
               <i class="fas fa-pen" 
                    onClick= {() => {
                        props.changeTodoItem(props.id);
                    }}
                ></i>
            </div>
        </div>
    );
}

export default TodoItem;
