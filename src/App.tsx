import React from 'react';
import styled from 'styled-components'
import AppHeader from './components/AppHeader';
import SandboxCalculator from './containers/SandboxCalculators';

const App = () => {
  return (
    <Container>
      <AppHeader />
      <SandboxCalculator />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

export default App;
