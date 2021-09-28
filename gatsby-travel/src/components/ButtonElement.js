import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#ff4040' : '#0467fb')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'ubuntu', sans-serif;

  :hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? '#0467fb' : '#ff40404')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
