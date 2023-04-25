import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const Section = styled.div` 
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;


@media only screen and (max-width: 768px) {
 height: 200vh; 
}
`
const Container = styled.div`
height:100vh;
width: 1280px;
display:flex;
justify-content: space-between;
margin-left:20px;


@media only screen and (max-width: 768px) {
  height:200vh;
  width:100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`
const Left = styled.div`
flex:3;
display:flex;
gap:20px;
flex-direction: column;
justify-content: center;

@media only screen and (max-width: 768px) {
  flex: 1;
  align-items: center;
}

`
const Right = styled.div`
flex:4;
display: flex;
align-items: center;
position: relative;

@media only screen and (max-width: 768px) {
  flex: 1;
  display: flex;
  justify-content: center;
}
`
const Anime = styled.div`
position: absolute;
height:600px;
width:800px;

@media only screen and (max-width: 768px) {
  height:500px;
  width:700px;
}
`
const Image = styled.img`
position:absolute;
height:600px;
object-fit: contain;
width:800px;
animation: animate 2s infinite ease alternate;

@keyframes animate {
  to{
    transform: translateY(25px)
  }
}

@media only screen and (max-width: 768px) {
  height:500px;
  width:700px;
}
`
const Button = styled.button` 
width:100px;
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
const Text = styled.p`
font-size: 18px;
color:lightgray;
`
const Subtitle = styled.h2`
color: #da4ea2;
height: 24px
`


function Hero() {

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <Desc>
            <Line src='./img/line.png' />
            <Subtitle>What I Can Do.</Subtitle>
          </Desc>
          <Text>We create engaging and user friendly Websites using React.</Text>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Anime>
            <Canvas>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.7}>
                <MeshDistortMaterial
                  color={"purple"}
                  attach={"material"}
                  distort={"0.5"}
                  speed={"2"} />
              </Sphere>
            </Canvas>
          </Anime>
          <Image src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
