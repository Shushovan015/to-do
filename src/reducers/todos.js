const initialState = {
    data : []
}

const todos = ( state=initialState,action ) => {
    switch(action.type){
        case "ADD_TODOS":
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        message:action.message,
                        id:action.message
                    }
                ]
            }
        case "DELETE_TODOS":
        const todos = state.data.filter((todo)=>(todo.id!==action.id));
            return {
                data: todos
            }
        default:
            return state;
    }
}

export default todos;