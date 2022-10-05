import { NavLink } from 'react-router-dom';

export default function ListFilms({ items }) {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <NavLink>{title}</NavLink>{' '}
    </li>
  ));
  return <ul>{elements}</ul>;
}
