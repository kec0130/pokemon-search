import styled from '@emotion/styled';
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
  const [isRandom, setIsRandom] = useState(false);

  const getPokemonData = async (id: string) => {
    setIsLoading(true);
    setIsError(false);
    setIsRandom(false);

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
    if (isRandom) {
      const randomId = Math.floor(Math.random() * 905 + 1).toString();
      setSearchId(randomId);
      getPokemonData(randomId);
    } else {
      if (!searchId.trim() || searchId === pokemon?.id.toString()) return;
      getPokemonData(searchId);
    }
  };

  return (
    <Background>
      <Container>
        <SearchForm
          searchId={searchId}
          setSearchId={setSearchId}
          setIsRandom={setIsRandom}
          handleSubmit={handleSubmit}
        />
      </Container>
      <ResultContainer>
        <SearchResult
          pokemon={pokemon}
          isLoading={isLoading}
          isError={isError}
        />
      </ResultContainer>
    </Background>
  );
};

export default Home;

const Background = styled.div`
  padding: 2rem 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 1rem;
  text-align: center;
`;

const ResultContainer = styled(Container)`
  background-color: #f4fcfc;
  height: 480px;
  margin-top: 2rem;
  padding: 2rem;
`;
