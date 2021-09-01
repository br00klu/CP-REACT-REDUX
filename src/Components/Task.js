import React, { useState } from "react";
import EditModal from "./EditModal";

function Task({ id, task, completed, toggletodo, handleDelete }) {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  return (
    <div>
      <div style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </div>
      <button onClick={toggletodo}>Mark as done</button>
      <button type="button" onClick={showModal}>
        Edit
      </button>
      <EditModal show={show} handleClose={hideModal} taskId={id}></EditModal>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
export default Task;
