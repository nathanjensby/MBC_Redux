import React from 'react';
import { Route, Link } from 'react-router-dom';
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
  background-color: ${Colors.teal.hex};
`;

const Title = styled.header`
  text-align: center;

  h1 {
    padding: 50px;
    margin: 0;
  }
`;
