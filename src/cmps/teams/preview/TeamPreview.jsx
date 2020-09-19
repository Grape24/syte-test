import React from "react";
import like from "../../../assets/svg/like.svg";
import likeActive from "../../../assets/svg/likeActive.svg";

function TeamPreview(props) {
  const { team } = props;
  return (
    <>
      <div className="ratio-square">
        <img alt={team.logo} src={team.logo}></img>
      </div>
      <div className="flex align-center">{team.name}</div>
      <div className="flex align-center">{team.founded}</div>
      <div className="flex align-center like-container">
      <img
        onClick={() => props.onLikeTeam(team.team_id)}
        alt={`like ${team.name}`}
        className="like"
        src={team.isLiked ? likeActive : like}
      ></img>
      </div>
    </>
  );
}

TeamPreview.propTypes = {};

export default TeamPreview;
