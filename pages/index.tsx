import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Pokemon } from '../types/pokemon';
import Image from 'next/image';

const Home = () => {
  const [pokeId, setPokeId] = useState('');
  const [data, setData] = useState<Pokemon | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPokeId(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Pokemon not found');
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <>
      <header>
        <h1>Search your Pokémon!</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="poke-id">poke-id</label>
          <input
            id="poke-id"
            type="text"
            placeholder="id"
            value={pokeId}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {errorMessage && <p>{errorMessage}</p>}
          {data && (
            <>
              <div>{data.id}</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.sprites.front_default} alt={data.name} />
              <div>{data.name}</div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
