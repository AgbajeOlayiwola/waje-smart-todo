import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import TodoList from "../components/TodoList"

const todos = [
  { id: 1, text: "Test Todo 1", completed: false },
  { id: 2, text: "Test Todo 2", completed: true },
]

test("renders TodoList component", () => {
  render(
    <TodoList todos={todos} toggleTodo={jest.fn()} removeTodo={jest.fn()} />
  )
  expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument()
  expect(screen.getByText(/Test Todo 2/i)).toBeInTheDocument()
})

test("calls toggleTodo on checkbox click", () => {
  const toggleTodo = jest.fn()
  render(
    <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={jest.fn()} />
  )

  fireEvent.click(screen.getByLabelText(/Test Todo 1/i))
  expect(toggleTodo).toHaveBeenCalledWith(1)

  fireEvent.click(screen.getByLabelText(/Test Todo 2/i))
  expect(toggleTodo).toHaveBeenCalledWith(2)
})

test("calls removeTodo on button click", () => {
  const removeTodo = jest.fn()
  render(
    <TodoList todos={todos} toggleTodo={jest.fn()} removeTodo={removeTodo} />
  )

  fireEvent.click(screen.getByText(/Remove/i))
  expect(removeTodo).toHaveBeenCalledWith(1)
})
