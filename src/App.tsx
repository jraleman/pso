import React from 'react';
import styled from 'styled-components'
import AppHeader from './components/AppHeader';
import AsciiGallery from './containers/AsciiGallery';
import SandboxCalculator from './containers/SandboxCalculators';

const App = () => {
  return (
    <Container>
      <AppHeader />
      <SandboxCalculator />
      <AsciiGallery />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

export default App;
