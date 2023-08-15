import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//bootstrap
import Carousel from 'react-bootstrap/Carousel'

type Data = {
    id: number
    slideLabel: string
    slideText: string
    slideImg: string
}

function HomeSlider() {
    const [data, setData] = useState<Data[]>([])

    //fetch
    useEffect(() => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    return (
        <div>
            <Wrap>
                <Carousel fade>
                    {data.map((item) => (
                        <Carousel.Item key={item.id}>
                            <CarouselImg
                                className="d-block"
                                style={{
                                    backgroundImage: `url('/images/${item.slideImg}')`
                                }}
                            ></CarouselImg>
                            <Carousel.Caption>
                                <CaptionContainer>
                                    <CaptionWrap>
                                        <h3>{item.slideLabel}</h3>
                                        <p>{item.slideText}</p>
                                    </CaptionWrap>
                                </CaptionContainer>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Wrap>
        </div>
    )
}

export default HomeSlider

const Wrap = styled.div`
    height: 550px;
    max-height: 550px;
    min-height: 550px;
    width: 100%;
    @media only screen and (max-width: 768px) {
        max-height: 400px;
        min-height: 400px;
    }
`
const CarouselImg = styled.div`
    width: 100vw;
    max-height: 550px;
    min-height: 550px;
    background-position: center;
    background-size: cover;

    @media only screen and (max-width: 768px) {
        max-height: 400px;
        min-height: 400px;
    }
`
const CaptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CaptionWrap = styled.div`
    width: 35vw;
    padding: 20px;
    margin-bottom: 5vh;
    border-radius: 10px;
    backdrop-filter: blur(4px);
    background-color: rgba(244, 244, 244, 0.4);

    h3,
    p {
        color: black;
    }

    h3 {
        text-transform: uppercase;
    }

    @media only screen and (max-width: 768px) {
        width: 60vw;
    }
`
