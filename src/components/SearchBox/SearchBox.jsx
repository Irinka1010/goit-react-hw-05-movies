import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoSearchSharp } from 'react-icons/io5';
import { StyledForm } from 'components/SearchBox/StyledForm';
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
    <StyledForm>
      <form className="Form" onSubmit={hendleSubmit}>
        <button className="Button" type="submit">
          <IoSearchSharp />
        </button>

        <input
          className="Input"
          placeholder="Search movies and videos"
          type="text"
          autocomplete="off"
          autofocus
          name="query"
          onChange={hendleQueryChange}
        />
      </form>
    </StyledForm>
  );
}
