const initialState = {
    isLoading: false,
    error:null
  };
  
  export default function (state = initialState, action = {}) {
    switch (action.type) {
      case 'LOADING_START':
        return { ...state, isLoading: true };
      case 'LOADING_DONE':
        return { ...state, isLoading: false };
      case 'SET_ERROR':
        return{...state, error: action.error}
      default: return state;
    }
  }