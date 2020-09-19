import HttpService from './HttpService';
import CacheService from './CacheService'

const KEY = 'teams';

export const TeamsService = {
    query,
    likeTeam
}
async function query() {
    const teams = _cache();
    return teams;
}

async function likeTeam(teamId){
        const teams = await _cache();
        const foundTeam = teams.find(team => team.team_id === teamId)
        if(!foundTeam) throw 'Did not find team'
        const foundIdx = teams.findIndex(team => team.team_id === teamId)
        if(foundIdx < 0) throw 'Did not find team'
        foundTeam.isLiked = !foundTeam.isLiked;
        teams.splice(foundIdx, 1, foundTeam);
        CacheService.setInStorage(KEY, teams);
        return Promise.resolve(teams)
}

async function _cache(){
    const teams = CacheService.getFromStorage(KEY);
    if(!teams){
        const res = await HttpService.get('teams/league/94');
        const {teams} = res.api
        const dataToRender = teams.map(team=> {
            const {team_id, name, founded, logo} = team;
            return {team_id, name, founded, logo, isLiked: false}
        })
        CacheService.setInStorage(KEY, dataToRender)
        return dataToRender;
    }
    return teams;

}