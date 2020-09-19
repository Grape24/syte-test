const initialState = {
    teams : null
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
      case 'SET_TEAMS':
        return { ...state, teams: action.teams };
      default:
        return state;
    }
  }