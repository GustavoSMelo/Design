import styled from 'styled-components'

export const Header = styled.header<{ textcolor: string}>`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    justify-content: space-between;
    color: ${props => props.textcolor};
    background-color: transparent;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100vw;
    padding: 30px;

    nav {
        display: flex;
    }

    nav > h1 {
        margin: 15px;
        cursor: pointer;
    }

    article > span {
        margin: 10px;
        cursor: pointer;
    }
`
