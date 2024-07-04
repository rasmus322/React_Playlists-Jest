import "@testing-library/jest-dom"
import Router from "react-router-dom"
import { screen } from "@testing-library/react"
import { UserInfoPage } from "../UserInfoPage/UserInfoPage"
import { USERS } from "../../data"
import { renderWithRouter } from "../../../libs/tests"

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))

describe ("UserInfoPage", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it ("Проверка текста по умолчанию, если нет пользователя", () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ userId: '1000' })
    renderWithRouter(<UserInfoPage/>)

    expect(screen.getByText("пользователя таким userId нет")).toBeDefined()
  })

  it ("проверка данных о пользователе, если он существует", () => {
    const user = USERS[0]

    jest.spyOn(Router, 'useParams').mockReturnValue({ userId: '0' })
    renderWithRouter(<UserInfoPage/>)

    expect(screen.getByText(user.email)).toBeDefined()
    expect(screen.getByText(user.fullName)).toBeDefined()
  })
})