import { handleActions } from "redux-actions";
import { addTask, deleteTask, toggleTaskStatus } from "./actions";

const initialState = {
  tasks: [
    {
      id: "0",
      title: "HTML",
      text: "Text HTML and CSS  Text HTML and CSS  Text HTML and CSS  Text HTML and CSS  Text HTML and CSS  Text HTML and CSS  Text HTML and CSS  Text HTML and CSS  Text HTML and CSS",
      completed: true,
    },
    { id: "1", title: "JS", text: "Text JavaScript", completed: true },
    { id: "2", title: "React", text: "Text React", completed: false },
    { id: "3", title: "Redux", text: "Text Redux", completed: false },
    { id: "4", title: "Node", text: "Text  Node", completed: false },
  ],
};

const tasksReducerMap = {
  [addTask]: (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
  }),

  [deleteTask]: () => {},

  [toggleTaskStatus]: (state, { payload }) => {
    return {
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id !== payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      }),
    };
  },
};

const tasksReducer = handleActions(tasksReducerMap, initialState);

export default tasksReducer;
