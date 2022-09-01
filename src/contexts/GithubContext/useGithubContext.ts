import { useContext } from 'react';

import { GithubContext, GithubDispatchContext } from './Contexts';

export const useGithubState = () => {
  const state = useContext(GithubContext);

  if (state === undefined) {
    throw new Error('useGithubState must be used within a AuthProvider');
  }
  return state;
};

export const useGithubDispatch = () => {
  const dispatch = useContext(GithubDispatchContext);

  if (dispatch === undefined) {
    throw new Error(
      'useGithubDispatch must be used within a AuthDispatchProvider'
    );
  }
  return dispatch;
};
