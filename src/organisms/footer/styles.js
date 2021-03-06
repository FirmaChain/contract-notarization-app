import styled from "styled-components";

export const Box = styled.div`
    ${props => props.isDesktop?`
        padding: 0 196px;
    `:`
        padding: 0 20px;
        > div,a {
            font-size: 11px;
        }
    `}
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-color: #272731;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Text = styled.div`
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #7c7c8e;
`

export const Contact = styled.a`
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    text-decoration: none;
    color: #7c7c8e;
`