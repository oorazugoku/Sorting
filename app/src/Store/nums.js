//Type Producer
const SET_NUM_ARRAY = 'nums/SET_NUM_ARRAY';

//Action Creator
const setNumsAction = (payload) => {
    return {
      type: SET_NUM_ARRAY,
      payload
    };
};

// Thunk - Set Theme
export const setNums = (data) => async (dispatch) => {
    dispatch(setNumsAction(data));
};

const initialState = [];

const numArrayReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_NUM_ARRAY:
      return action.payload;
    default:
      return state;
  }
};

export default numArrayReducer;
