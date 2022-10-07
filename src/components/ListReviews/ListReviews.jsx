export default function ListReviews({ reviews }) {
  const elements = reviews.map(({ content, author, id }) => {
    return (
      <li key={id}>
        <p>{author}</p>
        <p>{content}</p>
      </li>
    );
  });
  console.log(reviews);
  return <ul>{elements}</ul>;
}
