import { Link, useParams } from 'react-router-dom';
import './PlaylistInfoPage.css';
import { PLAYLISTS } from '../../data';

export function PlaylistInfoPage() {
  const { playlistId } = useParams();

  const playlist = PLAYLISTS[Number(playlistId)];

  if (!playlist) {
    return (
      <div className="playlistInfoPage">
				<h2>PlaylistInfoPage</h2>

				<div className="playlists">
					<p>Плэйлиста с таким ИД нет</p>
				</div>
			</div>
    )
  }

  return (
    <div className='playlistInfoPage'>
      <h2>PlaylistInfoPage</h2>

      <div className='playlists'>
        <Link to={`/playlists?searchPlaylistGenre=${playlist.genre.toLowerCase()}`}>Gentre: {playlist.genre}</Link>
        <p>Playlist name: {playlist.name}</p>
        <ul>
          {playlist.songs.map((song)  => (
            <li key={Math.random()}>
              <p>{song}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}