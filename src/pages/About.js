import React from "react"
import styled, { keyframes } from "styled-components"
import bgImage from "../components/assets/to-do-bg.jpeg"
import Cover from "../components/cover"
const About = () => {
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
    text-align: center;
  `

  return (
    <HomeContainer>
      <Cover>
        <Content>
          <div>
            <h1>About This Application</h1>
            <p>
              This application is built with React and allows users to manage
              their todos.
            </p>
          </div>
        </Content>
      </Cover>
    </HomeContainer>
  )
}

export default About
