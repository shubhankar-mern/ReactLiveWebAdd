const initialState = {
  name: 'shubhankar',
  age: 25,
  tasks: [],
};
//userReducer function
const userReducer = (state = initialState, action) => {
  if (action.type == 'AddTask') {
    state = {
      ...state,
      tasks: [...state.tasks, action.payload],
    };
    return state;
  } else if (action.type == 'DelTask') {
    let arr = state.tasks.filter((d) => d.task != action.payload);
    state = {
      ...state,
      tasks: arr,
    };

    return state;
  } else {
    return state;
  }
};

//module.exports = userReducer;
export default userReducer;
