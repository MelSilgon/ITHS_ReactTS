import React from 'react'
import styled from 'styled-components'

import { useContext } from 'react'
import SomeContext from '../SomeContext'

type ProductProps = {
    title: string
    price: string
    alt: string
    picture: string
    showTotal: boolean
}

function HomeProductSection(props: ProductProps) {
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
        <Wrap>
            <img src={'images/' + props.picture} alt={props.alt}></img>
            <Description>
                <h3>{props.title}</h3>
                <p>{props.price}</p>
                {props.showTotal === true && (
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
                )}
            </Description>
        </Wrap>
    )
}

export default HomeProductSection

const Wrap = styled.div`
    height: 280px;
    width: auto;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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
        background-color: #ffffff;
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
