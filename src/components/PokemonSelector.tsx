interface PokemonSelectorProps {
  onSelect: (name: string) => void; // Send selected name to parent
}

const options = ['pikachu', 'charizard', 'gengar', 'squirtle', 'mewtwo'];

export default function PokemonSelector({ onSelect }: PokemonSelectorProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ color: '#e94560' }}>
        <strong>Pick a Pokémon:</strong>
      </label>

      <select
        defaultValue=""
        onChange={(e) => onSelect(e.target.value)}
        style={{ marginLeft: '0.5rem', padding: '0.4em 0.8em', borderRadius: '8px', border: '1px solid #e94560', backgroundColor: '#16213e', color: '#ffffff' }}
      >
        <option value="" disabled>
          -- Select --
        </option>

        {options.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
