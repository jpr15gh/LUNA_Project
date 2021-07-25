import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  width: 100px;
  height: 41px;
  color: #FFFFFF;
  background-color: ${(props) => props.theme.orange};
  font-size: ${(props) => props.theme.textSizeM};
  flex-shrink: 0;

  :hover {
    cursor: pointer;
  }
  
  :active {
    transform: translateY(2px);
  }
`
