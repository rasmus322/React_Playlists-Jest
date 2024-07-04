import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Router from "react-router-dom"
import { PlaylistsPage } from "../PlaylistsPage/PlaylistsPage"
import { renderWithRouter } from "../../../libs/tests"

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))

describe("PlaylistsPage", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it ("проверка вызова метода setSearchParam при вводе жанра", () => {
    const setSearchParamMock = jest.fn()
    jest.spyOn(Router, 'useSearchParams').mockReturnValue([new URLSearchParams, setSearchParamMock])

    renderWithRouter(<PlaylistsPage/>)

    const genreInput = screen.getByLabelText('введите жанр')
    fireEvent.change(genreInput, { target: { value: 'rock' } })

    expect(setSearchParamMock).toHaveBeenCalledWith({ genre: "rock" })
  })

  it ("проверка вызова метода setSearchParam при вводе названия", () => {
    const setSearchParamMock = jest.fn()
    jest.spyOn(Router, 'useSearchParams').mockReturnValue([new URLSearchParams, setSearchParamMock])

    renderWithRouter(<PlaylistsPage/>)

    const nameInput = screen.getByLabelText('введите название')
    fireEvent.change(nameInput, { target: { value: 'great rock hits' } })

    expect(setSearchParamMock).toHaveBeenCalledWith({ name: "great rock hits" })
  })
})