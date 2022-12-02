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
  setIsRandom: Dispatch<SetStateAction<boolean>>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

const SearchForm = ({
  searchId,
  setSearchId,
  setIsRandom,
  handleSubmit,
}: Props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchId(e.target.value);

  const handleClickRandom = () => setIsRandom(true);

  return (
    <>
      <Title>Search your Pokemon!</Title>
      <Form onSubmit={handleSubmit}>
        <div className="searchBox">
          <input
            id="id"
            type="text"
            placeholder="Enter id number"
            autoComplete="off"
            value={searchId}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </div>
        <div>
          <button type="submit" className="ghost" onClick={handleClickRandom}>
            Get a random Pokemon
          </button>
        </div>
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
  width: 100%;
  .searchBox {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  input {
    width: 100%;
    height: 100%;
    max-width: 240px;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    font-size: 1rem;
    color: #2e3057;
    margin-right: 1rem;

    ::placeholder {
      color: #a1a5b6;
    }
  }

  button {
    width: 100px;
    border: none;
    border-radius: 0.5rem;
    background-color: #7daeab;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
      background-color: #6c9a98;
    }

    &.ghost {
      width: auto;
      color: #7daeab;
      background: none;
      margin-top: 1rem;

      :hover {
        color: #6c9a98;
        text-decoration: underline;
      }
    }
  }
`;
