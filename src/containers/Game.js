import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as gameActions from '../actions/GameActions';

import { Board } from './Board';

export class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <h1 className="gameTitle">
                    TaTeTi
                </h1>
                <div className="game-board">
                    {/*<Board />*/}
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        game: state.game
    }
}

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)