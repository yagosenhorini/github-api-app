import React from 'react';

import { TimelineCardProps } from '@Types/TimelineCard';

import { dateFormatter, dateFormatterToYear } from '@Utils/dateFormatter';

import * as S from './styled';

const TimelineCard = ({
  name,
  owner,
  created_at: createdAt,
  updated_at: updatedAt,
  html_url: url,
}: TimelineCardProps) => (
  <S.TimelineCardWrapper className="timeline">
    <S.TimelineCreatedDate>
      {dateFormatterToYear(createdAt)}
    </S.TimelineCreatedDate>
    <S.TimelineCardName>Repositório: {name}</S.TimelineCardName>
    <S.TimelineCardOwner>Usuário: {owner.login}</S.TimelineCardOwner>
    <S.TimelineCardLink>URL de acesso: {url}</S.TimelineCardLink>
    <S.TimelineCreatedDate>
      Atualizado em: {dateFormatter(updatedAt)}
    </S.TimelineCreatedDate>
  </S.TimelineCardWrapper>
);

export default TimelineCard;
