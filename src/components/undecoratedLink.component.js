import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UndecoratedLink = styled(Link)`
  text-decoration: none;
  color: #393d3f;
  font-family: 'Muli', sans-serif;
`;

const UndecoratedLinkComponent = ({ path, children }) => {
  return <UndecoratedLink to={path}>{children}</UndecoratedLink>;
};

export default UndecoratedLinkComponent;
