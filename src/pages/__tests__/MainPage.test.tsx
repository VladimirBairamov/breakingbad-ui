import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { RequestState } from 'store/common.types';
import { useParams } from 'react-router-dom';
import MainPage from 'pages/MainPage';

jest.mock('react-redux');
jest.mock('react-router');

const mockData = {
  episodesGetState: RequestState.Success,
  episodes: [
    {
      air_date: '03-02-2015',
      characters: [
        'Jimmy McGill',
        'Mike Erhmantraut',
        'Kim Wexler',
        'Howard Hamlin',
        'Chuck McGill',
        'Nacho Varga',
      ],
      episode: '5',
      episode_id: 67,
      season: '1',
      series: 'Better Call Saul',
      title: 'Alpine Shepherd Boy',
    },
  ],
};
beforeEach(() => {
  (useParams as any).mockImplementation(() => ({ id: '1' }));
  (useDispatch as any).mockImplementation(() => () => {});
});

test('MainPage must render loading', () => {
  (useSelector as any).mockImplementation(() => ({ episodesGetState: RequestState.Loading }));
  const component = renderer.create(<MainPage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('MainPage must render data', async () => {
  (useSelector as any).mockImplementation(() => mockData);
  const component = renderer.create(<MainPage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
