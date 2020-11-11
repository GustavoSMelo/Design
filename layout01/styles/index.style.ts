import styled, { keyframes } from 'styled-components'

const CloudAnimation = keyframes `
    0%{
        left: -30%;
    }

    100% {
        left: 100%;
    }

`

export const Container = styled.main`
    background: ${props => props.theme.main};
    color: ${props => props.theme.color};
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48pt;
    }

    img {
        z-index: 3;
    }
`

export const Cloud = styled.span`
    position: absolute;
    top: ${props => props.theme.top};
    left: ${props => props.theme.left};
    bottom: ${props => props.theme.bottom};
    width: 300px;
    height: 300px;
    z-index: 5;
    animation: ${CloudAnimation} ${props => props.theme.time} infinite ${props => props.theme.movFlux};

    img {
        width: 100%;
        height: 100%;
    }
`

export const Stars = styled.span`
    position: absolute;
    background-color: #ff0;
    border-radius: 120px;
    width: 5px;
    height: 5px;
    left: ${props => props.theme.left};
    right: ${props => props.theme.right};
    bottom: ${props => props.theme.bottom};
    top: ${props => props.theme.top};
`
