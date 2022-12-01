import Image from 'next/image';
import { Pokemon } from '../types/pokemon';

interface Props {
  pokemon: Pokemon | undefined;
  isLoading: boolean;
  isError: boolean;
}

const SearchResult = ({ pokemon, isLoading, isError }: Props) => {
  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return (
      <>
        <p>Pokemon not found!</p>
        <p>Are you sure you got the right pokemon id?</p>
      </>
    );

  return (
    <>
      {pokemon && (
        <div>
          <div>#{pokemon.id}</div>
          <Image
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            width={200}
            height={200}
          />
          <div>{pokemon.name}</div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
