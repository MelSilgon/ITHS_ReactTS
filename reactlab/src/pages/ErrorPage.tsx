import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <Wrap>
                <Container>
                    <h2>Oops!</h2>
                    <p>This page doesn't exist.</p>

                    <Link id="link" to={'/'}>
                        <Button>Go to startpage</Button>
                    </Link>
                </Container>
            </Wrap>
        </div>
    )
}

export default ErrorPage

const Wrap = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3eaea;
`

const Container = styled.div`
    padding-top: 25vh;

    h2 {
        font-weight: 600;
        text-transform: uppercase;
    }

    #link {
        text-decoration: none;
    }
`
const Button = styled.div`
    background-color: rgb(44, 44, 44);
    align-items: center;
    color: white;
    text-align: center;
    padding: 10px 60px;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    margin: 40px 0;

    :hover {
        background-color: rgb(0, 0, 0);
    }
`
