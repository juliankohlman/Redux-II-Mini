import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { connect } from 'react-redux';
// pull in actions from action/index
import { FETCHING_CHARS, CHARS_RECEIVED, ERROR_FETCHING_CHARS, getStarWars } from '../actions';


class App extends Component {
  componentDidMount() {
    this.props.getStarWars();
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    chars: state.charsReducer.chars,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getStarWars
  /* actions go here */
})(App);