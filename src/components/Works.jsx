import React, { useState } from 'react'
import styled from 'styled-components'
import ReactModel from './ReactModel'
import CSS from './CSS'
import NodeModel from './NodeModel'
import MongoModel from './MongoModel'

const data = [
    "React",
    "CSS",
    "NodeJS",
    "MongoDB",
]

const Section = styled.div` 
height: 100vh;
scroll-snap-align: center;
display:flex;
justify-content: center;
`
const Container = styled.div` 
width:1280px;
display: flex;
justify-content: space-between;
`
const Left = styled.div` 
flex:1;
display: flex;
align-items: center;

`
const Right = styled.div` 
flex: 1;

`
const List = styled.ul` 
list-style: none;
display:flex;
flex-direction: column;
gap:20px;
`
const ListItem = styled.li` 
font-size:60px;
// text-transform: uppercase;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 0.1px white;
position: relative;

::after{
    content: "${(props) => props.text}";
    position: absolute;
    top:0;
    left:0;
    color:pink;
    overflow: hidden;
    white-space: nowrap;
    width:0;
}
&:hover{
    ::after{
        animation: fillText 1s linear both;

        @keyframes fillText{
            to{
            width:100%;
            }
        }
    }
}
`
function Works() {

    const [work, setWork] = useState("React")

    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((d, i) => (<ListItem key={d} text={d} onClick={() => setWork(d)}>
                            {d}
                        </ListItem>))}
                    </List>
                </Left>
                <Right>
                    {work === "React" ?
                        (<ReactModel />) : work === "CSS" ?
                            (<CSS />) : work === "NodeJS" ?
                                (<NodeModel />) : (<MongoModel />)}
                </Right>
            </Container>
        </Section>
    )
}

export default Works
