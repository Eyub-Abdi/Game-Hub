import useGenres from '../hooks/useGenres'

function GenreList() {
  const { data: genres } = useGenres()

  return (
    <>
      <p>Grenre List</p>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GenreList
