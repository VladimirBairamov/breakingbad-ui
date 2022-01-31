import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { characterGetOne } from 'store/characters/characters.actions';
import { AppStore, RequestState } from 'store/common.types';

const CharacterPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentCharacter, characterByIdGetState } = useSelector(
    (store: AppStore) => store.characters,
  );

  useEffect(() => {
    id && dispatch(characterGetOne(id));
  }, [dispatch, id]);

  if (characterByIdGetState === RequestState.Loading || !currentCharacter) {
    return <>Loading...</>;
  }

  return (
    <div className="max-w-xs mx-auto mt-16">
      <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 rounded-full mx-auto object-cover"
            src={currentCharacter.img}
            alt={currentCharacter.nickname}
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {currentCharacter.name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{currentCharacter.status}</p>
          </div>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Birth</td>
                <td className="px-2 py-2">{currentCharacter.birthday}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Nickname</td>
                <td className="px-2 py-2">{currentCharacter.nickname}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Occupations</td>
                <td className="px-2 py-2">{currentCharacter.occupation.join(', ')}</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center my-3">
            <Link
              to="/"
              className="text-xs text-indigo-500 hover:underline hover:text-indigo-600 font-medium"
            >
              Open Episodes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
