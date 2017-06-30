import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

export const BrowserRouterWrapper = InputComponent => () => (
  <BrowserRouter>
    <InputComponent />
  </BrowserRouter>
);

export const MuiThemeProviderWrapper = InputComponent => () => (
  <MuiThemeProvider>
    <InputComponent />
  </MuiThemeProvider>
);

const WrappedComponent = InputComponent =>
  BrowserRouterWrapper(MuiThemeProviderWrapper(InputComponent));

export default WrappedComponent;
