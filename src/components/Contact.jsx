import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'

const Section = styled.div` 
height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
`
const Container = styled.div` 
width:100%;
display: flex;
justify-content: space-between;
gap:20px;

`
const Left = styled.div` 
flex:1;
display: flex;
align-items: center;
justify-content: end;
`
const Title = styled.h1` 
font-weight:200;
`
const Form = styled.form`
width:400px; 
display:flex;
flex-direction: column;
gap:25px;
`
const Input = styled.input` 
padding:10px;
background-color: #e8e6e6;
border:none;
border-radius: 5px;
`
const TextArea = styled.textarea` 
padding:20px;
background-color: #e8e6e6;
border:none;
border-radius: 5px;
`
const Button = styled.button` 
width:400px;
padding:10px;
cursor:pointer;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
`
const Right = styled.div` 
flex:1;
display: flex;
justify-content: flex-end;
`

const Image = styled.img`
height:700px;
object-fit: contain;

`
function Contact() {

    const ref = useRef();
    const [pass, setPass] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hn5utbd', 'template_wrq3tmo', ref.current, 'GBlPVjfSqVseZM5Vn')
            .then((result) => {
                console.log(result.text);
                setPass(true)
            }, (error) => {
                console.log(error.text);
                setPass(false);
            });
    }

    return (
        <Section>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>
                            Contact Us
                        </Title>
                        <Input placeholder='Name' name='name' />
                        <Input placeholder='Email' name='email' />
                        <TextArea placeholder='Write your message.' name='message' rows={10} />
                        <Button type='submit'>Send</Button>
                        {pass && <p>"Your message has been sent, I'll get back to you soon."</p>}
                    </Form>
                </Left>
                <Right>
                    <Image src='./img/map.png' />
                </Right>
            </Container>
        </Section>
    )
}

export default Contact
