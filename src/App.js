import React from 'react';
import { Route } from 'react-router-dom';
import Colors from './util/colors';
import styled from 'styled-components';
import MainContentWrapper from './components/mainContentWrapper.js';

const App = () => (
  <AppWrapper>
    {/* <header>
      <Link to="/">Home</Link>
    </header> */}
    <Title>
      <h1>My Bar Cart</h1>
    </Title>
    <main>
      <Route exact path="/" component={MainContentWrapper} />
    </main>
  </AppWrapper>
);

export default App;

const AppWrapper = styled.div`
  background-color: ${Colors.surf.hex};
  color: ${Colors.pickledBluewood.hex};
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.header`
  box-shadow: -3px 3px 6px white;
  position: relative;
  text-align: center;

  h1 {
    font-family: 'Sacramento', cursive;
    text-shadow: -3px 3px 6px white;
    font-size: 72px;
    padding: 50px;
    margin: 0;
  }
`;
