import React from "react";
import { connect } from "react-redux"
import addTodos from "../../actions/AddTodos";


const AddTodos = (props) => {
    const handleChange = (e) => {
        e.preventDefault();
        let input = e.target.input.value;
        console.log(input);
        props.dispatch(addTodos(input));
        e.target.input.value="";
    }

    return (
        <form onSubmit={handleChange}>
            <input type="text" name="input" />
            <button>Submit</button>        
        </form>
    )
}

export default connect()(AddTodos);