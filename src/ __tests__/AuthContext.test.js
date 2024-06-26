import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { AuthProvider, useAuth } from "../authContext"

const TestComponent = () => {
  const { user, login, logout } = useAuth()
  return (
    <div>
      <button onClick={() => login("user", "password")}>Login</button>
      <button onClick={logout}>Logout</button>
      {user ? <span>User logged in</span> : <span>No user</span>}
    </div>
  )
}

test("logs in and out user", () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  )

  expect(screen.getByText(/No user/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText(/Login/i))
  expect(screen.getByText(/User logged in/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText(/Logout/i))
  expect(screen.getByText(/No user/i)).toBeInTheDocument()
})
