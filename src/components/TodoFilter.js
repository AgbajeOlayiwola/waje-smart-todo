import React from "react"
import styled from "styled-components"

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

const Button = styled.button`
  background-color: ${(props) => (props.active ? "#61dafb" : "#ccc")};
  border: none;
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#21a1f1" : "#aaa")};
  }
`

const TodoFilter = ({ setFilter }) => {
  const filters = ["all", "active", "completed"]

  return (
    <FilterContainer>
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => setFilter(filter)}
          active={filter === "all"}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </Button>
      ))}
    </FilterContainer>
  )
}

export default TodoFilter
