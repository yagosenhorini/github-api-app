import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Form from '@Components/Form';
import Button from '@Components/Button';
import Input from '@Components/Form/components/Input';

import { useGithubDispatch, getRepos } from '@Contexts/GithubContext';

import * as S from './styled';

const SearchContainer = () => {
  const { handleSubmit } = useForm();
  const dispatch = useGithubDispatch();

  const [term, setTerm] = useState('');

  const handleChange = async () => {
    await dispatch(getRepos(term));
  };

  const handleSetTerm = ({ currentTarget }) => {
    setTerm(currentTarget.value);
  };

  return (
    <S.SearchContainerWrapper>
      <Form onSubmit={handleSubmit(handleChange)}>
        <Input
          onChange={(ev) => handleSetTerm(ev)}
          type="text"
          testId="digitable-term"
          name="repo-term"
          id="repo-term"
          placeholder="Please type the name of owner"
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </S.SearchContainerWrapper>
  );
};

export default SearchContainer;
