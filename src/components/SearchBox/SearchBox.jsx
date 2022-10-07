export default function SearchBox({ onChange }) {
  return (
    <form>
      <button type="submit"></button>
      <input
        placeholder="Search for a movie"
        type="text"
        onChange={e => onChange(e.target.value)}
      />
    </form>
  );
}
