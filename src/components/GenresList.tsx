import useGenres from '../hooks/useGenres';

function GenresList() {
  const { data, error } = useGenres();
  return (
    <ul>
      {error && <p>{error}</p>}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenresList;
