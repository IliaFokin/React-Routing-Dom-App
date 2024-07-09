import "./PlaylistsPage.css"
import { PLAYLISTS } from "../../data";
import { ChangeEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";

export function PlaylistsPage() {
  const [ searchPlaylistParams, setSearchPlaylistParams ] = useSearchParams();

  const handleSearchPlaylistGenre = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    setSearchPlaylistParams({
      searchPlaylistGenre: value.toLowerCase(),
      searchPlaylistName: searchPlaylistName
    })
  }

  const handleSearchPlaylistName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    setSearchPlaylistParams({
      searchPlaylistGenre: searchPlaylistGenre,
      searchPlaylistName: value.toLowerCase(),
    })
  }

  const searchPlaylistGenre = searchPlaylistParams.get('searchPlaylistGenre') || '';
  const searchPlaylistName = searchPlaylistParams.get('searchPlaylistName') || '';

  const filteredPlaylists = PLAYLISTS
    .filter(({ genre }) => !genre.includes('Non Music'))
    .filter(({ genre }) => genre.toLowerCase().includes(searchPlaylistGenre))
    .filter(({ name }) => name.toLowerCase().includes(searchPlaylistName))

  return (
    <div className="playlistsPage">
      <h2>Playlists Page</h2>

      <div className="playlists">
        <label>
          введите название жанра{' '}
          <input type="text" value={searchPlaylistGenre} onChange={handleSearchPlaylistGenre} />
        </label>

        <label>
          введите название плэйлиста{' '}
          <input type="text" value={searchPlaylistName} onChange={handleSearchPlaylistName} />
        </label>

        {filteredPlaylists.map(({ id, name }) => (
          <Link to={`/playlists/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  )
}