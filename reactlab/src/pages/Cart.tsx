import React from 'react'
import styled from 'styled-components'

import { useContext } from 'react'
import SomeContext from '../SomeContext'

function Cart() {
    const { someValue, setSomeValue } = useContext(SomeContext)

    function increase() {
        //max 4
        if (someValue < 4) {
            setSomeValue(someValue + 1)
        }
    }

    //min 0
    function decrease() {
        if (someValue > 0) {
            setSomeValue(someValue - 1)
        }
    }
    return (
        <div>
            <Wrap>
                <CartWrap>
                    <h2>YOUR CART</h2>
                    <CartItem>
                        <img src="images/newarr_02b.jpg" alt="glasses"></img>
                        <Description>
                            <h3>Sunglass</h3>
                            <p>$ 174.00</p>
                            <TotalItem>
                                <p>
                                    Quantity: <span>{someValue}</span>
                                </p>
                                <input
                                    id="buttonDecr"
                                    onClick={decrease}
                                    disabled={someValue === 0 ? true : false}
                                    type="button"
                                    value="-"
                                />
                                <input
                                    id="buttonIncr"
                                    onClick={increase}
                                    disabled={someValue === 4 ? true : false}
                                    type="button"
                                    value="+"
                                />
                            </TotalItem>
                        </Description>
                    </CartItem>
                </CartWrap>
            </Wrap>
        </div>
    )
}

export default Cart

const Wrap = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f3eaea;
`
const CartWrap = styled.div`
    background-color: white;
    border-radius: 5px;
    width: auto;
    height: auto;
    margin: 0 20vw;
    padding: 8vh 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;

    h2 {
        margin-bottom: 50px;
        font-family: sans-serif;
        font-size: 1.8rem;
    }

    @media only screen and (max-width: 768px) {
        margin: 0 5vw;
    }
`

const CartItem = styled.div``

const TotalItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        padding-right: 10px;
    }

    span {
        font-weight: 600;
    }

    #buttonIncr,
    #buttonDecr {
        background-color: #f5e8f0;
        display: flex;
        align-items: center;
        color: #000000;
        border: 1px solid black;
        text-align: center;
        padding: 0 10px;
        border-radius: 4px;
        font-size: 1.4rem;
        font-weight: 600;
        cursor: pointer;
        margin-left: 5px;

        :disabled {
            background-color: #a5a5a5;
            color: #5a5a5a;
        }
    }
`
const Description = styled.div`
    h3 {
        font-size: 1.6rem;
        margin-top: 20px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: sans-serif;
    }

    p {
        font-size: 0.9rem;
        text-transform: uppercase;
        font-family: sans-serif;
    }
`
