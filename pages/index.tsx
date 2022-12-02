import axios from 'axios';
import { FormEventHandler, useState } from 'react';
import SearchForm from '../components/SearchForm';
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getPokemonData(searchId);
  };

  return (
    <>
      <header>
        <SearchForm
          searchId={searchId}
          setSearchId={setSearchId}
          handleSubmit={handleSubmit}
        />
      </header>
      <main>
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
