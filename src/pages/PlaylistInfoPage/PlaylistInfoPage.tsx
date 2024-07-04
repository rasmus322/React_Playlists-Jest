import { useParams } from "react-router-dom"
import { PLAYLISTS } from "../../data"
import { TPlaylist } from "../../data/interfaces"
import "./PlaylistInfoPage.css"

export function PlaylistInfoPage() {
  const { playlistId } = useParams()
  const playlist: TPlaylist = PLAYLISTS[Number(playlistId)]

  if (!playlist) {
    return (
      <div className="playlistInfoPage">
        <h2>PlaylistInfoPage</h2>

        <div className="playlists">
          <p id="test-id">плейлиста с таким playlistId нет</p>
        </div>
      </div>
    )
  }

  const handleGenreClick = (genre: string) => {
    window.location.href = `/playlists?genre=${genre}`
  }

  const keyChanger = () => {
    return Math.floor(Math.random() * 1000)
  }

  return (
    <div className="playlistInfoPage">
      <h2>PlaylistInfoPage</h2>

      <div className="playlists">
        <a onClick={() => handleGenreClick(playlist.genre)}>Жанр: { playlist.genre }</a>
        <p>Название: { playlist.name }</p>
        { playlist.songs.map((song) => (
          <li key={keyChanger()}>{ song }</li>
        )) }
      </div>
    </div>
  )
}