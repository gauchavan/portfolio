import styled from 'styled-components';
import * as COLOR from './../Constants/COLOR';

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${COLOR.LAVANDER};
    padding: 20px 20px;
    border-bottom: 2px solid ${COLOR.ORCHID};
    font-family: 'Fira_Sans_Regular';
    font-size: 20px;
`

export const Container = styled.div`
    margin: 0px 14%;
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: flex-end;
    align-items:center;
`