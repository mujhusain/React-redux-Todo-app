const init = {
  loading: false,
  error: false,
  todos:[]
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case "ADD_TODO_LOADING":
      return {
          ...state,
          loading: true,
      };

    case "ADD_TODO_SUCCESS":
      return {
          ...state,
          loading: false,
      };

    case "GET_TODO_SUCCESS":
      return {
          ...state,
          todos:payload
      };

    case "DELETE_TODO_LOADING":
      return {
          ...state,
          loading: true,
      };

    case "DELETE_TODO_SUCCESS":
      return {
          ...state,
          loading: false,
      };

    default:
      return {...state};
  }
};
