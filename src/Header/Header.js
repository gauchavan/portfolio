import React, {Component} from 'react';
import {HeaderDiv, Container} from "./../Styled/HeaderStyles";  
import {Span} from './../Styled/SectionOneStyles';
import './../Header/Header.css';

class Header extends Component{

    state={fixed:false};
    headerRef = React.createRef();

    handleScroll = () => {
        window.pageYOffset > window.innerHeight ? this.setState({fixed: true}) : this.setState({fixed: false});
    }
    componentDidMount(){
       window.addEventListener('scroll', this.handleScroll);
    }

    render(){
        return(
            <HeaderDiv ref={this.headerRef} className={this.state.fixed ? 'headerFixed' : 'headerNotFixed'}>
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