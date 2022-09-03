/* eslint-disable camelcase */
import React from 'react';

import TimelineCard from '@Components/TimelineCard';

import { useGithubState } from '@Contexts/GithubContext';

import * as S from './styled';

const Timeline = () => {
  const { repos, isError } = useGithubState();

  if (isError || !repos?.length) return null;

  return (
    <S.TimelineWrapper>
      {repos.map(({ name, owner, created_at, updated_at, html_url, id }) => (
        <>
          <S.TimelineIconWrapper />
          <TimelineCard
            key={id}
            name={name}
            owner={owner}
            html_url={html_url}
            created_at={created_at}
            updated_at={updated_at}
          />
        </>
      ))}
    </S.TimelineWrapper>
  );
};

export default Timeline;
