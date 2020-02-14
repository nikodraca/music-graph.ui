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
`;

const LoadingText = styled.h2`
  font-family: 'Muli', sans-serif;
`;

const Loader = () => {
  return (
    <CenterDiv>
      <LoadingText>Loading...</LoadingText>
    </CenterDiv>
  );
};

export default Loader;
