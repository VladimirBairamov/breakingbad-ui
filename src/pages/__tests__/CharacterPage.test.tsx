import CharacterPage from 'pages/CharacterPage';
import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { RequestState } from 'store/common.types';
import { useParams } from 'react-router-dom';
jest.mock('react-redux');
jest.mock('react-router');

const mockData = {
  characterByIdGetState: RequestState.Success,
  currentCharacter: {
    char_id: 1,
    name: 'Walter White',
    birthday: '09-07-1958',
    occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
    img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    status: 'Presumed dead',
    nickname: 'Heisenberg',
    appearance: [1, 2, 3, 4, 5],
    portrayed: 'Bryan Cranston',
    category: 'Breaking Bad',
    better_call_saul_appearance: [],
  },
};
beforeEach(() => {
  (useParams as any).mockImplementation(() => ({ id: '1' }));
  (useDispatch as any).mockImplementation(() => () => {});
});

test('CharacterPage must render loading', () => {
  (useSelector as any).mockImplementation(() => ({ characterByIdGetState: RequestState.Loading }));
  const component = renderer.create(<CharacterPage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('CharacterPage must render data', async () => {
  (useSelector as any).mockImplementation(() => mockData);
  const component = renderer.create(<CharacterPage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
