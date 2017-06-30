import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const BrowserRouterWrapper = InputComponent => () => (
  <BrowserRouter><InputComponent /></BrowserRouter>
);

export default BrowserRouterWrapper;
