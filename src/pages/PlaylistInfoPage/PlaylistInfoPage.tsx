import { useParams } from "react-router-dom"
import { TPlaylist } from "../../data/interfaces"
import "./PlaylistInfoPage.css"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export function PlaylistInfoPage() {
  const playlists = useSelector((state: RootState) => state.playlists)

  const { playlistId } = useParams()
  const playlist: TPlaylist = playlists[Number(playlistId)]

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