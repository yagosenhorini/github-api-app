import React from 'react';

import { octokit } from '@Services/index';
import { GithubResponseProps } from '@Types/Services';

import * as t from './types';
import { orderByDate } from './utils';

export const setSuccess = (success: boolean) => ({
  type: t.SUCCESS,
  payload: success,
});

export const setLoading = (loading: boolean) => ({
  type: t.LOADING,
  payload: loading,
});

export const setError = (error: boolean) => ({
  type: t.ERROR,
  payload: error,
});

export const setRepos = (repos: GithubResponseProps) => ({
  type: t.REPOS,
  payload: repos,
});

export const getRepos =
  (term: string) => async (dispatch: React.Dispatch<any>) => {
    await dispatch(setLoading(true));
    try {
      const { data } = await octokit.request(`GET /users/${term}/repos`);
      const orderedData = orderByDate(data);
      await dispatch(setRepos(orderedData));
    } catch (err) {
      await dispatch(setError(true));
      throw new Error('Failed to get user repo or user not found');
    } finally {
      await dispatch(setLoading(false));
    }
  };
