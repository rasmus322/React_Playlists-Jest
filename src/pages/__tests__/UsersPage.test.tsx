import "@testing-library/jest-dom"
import { screen, fireEvent } from "@testing-library/react"
import { UsersPage } from "../UsersPage/UsersPage"
import { renderWithRouter } from "../../../libs/tests"
import Router from "react-router-dom"

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))


describe("UsersPage", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it ('проверка вызова метода setSearchParam при вводе имени пользователя', () => {
    const setSearchParamMock = jest.fn()
    jest.spyOn(Router, 'useSearchParams').mockReturnValue([new URLSearchParams, setSearchParamMock])

    renderWithRouter(<UsersPage/>)

    const nameInput = screen.getByLabelText('введите имя')
    fireEvent.change(nameInput, { target: { value: 'Abraham Walsh' } })

    expect(setSearchParamMock).toHaveBeenCalledWith({ searchName: 'abraham walsh' })
  })
})