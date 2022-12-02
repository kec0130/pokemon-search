import styled from '@emotion/styled';
import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
} from 'react';

interface Props {
  searchId: string;
  setSearchId: Dispatch<SetStateAction<string>>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

const SearchForm = ({ searchId, setSearchId, handleSubmit }: Props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchId(e.target.value);
  };

  return (
    <>
      <Title>Search your Pokemon!</Title>
      <Form onSubmit={handleSubmit}>
        <input
          id="id"
          type="text"
          placeholder="Enter name or id"
          autoComplete="off"
          value={searchId}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </Form>
    </>
  );
};

export default SearchForm;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #2e3057;
`;

const Form = styled.form`
  display: flex;
  height: 44px;
  margin: 1rem 0;

  input {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
  }

  button {
    width: 100px;
    border: none;
    border-radius: 0.5rem;
    margin-left: 1rem;
    background-color: #2e3057;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
`;
