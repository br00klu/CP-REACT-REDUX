import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_todo } from "../JS/actions";

const EditModal = ({ handleClose, show, taskId }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const editedTask = useSelector((state) =>
    state.todos.find((element) => element.id === taskId)
  );
  let [task, setTask] = useState(editedTask);

  let dispatch = useDispatch();

  const handleSave = () => {
    dispatch(
      edit_todo({
        ...editedTask,
        task: task,
      })
    );
    handleClose();
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <input
          type="text"
          placeholder="Enter a task"
          value={task.task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default EditModal;
