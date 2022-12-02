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
      <h1>Search your Pokémon!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">poke-id</label>
        <input
          id="id"
          type="text"
          placeholder="id"
          value={searchId}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
