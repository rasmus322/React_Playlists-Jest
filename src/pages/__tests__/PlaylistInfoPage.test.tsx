import "@testing-library/jest-dom"
import { screen } from "@testing-library/react"
import { PlaylistInfoPage } from "../PlaylistInfoPage/PlaylistInfoPage"
import { PLAYLISTS } from "../../data"
import { renderWithRouter } from "../../../libs/tests"
import Router from "react-router-dom"

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))

describe ("PlaylistInfoPage", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it ("проверка текста по умолчанию, если нет доступного плейлиста", () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ playlistId: '100' })
    renderWithRouter(<PlaylistInfoPage/>)

    expect(screen.getByText('плейлиста с таким playlistId нет')).toBeDefined()
  })

  it ("проверка данных о плейлисте, если он доступен", () => {
    const playlist = PLAYLISTS[0]

    jest.spyOn(Router, 'useParams').mockReturnValue({ playlistId: '0' })
    renderWithRouter(<PlaylistInfoPage/>)
    
    expect(screen.getByText(`Жанр: ${ playlist.genre }`)).toBeDefined()
    expect(screen.getByText(`Название: ${ playlist.name }`)).toBeDefined()
  })
  
})