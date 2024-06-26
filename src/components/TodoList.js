import React from "react"
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;

  &:hover {
    background-color: #f1f1f1;
  }
`

const Text = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: #000;
`

const Button = styled.button`
  background-color: #ff4b5c;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff1c3d;
  }
`

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <Text completed={todo.completed} onClick={() => toggleTodo(todo.id)}>
            {todo.title}
          </Text>
          <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
        </ListItem>
      ))}
    </List>
  )
}

export default TodoList
