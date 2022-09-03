import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

import Form from '@Components/Form';
import Button from '@Components/Button';
import Input from '@Components/Form/components/Input';

import {
  useGithubDispatch,
  getRepos,
  useGithubState,
} from '@Contexts/GithubContext';

import { GitForm } from '@Types/Form';

import * as S from './styled';

const SearchContainer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<GitForm, FieldErrors>();
  const dispatch = useGithubDispatch();
  const { isError, isLoading } = useGithubState();

  const [term, setTerm] = useState('');

  const submit = async () => {
    dispatch(getRepos(term));
  };

  const handleSetTerm = ({ currentTarget }) => {
    setTerm(currentTarget.value);
  };

  return (
    <S.SearchContainerWrapper>
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          {...register('repoInput', {
            required: 'Campo obrigatório',
          })}
          onChange={(ev) => handleSetTerm(ev)}
          type="text"
          testId="digitable-term"
          name="repoInput"
          id="repoInput"
          placeholder="Digite o nome do usuário que deseja buscar"
          error={errors?.repoInput?.type}
        />
        {isError && <S.ErrorMessage>Usuário não encontrado</S.ErrorMessage>}
        <S.SubmitButtonWrapper>
          <Button data-testid="submit-button" type="submit">
            {isLoading ? 'Enviando...' : 'Enviar'}
          </Button>
        </S.SubmitButtonWrapper>
      </Form>
    </S.SearchContainerWrapper>
  );
};

export default SearchContainer;
