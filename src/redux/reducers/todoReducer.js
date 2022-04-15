import {ADD_TODO, DELETE_TODO, UPDATE_TODO, VIEW_TODO} from '../constants';

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  console.log('state **', state);

  console.log('action', action);

  switch (action.type) {
    case ADD_TODO:
      console.log('insie ADD');
      let addItem = action.item;
      let addList = state.todoList;

      addList.unshift(addItem);
      return {
        ...state,
        todoList: addList,
      };
    case UPDATE_TODO:
      console.log('insie UPDATE');
      return {
        ...state,
        todoList: action.uploadLap,
      };
    case DELETE_TODO:
      let deleteItem = action.item.id;
      let list = state.todoList.filter((item) => item.id != deleteItem);

      console.log('list slice', list);
      return {
        ...state,
        todoList: list,
      };
    case VIEW_TODO:
      let {item} = action;
      return {
        ...state,
        todoList: item,
      };
    default:
      return state;
  }
};

export default todoReducer;
