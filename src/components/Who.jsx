import React from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Section = styled.div` 
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`
const Container = styled.div`
height:100vh;
width: 1280px;
display:flex;
justify-content: space-between;
margin-left:20px;
`
const Left = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
display:flex;
gap:20px;
flex-direction: column;
justify-content: center;
`
const Button = styled.button` 
width:120px;
padding:10px;
cursor:pointer;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
`
const Title = styled.h1`
font-size:54px;
`
const Desc = styled.div`
display:flex;
align-items:center;
gap:20px;
`
const Line = styled.img`
height:10px;
`
const Tagline = styled.p`
font-size: 18px;
color:lightgray;
`
const Subtitle = styled.h2`
color: #da4ea2;
height: 24px
`

function Who() {

  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the Square Space.</Title>
          <Desc>
            <Line src='./img/line.png' />
            <Subtitle>Who we are.</Subtitle>
          </Desc>
          <Tagline>Frontend Devs Ready for Action.</Tagline>
          <Button>See our Work</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who
