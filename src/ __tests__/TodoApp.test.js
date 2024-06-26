import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import TodoApp from "../components/TodoApp"
import { AuthProvider } from "../authContext"

test("renders TodoApp component", async () => {
  render(
    <AuthProvider>
      <TodoApp />
    </AuthProvider>
  )

  expect(screen.getByText(/Loading.../i)).toBeInTheDocument()

  await waitFor(() =>
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument()
  )
})

test("adds a new todo item", async () => {
  render(
    <AuthProvider>
      <TodoApp />
    </AuthProvider>
  )

  await waitFor(() =>
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument()
  )

  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), {
    target: { value: "Test Todo" },
  })
  fireEvent.click(screen.getByText(/Add/i))

  expect(screen.getByText(/Test Todo/i)).toBeInTheDocument()
})
