import React from 'react';
import styled from 'styled-components';

const CenterDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const CenterContainer = ({ children }) => {
  return <CenterDiv>{children}</CenterDiv>;
};

export default CenterContainer;
