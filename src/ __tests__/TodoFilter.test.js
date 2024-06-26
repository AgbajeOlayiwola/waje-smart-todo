import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import TodoFilter from "../components/TodoFilter"

test("renders TodoFilter component", () => {
  render(<TodoFilter setFilter={jest.fn()} />)
  expect(screen.getByText(/All/i)).toBeInTheDocument()
  expect(screen.getByText(/Active/i)).toBeInTheDocument()
  expect(screen.getByText(/Completed/i)).toBeInTheDocument()
})

test("calls setFilter on button click", () => {
  const setFilter = jest.fn()
  render(<TodoFilter setFilter={setFilter} />)

  fireEvent.click(screen.getByText(/Active/i))
  expect(setFilter).toHaveBeenCalledWith("active")

  fireEvent.click(screen.getByText(/Completed/i))
  expect(setFilter).toHaveBeenCalledWith("completed")

  fireEvent.click(screen.getByText(/All/i))
  expect(setFilter).toHaveBeenCalledWith("all")
})
