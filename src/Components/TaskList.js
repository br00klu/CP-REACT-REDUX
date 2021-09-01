import { useDispatch, useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";
import { complete_todo, delete_todo } from "../JS/actions";
import { useEffect, useState } from "react";

function TaskList() {
  const state = useSelector((state) => state.todos);
  let dispatch = useDispatch();

  const [filter, setFilter] = useState("all");
  const [displayedTodos, setDisplayedTodos] = useState(state);

  const handleFilterChange = (criteria) => {
    setFilter(criteria);
  };

  const handleFilter = (criteria) => {
    switch (criteria) {
      case "done":
        setDisplayedTodos(state.filter((el) => el.completed));
        break;
      case "todo":
        setDisplayedTodos(state.filter((el) => !el.completed));
        break;
      default:
        setDisplayedTodos(state);
        break;
    }
  };

  useEffect(() => {
    handleFilter(filter);
  }, [state, filter]);

  return (
    <div>
      <button onClick={() => handleFilterChange("done")}>Done</button>
      <button onClick={() => handleFilterChange("todo")}>To do</button>
      <button onClick={() => handleFilterChange("all")}>All</button>
      <AddTask />
      <ul style={{ listStyle: "none" }}>
        {displayedTodos.map((todo) => {
          return (
            // console.log('todo',todo)
            <li key={todo.id}>
              <Task
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                toggletodo={() => dispatch(complete_todo(todo))}
                handleDelete={() => dispatch(delete_todo(todo.id))}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default TaskList;
