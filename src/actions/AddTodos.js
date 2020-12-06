import React from "react";

const ADD_TODOS = "ADD_TODOS";

const addTodos = (message) => ({
    type: ADD_TODOS,
    message,
    id: Math.random()
})

export default addTodos;