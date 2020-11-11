import React, { useEffect, useState } from 'react'
import { Container, Cloud, Stars } from '../styles/index.style'
import GlobalStyle from '../styles/global.style'

const Index = () => {
    const [background, setBackground] = useState('')
    const [color, setColor] = useState('')
    const [TagClouds, setTagClouds] = useState(<></>)
    const [TagStars, setTagStars] = useState(<></>)

    const renderClouds = () => {
        const arry = []
        for (let i = 0; i <= 5; i++) {
            const left = '30px'
            const top = `${Math.floor(Math.random() * 100)}%`
            const bottom =`${Math.floor(Math.random() * 100)}%`
            const time = `${Math.floor(Math.random() * 50) + 5}s`
            const rng = Math.floor(Math.random() * 3)
            let movFlux
            
            if(rng === 0) {
                movFlux = "alternate-reverse"
            } else if(rng === 1) {
                movFlux = "reverse"
            } else if (rng === 2) {
                movFlux = "normal"
            }

            arry.push(<Cloud theme={{ top, bottom, left, time, movFlux }}>
                <img src='/cloudcartoon.png' alt='Cloud' />
            </Cloud>)
        }

        setTagClouds(<>{arry.map(tag => tag)}</>)
    }

    const starsInTheSky = () => {
        const arry = []

        for (let i = 0; i <= 99; i++) {
            const top = `${Math.floor(Math.random() * 100)}%`
            const bottom =`${Math.floor(Math.random() * 100)}%` 
            const right =`${Math.floor(Math.random() * 100)}%` 
            const left =`${Math.floor(Math.random() * 100)}%`

            arry.push(<><Stars theme={{top, bottom, left, right}}/></>)
        }

        setTagStars(<>{arry.map(stars => stars)}</>)
    }

    useEffect(() => {
        const date = new Date()
        const time = (date.getHours())
        

        if (time >= 19 || time <= 6) {
            setBackground('#050A1C')
            setColor('#fff')
            starsInTheSky()
        } else if (time > 6 && time < 16) {
            setBackground('linear-gradient(to bottom,#65A2FC , #C2DBE8)')
            setColor('#000')
        } else if (time >= 16 && time <= 18) {
            setBackground('linear-gradient(to bottom, #013ba9, #e1a0be)')
            setColor('#fff')
        }
        renderClouds()
    }, [])

    return (
        <>
            <Container theme={{ main: background, color: color }}>
                <h1>Hello World</h1>
            </Container>
            {TagClouds}
            {TagStars}
            <GlobalStyle />
        </>
    )
}

export default Index
