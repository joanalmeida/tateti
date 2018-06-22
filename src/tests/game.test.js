import React from 'react';
import { Provider } from 'react-redux';
import ConnectedGame,{ Game } from '../containers/Game';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import * as gameActions from '../actions/GameActions';

describe('G A M E --- Shallow Render Dumb Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Game />)
  });

  it('Renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('Checks if Game title is: "TaTeTi"', () => {
    const gameTitle = wrapper.find(".gameTitle").get(0).props.children;
    expect(gameTitle).toEqual("TaTeTi");
  });
});

describe('G A M E --- Mount Smart Component', () => {
  const initialState = { game: { title: "Tateti game"} };
  const mockStore = configureStore();

  let store, container;

  beforeEach(() => {
    store = mockStore(initialState)
    //container = shallow(<ConnectedGame store={store} />)
    container = mount(<Provider store={store}><ConnectedGame /></Provider>)
  })

  it('Renders the Smart component', () => {
    //expect(container.length).toEqual(1);
    expect(container.find(ConnectedGame).length).toEqual(1);
  })

  it('Checks that props matches initialState', () => {
    //expect(container.prop('boardTitle')).toEqual(initialState.boardTitle);
    expect(container.find(Game).prop('game').title).toEqual("Tateti game");
  })

  it('Checks Init Game action', () => {
    let action;
    store.dispatch(gameActions.initGame("Hi from test"));
    action = store.getActions();

    expect(action[0].type).toBe('INIT_GAME');
    expect(action[0].msg).toBe("Hi from test");
  })
});