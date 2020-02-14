import React from 'react';
import styled from 'styled-components';

const FlatButton = styled.button`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Roboto Mono', monospace;
  font-size: 1em;
  border: none;

  @media (max-width: 641px) {
    width: 100%;
    height: 50px;
    justify-content: flex-start;
    padding-left: 10%;
  }
`;

const FlatButtonComponent = ({ children, type, onClickAction }) => {
  const backgroundColor = {
    spotify: '#77ba99',
    default: '#1db954',
    danger: '#ec534c'
  };

  return (
    <FlatButton
      style={{ backgroundColor: backgroundColor[type] || backgroundColor.default }}
      onClick={() => {
        onClickAction && onClickAction();
      }}
    >
      {children}
    </FlatButton>
  );
};

export default FlatButtonComponent;
