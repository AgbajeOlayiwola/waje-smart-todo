import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { useAuth } from "../authContext"
import bgImage from "../components/assets/to-do-bg.jpeg"
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

const Content = styled.div`
  display: flex;
  flex-direction: colun;
  align-items: center;
  gap: 30px;
`

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
const InputContainer = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  font-size: 1rem;
`

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
`

const SubmitButton = styled.button`
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 50px;
  cursor: pointer;
  background-color: blue;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: darkblue;
  }
`
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login(username, password)) {
      navigate("/todos")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <HomeContainer>
      <Content>
        <form onSubmit={handleSubmit}>
          <FormContent>
            <InputContainer>
              <Label>Username:</Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Password:</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            <SubmitButton type="submit">Login</SubmitButton>
          </FormContent>
        </form>
      </Content>
    </HomeContainer>
  )
}

export default Login
