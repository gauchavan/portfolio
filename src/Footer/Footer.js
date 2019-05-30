import React  from "react";
import {FooterDiv, FooterText, LinkDiv} from './../Styled/FooterStyles';
import {Span} from './../Styled/SectionOneStyles';


const Footer = () => {
    return (
        <FooterDiv>
            <LinkDiv>
                <Span padding>GitHub</Span>
                <Span padding>LinkedIn</Span>
                <Span padding>Contact Me</Span>
            </LinkDiv>
            <FooterText>
                &#169; Gauri Chavan {new Date().getFullYear()}. All rights reserved.
            </FooterText>
        </FooterDiv>
    );
}

export default Footer;