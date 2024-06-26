import React, { useEffect, useState } from "react"

import styled, { keyframes } from "styled-components"
import { useAuth } from "../authContext"
import TodoFilter from "../components/TodoFilter"
import TodoList from "../components/TodoList"
import TodoInput from "../components/Todoinput"
import bgImage from "../components/assets/to-do-bg.jpeg"
import Cover from "../components/cover"
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  text-align: center;
  color: #333;
`

const LogoutButton = styled.button`
  display: block;
  margin: 0 auto 1rem auto;
  padding: 0.5rem 1rem;
  background-color: #ff4b5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff1c3d;
  }
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  color: white;
  animation: ${fadeIn} 1s ease-in-out;
`

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { logout } = useAuth()

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        )
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setTodos(data.slice(0, 10))
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), title: text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = () => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed)
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.completed)
    } else {
      return todos
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <HomeContainer>
      <Cover>
        <Container>
          <Title>Todo List</Title>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
          <TodoInput addTodo={addTodo} />
          <TodoFilter setFilter={setFilter} />
          <TodoList
            todos={filteredTodos()}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </Container>
      </Cover>
    </HomeContainer>
  )
}
export default TodoApp
