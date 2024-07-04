import { Link, useSearchParams } from "react-router-dom"
import { PLAYLISTS } from "../../data"
import "./PlaylistsPage.css"
import { ChangeEvent, useEffect, useState } from "react"

export function PlaylistsPage() {
  const [searchParam, setSearchParam] = useSearchParams()
  const [genre, setGenre] = useState<string>("")
  const [name, setName] = useState<string>("")

  const handleSearchName = (e:ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setName(value.toLowerCase())
    setSearchParam({ name: value.toLowerCase() })
  }

  const handleSearchGenre = (e:ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setGenre(value.toLowerCase())
    setSearchParam({ genre: value.toLowerCase() })
  }

  useEffect(() => {
    if (searchParam.get("genre")) {
      setGenre(searchParam.get("genre") || "")
    }
    if (searchParam.get("name")) {
      setName(searchParam.get("name") || "")
    }
  }, [searchParam])

  const filteredPlaylists = PLAYLISTS.filter((playlist) => {
    return (
      playlist.genre.toLowerCase().includes(genre.toLowerCase()) &&
      playlist.name.toLowerCase().includes(name.toLowerCase()) &&
      playlist.songs.some((song) => {
        return song.toLowerCase().includes(name.toLowerCase())
      })
    )
  })

  return (
    <div className="playlistsPage">
      <h2>PlaylistsPage</h2>

      <div className="playlists">
        <label>
          введите жанр{" "}
          <input type="text" value={genre} onChange={handleSearchGenre}/>
        </label>
        <label>
          введите название{" "}
          <input type="text" value={name} onChange={handleSearchName}/>
        </label>

        { filteredPlaylists.map(({ id, name }) => (
          <Link to={`/playlists/${id}`} key={id}>
            { name }  
          </Link>
        )) }
      </div>
    </div>
  )
}