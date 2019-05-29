import React from 'react';
import ReactDOM from 'react-dom';
import SectionOne from './SectionOne/SectionOne';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const App = () => {
    return (
        <MainContainer>
            <SectionOne />
        </MainContainer>    
    );
};

ReactDOM.render(<App />, document.getElementById("root"));