import React from 'react';
import renderer from 'react-test-renderer';
import Table from './Table';

const episodesColumns = [
  {
    key: 'episode',
    dataIndex: 'episode',
    title: 'Episode #',
  },
  {
    key: 'title',
    dataIndex: 'title',
    title: 'Title',
  },
  {
    key: 'airDate',
    dataIndex: 'air_date',
    title: 'Air Date',
  },
];

const mockData = [
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
];

test('Table must render correctly', () => {
  const mockCallBack = jest.fn();

  const component = renderer.create(
    <Table
      columns={episodesColumns}
      data={mockData}
      keyIndex="episode_id"
      onRowCLick={mockCallBack}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
