import React from "react"
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import styled from "styled-components"
import { AuthProvider } from "./authContext"
import GlobalStyle from "./components/GlobalStyle"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Cover from "./components/cover"
import About from "./pages/About"
import Home from "./pages/Home"
import TodoApp from "./pages/TodoApp"

const Nav = styled.nav`
  background-color: #282c34;
  padding: 1rem;
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`

const NavItem = styled.li`
  margin-right: 1rem;
`

const NavLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Nav>
          <Cover>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/todos">Todos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
            </NavList>
          </Cover>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todos"
            element={
              <ProtectedRoute>
                <TodoApp />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
