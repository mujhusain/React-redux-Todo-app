export const addTodoLoading = () => {
  return {
    type: "ADD_TODO_LOADING",
  };
};

export const addTodoSuccess = () => {
  return {
    type: "ADD_TODO_SUCCESS",
  };
};

export const getTodoSuccess = (payload) => {
  return {
    type: "GET_TODO_SUCCESS",
    payload,
  };
};

export const changeStatus = (payload) => {
  return {
    type: "CHANGE_STATUS",
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: "UPDATE_TODO",
    payload,
  };
};

export const deleteTodoLoading = () => {
  return {
    type: "DELETE_TODO_LOADING",
  };
};

export const deleteTodoSuccess = () => {
  return {
    type: "DELETE_TODO_SUCCESS",
  };
};