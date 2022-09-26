//Type Producer
const SET_THEME = 'theme/SET_THEME';

//Action Creator
const setThemeAction = (payload) => {
    return {
      type: SET_THEME,
      payload
    };
};

// Thunk - Set Theme
export const setTheme = (data) => async (dispatch) => {
    dispatch(setThemeAction(data));
};

const initialState = 'darkMode';

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
