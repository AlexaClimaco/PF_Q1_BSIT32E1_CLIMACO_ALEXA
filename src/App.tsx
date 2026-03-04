import { useState } from 'react';
import PokemonSelector from './components/PokemonSelector';
import PokemonCard from './components/PokemonCard';
import type { Pokemon } from './types';

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  // This function gets passed DOWN
  // The child calls it with selected name
  function handleSelect(name: string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        const clean: Pokemon = {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          imageUrl: data.sprites.front_default,
        };

        setPokemon(clean);
      });
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem'
    }}>
      <div style={{ backgroundColor: 'rgba(22, 33, 62, 0.85)', padding: '2rem', borderRadius: '16px', boxShadow: '0 8px 32px rgba(233, 69, 96, 0.2)' }}>
        <h1 style={{ textAlign: 'center', color: '#e94560' }}>Pokémon Explorer</h1>
        <p style={{ textAlign: 'center', color: '#a8a8d8', marginTop: '-0.5rem' }}>by Alexa Climaco</p>

        {/* Pass function as prop */}
        <PokemonSelector onSelect={handleSelect} />

        {/* Conditionally render */}
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </div>
    </div>
  );
}
