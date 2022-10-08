export default function SearchBox({ onChange }) {
  return (
    <form>
      <input
        placeholder="Search for a movie"
        type="text"
        onChange={e => onChange(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
}
