import styled from 'styled-components';
import * as COLOR from './../Constants/COLOR';

export const SectionOneContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${COLOR.WHITE};
width: 100vw;
overflow: hidden;
position: relative;
height: calc(100vh + 5px);
align-items: center;
justify-content: center;
`

export const Title = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 5px;
    font-size:50px;
    text-align:center;
    color:${COLOR.BLACK};
    font-family: 'Fira_Sans_SemiBold';
`

export const Span = styled.span`
    color: ${COLOR.ORCHID};
    display:flex;
    flex-direction: row;
    padding: ${props => props.padding ? "0px 25px" : "0px 10px"};
`

export const Button = styled.button`
    padding: 12px;
    font-size: 20px;
    font-family: 'Fira_Sans_Regular';
    background: ${COLOR.WHITE};
    border:2px solid ${COLOR.ORCHID};
    color:${COLOR.ORCHID};
    margin: 10px;
    cursor: pointer; 
    &:hover{
        background: ${COLOR.ORCHID};
        border:2px solid ${COLOR.ORCHID};
        color: ${COLOR.WHITE};
    }
`
