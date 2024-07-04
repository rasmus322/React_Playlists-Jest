import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { MainPage } from "../MainPage/MainPage";

describe ("Snapshot тест компонента MainPage", () => {
  test ('Проверка корректного рендеринга компонента', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})

const renderComponent = () => {
  return render(<MainPage/>)
}