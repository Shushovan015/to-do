import React from "react";

const DELETE_TODOS = "DELETE_TODOS";

const deleteTodos = (id) => ({
    type: DELETE_TODOS,
    id
})

export default deleteTodos;