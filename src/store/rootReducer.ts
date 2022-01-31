import { combineReducers } from 'redux';
import EpisodesReducer from './episodes/episodes.reducer';
import CharactersReducer from './characters/characters.reducer';

const rootReducer = combineReducers({
  episodes: EpisodesReducer,
  characters: CharactersReducer,
});

export default rootReducer;
