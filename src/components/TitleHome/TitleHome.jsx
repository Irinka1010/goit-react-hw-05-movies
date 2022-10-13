import { Title } from './StyledTitleHome';
import PropTypes from 'prop-types';
export default function TitleHome({ title }) {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
}
TitleHome.propTypes = {
  title: PropTypes.string.isRequired,
};
