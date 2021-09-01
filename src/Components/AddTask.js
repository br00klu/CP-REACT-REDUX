import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../JS/actions";

function AddTask() {
  //const dispatch=useDispatch();
  let [task, setTask] = useState("");
  let dispatch = useDispatch();

  return (
    <form>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            add_todo({
              id: Math.floor(Math.random() * 100),
              task: task,
              completed: false,
            })
          );
          setTask("");
        }}
      >
        Add
      </button>
    </form>
  );
}
export default AddTask;
