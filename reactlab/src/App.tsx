import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import './App.css'
import SomeContext from './SomeContext'

//Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'

function App() {
    const [someValue, setSomeValue] = useState(0)

    return (
        <div className="App">
            <Wrap>
                <SomeContext.Provider value={{ someValue, setSomeValue }}>
                    <NavBar />
                    <Container>
                        <Main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/about/:userName"
                                    element={<About />}
                                />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="*" element={<ErrorPage />} />
                            </Routes>
                        </Main>
                    </Container>
                    <Footer />
                </SomeContext.Provider>
            </Wrap>
        </div>
    )
}

export default App

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
`
const Container = styled.div`
    flex: 1;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
