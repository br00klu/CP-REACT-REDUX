import { ADD, COMPLETE, EDIT, DELETE } from "./action-types";

const initalState = {
  todos: [
    {
      id:1,
      task:"wake up",
      completed:false
    }
  ]
};

const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, todos: [...state.todos,action.payload] };

    case COMPLETE:
      const toggletodos=state.todos
      .map(x=>x.id===action.payload.id? 
        {...action.payload,completed:!action.payload.completed}
        :
        x
      )
      return { ...state, todos:toggletodos };

    case EDIT:
        const newTodos =state.todos
        .map(x=>x.id===action.payload.id? 
          {...action.payload}
          :
          x
        )
      return {...state, todos: newTodos};

    case DELETE:
      return { ...state, todos: state.todos.filter(x=>x.id!==action.payload) };
    default: {
      return state;
    }}};
export default Reducer;