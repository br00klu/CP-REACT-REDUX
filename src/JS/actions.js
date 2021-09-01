import { ADD, COMPLETE, EDIT, DELETE } from "./action-types";

export const add_todo = (payload) => {
  return { type: ADD, payload };
};

export const complete_todo = (payload) => {
  return { type: COMPLETE, payload };
};

export const edit_todo = (payload) => {
  return { type: EDIT, payload };
};

export const delete_todo = (payload) => {
    return {type: DELETE,payload};
};