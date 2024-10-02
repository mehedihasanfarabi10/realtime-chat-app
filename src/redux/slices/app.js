
const initialState = {
    tab: 0, // Set a default value for tab
    // other initial state properties
  };

  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TAB':
        return {
          ...state,
          tab: action.payload.tab,
        };
      // other cases
      default:
        return state;
    }
  };
  