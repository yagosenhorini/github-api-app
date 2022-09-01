import React from 'react';
import useThunkReducer from 'react-hook-thunk-reducer';

import { reducer, initialState } from './github/reducer';

import { GithubContext, GithubDispatchContext } from './Contexts';
import { ContextProps } from './types';

export const GithubProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return (
    <GithubContext.Provider value={state}>
      <GithubDispatchContext.Provider value={dispatch}>
        {children}
      </GithubDispatchContext.Provider>
    </GithubContext.Provider>
  );
};
