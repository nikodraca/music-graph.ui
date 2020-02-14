import React from 'react';
import styled from 'styled-components';

import CenterContainer from './centerContainer.component';
import UndecoratedLink from './undecoratedLink.component';

const LoadingText = styled.h2`
  font-family: 'Muli', sans-serif;
`;

const ErrorMessage = ({ errorMessage }) => {
  return (
    <CenterContainer>
      <LoadingText>{errorMessage}</LoadingText>
      <UndecoratedLink path={`/`}>Home</UndecoratedLink>
    </CenterContainer>
  );
};

export default ErrorMessage;
