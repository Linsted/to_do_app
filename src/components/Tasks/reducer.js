import { handleActions } from "redux-actions";
import { addTask, deleteTask } from "./actions";

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
  [addTask]: (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
  }),
  [deleteTask]: () => {},
};

const tasksReducer = handleActions(tasksReducerMap, initialState);

export default tasksReducer;
