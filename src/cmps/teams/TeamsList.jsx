import React from 'react'
import TeamPreview from './preview/TeamPreview'

function TeamsList(props) {
    return (
        <ul className="teams-container">
         {  props.teams.teams && props.teams.teams.map(team => <li className="team-container clean-list grid" key={team.team_id}><TeamPreview onLikeTeam={props.onLikeTeam} team={team}></TeamPreview></li>)}
         </ul>
    )
}

export default TeamsList



