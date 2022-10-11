import { useState } from 'react';
import { toast } from 'react-toastify';
export default function SearchBox({ onChange }) {
  const [search, setSearch] = useState('');

  const hendleQueryChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const hendleSubmit = ev => {
    ev.preventDefault();
    if (search.trim() === '') {
      toast.error('Enter your query');
      return;
    }
    onChange(search);
    setSearch('');
    console.log(search);
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input
        placeholder="Search movies and videos"
        type="text"
        // autocomplete="off"
        // autofocus
        name="query"
        onChange={hendleQueryChange}
      />
      <button type="submit"></button>
    </form>
  );
}
