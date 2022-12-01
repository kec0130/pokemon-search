import axios from 'axios';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import SearchResult from '../components/SearchResult';
import { Pokemon } from '../types/pokemon';

const Home = () => {
  const [searchId, setSearchId] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPokemonData = async (id: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(response.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchId(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getPokemonData(searchId);
  };

  return (
    <>
      <header>
        <h1>Search your Pokémon!</h1>
      </header>
      <main>
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
        <div>
          <SearchResult
            pokemon={pokemon}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
