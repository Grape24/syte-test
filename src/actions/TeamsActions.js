import {loading, doneLoading, errorHandler} from './SystemActions';
import {TeamsService} from '../services/TeamsService';

export function loadTeams() {
    return async dispatch => {
      try {
        dispatch(loading());
        const teams = await TeamsService.query();
        dispatch(_setTeams(teams));
      } catch (err) {
        dispatch(errorHandler(err))
      } finally {
        dispatch(doneLoading());
      }
    }
}

export function likeTeam(teamId){
  return async dispatch => {
    try {
      dispatch(loading());
      const teams = await TeamsService.likeTeam(teamId);
      dispatch(_setTeams(teams));
    }catch(err){
      dispatch(errorHandler(err))
    }finally{
      dispatch(doneLoading());
    }
  }
}

function _setTeams(teams){
    return {
        type: 'SET_TEAMS',
        teams
      };

}
