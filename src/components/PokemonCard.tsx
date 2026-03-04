import type { Pokemon } from '../types';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div style={{ border: '2px solid #e94560', padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(15, 52, 96, 0.7)', color: '#ffffff' }}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}
