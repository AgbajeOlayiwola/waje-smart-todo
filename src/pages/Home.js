import React from "react"
import styled, { keyframes } from "styled-components"
import bgImage from "../components/assets/to-do-bg.jpeg"
import Cover from "../components/cover"
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

// Styled component for the home page container
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

// Styled component for the content inside the container
const Content = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
`

const Features = styled.div`
  margin-top: 2rem;
`

const FeatureItem = styled.div`
  margin-bottom: 1rem;
`

const FeatureTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const FeatureDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
`

const Home = () => {
  return (
    <HomeContainer>
      <Cover>
        <Content>
          <Title>Welcome to the Todo List Application</Title>
          <Description>
            Organize your tasks with ease. Whether it's managing personal
            projects, planning daily chores, or collaborating with a team, our
            application helps you stay on top of everything effortlessly.
          </Description>
          <Features>
            <FeatureItem>
              <FeatureTitle>Add, Complete, and Remove Tasks</FeatureTitle>
              <FeatureDescription>
                Easily add new tasks, mark them as completed, and remove them
                when done.
              </FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Filter Your Tasks</FeatureTitle>
              <FeatureDescription>
                Filter tasks by status (all, active, completed) to focus on
                what's most important.
              </FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>User Authentication</FeatureTitle>
              <FeatureDescription>
                Securely manage your tasks with user authentication using JWT.
              </FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Responsive Design</FeatureTitle>
              <FeatureDescription>
                Enjoy a seamless experience across devices with responsive
                design.
              </FeatureDescription>
            </FeatureItem>
          </Features>
        </Content>
      </Cover>
    </HomeContainer>
  )
}

export default Home
