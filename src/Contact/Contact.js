import React, {Component} from 'react';
import {SectionOneContainer, Title, Button} from './../Styled/SectionOneStyles';
import {ContactDiv, SubTitle, Paragraph, ContactContainer} from "./../Styled/ContactStyles";  

import './../Header/Header.css';

class Contact extends Component{
    render(){
        return(
            <ContactDiv>
                <ContactContainer>
                    <Title>I can help.</Title>
                    <SubTitle>I’m currently available for new Project or discussing any interesting ideas</SubTitle>
                    <Paragraph>If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</Paragraph>
                    <Button>Message me</Button>
                </ContactContainer>    
            </ContactDiv>
        );
    }
}

export default Contact;