import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Components
import HomeProductSection from './HomeProductSection'

function HomeProducts() {
    return (
        <div>
            <Wrap>
                <h2>New Arrivals</h2>
                <Container>
                    <HomeProductSection
                        title={'New glasses'}
                        price={'$ 99.00'}
                        picture={'newarr_01.jpg'}
                        alt={'glasses 2'}
                        showTotal={false}
                    />
                    <HomeProductSection
                        title={'Sunglass'}
                        price={'$ 174.00'}
                        picture={'newarr_02b.jpg'}
                        alt={'glasses 2'}
                        showTotal={true}
                    />
                    <HomeProductSection
                        title={'Sunglass 2'}
                        price={'$ 119.00'}
                        picture={'newarr_03.jpg'}
                        alt={'glasses 3'}
                        showTotal={false}
                    />
                </Container>
                <Link id="Nav.Link" to={'/cart'}>
                    <ButtonNew>Shop Now</ButtonNew>
                </Link>
            </Wrap>
        </div>
    )
}

export default HomeProducts

const Wrap = styled.div`
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3eaea;
    padding-bottom: 10vh;
    color: black;

    h2 {
        font-size: 3rem;
        margin: 20px 0;
        font-weight: 600;
        font-family: sans-serif;
        letter-spacing: 2px;
        font-weight: 400;
        text-transform: uppercase;
        color: black;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 25px 10px;
`
const ButtonNew = styled.div`
    background-color: #bd5d82;
    align-items: center;
    color: white;
    font-weight: 600;
    text-align: center;
    padding: 10px 60px;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    margin: 5vh 0;

    :hover {
        background-color: #af5376;
    }
`
