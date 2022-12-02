import styled from '@emotion/styled';
import Image from 'next/image';
import { Pokemon } from '../types/pokemon';
import Error from './Error';
import Loading from './Loading';

interface Props {
  pokemon: Pokemon | undefined;
  isLoading: boolean;
  isError: boolean;
}

const SearchResult = ({ pokemon, isLoading, isError }: Props) => {
  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <>
      {pokemon && (
        <Result>
          <h3 className="name">{capitalize(pokemon.name)}</h3>
          <div className="id">{pokemon.id}</div>
          <Image
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            width={200}
            height={200}
          />
          <div className="types">
            {pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </div>
        </Result>
      )}
    </>
  );
};

export default SearchResult;

const Result = styled.div`
  color: #2e3057;

  .id {
    font-size: 1.5rem;
  }

  .name {
    margin-bottom: 0.8rem;
    font-size: 2rem;
    font-weight: 700;
  }

  img {
    margin: 1.2rem 0;
  }

  .types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      background-color: #7daeab;
      color: #ffffff;
      border-radius: 1rem;
      padding: 0.5rem 1rem;

      + li {
        margin-left: 0.8rem;
      }
    }
  }
`;
