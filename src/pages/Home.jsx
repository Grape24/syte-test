import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTeams, likeTeam } from "../actions/TeamsActions";
import { doneLoading } from "../actions/SystemActions";
import loader from '../assets/svg/loader.svg';
import TeamsList from "../cmps/teams/TeamsList";
import ErrorHandler from '../cmps/error/ErrorHandler';

class Home extends Component {
  componentDidMount() {
    this.props.loadTeams();
  }

  onLikeTeam = (id) =>{
    this.props.likeTeam(id)
  }

  render() {
    const { teams} = this.props;
    const { isLoading, error } = this.props.system;
    return (
      <div className="main-container">
      {error &&<ErrorHandler error={error}></ErrorHandler>}
       { teams &&<> <header className="header-container">
                    <ul className="grid clean-list">
                      <li>Crest</li>
                      <li>Name</li>
                      <li>Year Founded</li>
                      <li>Mark as Favorite</li>
                    </ul>
                  </header>
                  <TeamsList onLikeTeam={this.onLikeTeam} teams={teams}></TeamsList>
                  </>}
          {isLoading && <img alt="loader" src={loader}></img>}
        </div >
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.team,
    system: state.system
  };
};

const mapDispatchToProps = {
  loadTeams,
  doneLoading,
  likeTeam
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
