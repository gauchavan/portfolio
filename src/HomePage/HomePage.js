import React from 'react';
import SectionOne from './../SectionOne/SectionOne';
import styled from 'styled-components';
import Footer from './../Footer/Footer';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const HomePage = () => {
    return (
        <MainContainer>
            <SectionOne />
            <Footer/>
        </MainContainer>
    );
};

export default HomePage;

