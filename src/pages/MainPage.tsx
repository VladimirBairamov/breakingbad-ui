import clsx from 'clsx';
import Button from 'components/Button/Button';
import Table from 'components/Table/Table';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppStore, RequestState } from 'store/common.types';
import { episodesGet } from 'store/episodes/episodes.actions';
import { EpisodeSeries, IEpisode } from 'store/episodes/episodes.types';

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

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { episodes, episodesGetState } = useSelector((store: AppStore) => store.episodes);
  const [series, setSeries] = useState<EpisodeSeries>(EpisodeSeries.BreakingBad);
  const [season, setSeason] = useState(1);
  const [seasonsCount, setSeasonsCount] = useState(1);
  const isLoading = episodesGetState === RequestState.Loading;

  useEffect(() => {
    dispatch(episodesGet(series));
    setSeason(1);
  }, [dispatch, series]);

  useEffect(() => {
    setSeasonsCount(
      episodes?.reduce(
        (accumulator, currentValue) =>
          +currentValue.season > accumulator ? +currentValue.season : accumulator,
        0,
      ),
    );
  }, [episodes]); // eslint-disable-line

  const filteredEpisodes = () => {
    return episodes.filter((episode) => +episode.season === season);
  };

  const onRowCLick = (entity: IEpisode) => {
    navigate(`/episode/${entity.episode_id}`);
  };

  return (
    <main className="max-w-2xl mx-auto mt-16">
      <div className="flex justify-between mt-8 mb-2">
        <h2 className="text-2xl font-bold leading-7 text-gray-900">Episodes</h2>
        <nav className="flex">
          <div
            className={clsx('cursor-pointer', {
              'border-b-2': series === EpisodeSeries.BreakingBad,
            })}
            onClick={() => setSeries(EpisodeSeries.BreakingBad)}
          >
            Breaking Bad
          </div>
          <div
            className={clsx('cursor-pointer ml-8', {
              'border-b-2': series === EpisodeSeries.BetterCallSaul,
            })}
            onClick={() => setSeries(EpisodeSeries.BetterCallSaul)}
          >
            Better Call Saul
          </div>
        </nav>
      </div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h3 className="text-1xl font-bold leading-7 text-gray-900">Seasons: </h3>
          {Array.from(Array(seasonsCount).keys()).map((index) => (
            <Button key={index} onClick={() => setSeason(index + 1)} active={index + 1 === season}>
              {index + 1}
            </Button>
          ))}
          {!!episodes.length && (
            <Table
              columns={episodesColumns}
              data={filteredEpisodes()}
              keyIndex="episode_id"
              onRowCLick={onRowCLick}
            />
          )}
        </>
      )}
    </main>
  );
};

export default MainPage;
