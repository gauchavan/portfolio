import React, {Component} from 'react';
import {HeaderDiv, Container} from "./../Styled/HeaderStyles";  
import {Span} from './../Styled/SectionOneStyles';


class Header extends Component{

    render(){
        return(
            <HeaderDiv>
                <Container>
                    <Span headerColor padding>About</Span>
                    <Span headerColor padding>Work</Span>
                    <Span headerColor padding>Contact</Span>
                </Container>
            </HeaderDiv>
        );
    }

}

export default Header;