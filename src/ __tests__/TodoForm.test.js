import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import TodoForm from "../components/TodoForm"

test("renders TodoForm component", () => {
  render(<TodoForm addTodo={jest.fn()} />)
  expect(screen.getByPlaceholderText(/Add a new todo/i)).toBeInTheDocument()
})

test("calls addTodo on form submission", () => {
  const addTodo = jest.fn()
  render(<TodoForm addTodo={addTodo} />)

  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), {
    target: { value: "Test Todo" },
  })
  fireEvent.click(screen.getByText(/Add/i))

  expect(addTodo).toHaveBeenCalledWith("Test Todo")
})
