import React, { createContext } from 'react';

import { InitialStateProps } from './github/interfaces';

export const GithubContext = createContext<InitialStateProps | undefined>(
  undefined
);
export const GithubDispatchContext = createContext<React.Dispatch<any>>(
  () => {}
);
