import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function About() {
    const { userName } = useParams()

    return (
        <div>
            <Wrap>
                <AboutImg>
                    <PageTitle>
                        <h2>My page</h2>
                    </PageTitle>
                </AboutImg>
                <Container>
                    <h2>Hello {userName}!</h2>
                    <p>Please login or register to see your page.</p>
                </Container>
            </Wrap>
        </div>
    )
}

export default About

const Wrap = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3eaea;
`

const AboutImg = styled.div`
    background-image: linear-gradient(
            rgba(255, 231, 231, 0.2),
            rgba(255, 231, 231, 0.4)
        ),
        url('images/img_01.jpg');
    width: 100%;
    height: 40vh;
    display: flex;
    background-position: center;
    background-size: cover;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
        height: 30vh;
        justify-content: center;
    }
`
const PageTitle = styled.div`
    margin-bottom: 5vh;
    text-align: center;

    h2 {
        font-family: sans-serif;
        letter-spacing: 2px;
        font-size: 10vw;
        font-weight: 800;
        text-transform: uppercase;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 3px;
        color: black;
    }

    @media only screen and (max-width: 768px) {
        h2 {
            font-size: 15vw;
            font-weight: 800;
            -webkit-text-stroke-width: 2px;
        }
    }
`
const Container = styled.div`
    padding-top: 5vh;

    h2 {
        font-weight: 600;
    }
`
