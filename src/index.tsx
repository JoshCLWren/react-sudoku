import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Content, Title } from './components';
import { GlobalStyles, theme } from './styles';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content data-cy="content">
        <Title datay-cy="title">Sudoku</Title>
        <div>hello world</div>
      </Content>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
