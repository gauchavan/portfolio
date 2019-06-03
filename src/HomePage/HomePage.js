import React, {Component} from 'react';
import SectionOne from './../SectionOne/SectionOne';
import styled from 'styled-components';
import Footer from './../Footer/Footer';
import Header from './../Header/Header'
import Contact from './../Contact/Contact';
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
class HomePage extends Component {


    render(){
        return (
            <MainContainer>
                <SectionOne />
                <Header />
                <Contact />
                <Footer/>
            </MainContainer>
        );
    } 
};

export default HomePage;

