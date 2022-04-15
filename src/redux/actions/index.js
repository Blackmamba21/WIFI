import {ADD_TODO, DELETE_TODO, UPDATE_TODO, VIEW_TODO} from '../constants';
export const viewTodo = (csvFile) => {
  return {
    type: VIEW_TODO,
  };
};
export const addTodo = (todoItem) => {
  console.log('addTodo', todoItem);
  return {
    type: ADD_TODO,
    item: todoItem,
  };
};

export const updateTodo = (Lap) => {
  return {
    type: UPDATE_TODO,
    uploadLap: Lap,
  };
};

export const deleteTodo = (todoItem) => {
  console.log('deleteTodo', todoItem);
  return {
    type: DELETE_TODO,
    item: todoItem,
  };
};
