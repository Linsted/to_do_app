import { handleActions } from "redux-actions";
import { ADD_TASK, DELETE_TASK } from "./actions";

const initialState = {
  tasks: [
    { id: 0, title: "HTML", text: "Text HTML and CSS", completed: true },
    { id: 1, title: "JS", text: "Text JavaScript", completed: true },
    { id: 2, title: "React", text: "Text React", completed: false },
    { id: 3, title: "Redux", text: "Text Redux", completed: false },
    { id: 4, title: "Node", text: "Text  Node", completed: false },
  ],
};

const tasksReducerMap = {
  [ADD_TASK]: (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
  }),
  [DELETE_TASK]: () => {},
};

export const tasksReducer = handleActions(tasksReducerMap, initialState);
