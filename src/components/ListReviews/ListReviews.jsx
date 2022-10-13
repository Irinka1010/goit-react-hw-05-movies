import PropTypes from 'prop-types';
export default function ListReviews({ reviews }) {
  const elements = reviews.map(({ content, author, id }) => {
    return (
      <li key={id}>
        <p>{author}</p>
        <p>{content}</p>
      </li>
    );
  });

  return <ul>{elements}</ul>;
}
ListReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
