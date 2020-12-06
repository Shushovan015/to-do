import React from "react";
import {connect} from "react-redux";
import deleteTodos from "../../actions/DeleteTodos";

const List = (props) => {
    return(
        <div>
            {props.todos.map((todo,index)=>(
                <p key={index}>{todo.message}
                    <button onClick={()=>props.dispatch(deleteTodos(todo.id))}>Delete</button>
                </p>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos : state.todos.data
})

export default connect(mapStateToProps)(List);
