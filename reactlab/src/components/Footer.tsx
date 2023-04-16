import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <div>
            <Wrap>
                <FooterContainer>
                    <p>Glass & lens © 2023</p>
                </FooterContainer>
            </Wrap>
        </div>
    )
}

export default Footer

const Wrap = styled.div`
    height: 80px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2c2c2c;
    color: #fdf6e9;
`
const FooterContainer = styled.div`
    p {
        color: #fdf6e9;
        margin: 0;
    }
`
