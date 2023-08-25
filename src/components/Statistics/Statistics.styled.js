import { styled } from 'styled-components';

export const List = styled.ul`
  text-align: start;
  margin-left: ${props => props.theme.spacing(24)}; //120px
`;

export const Item = styled.li`
  margin-bottom: ${props => props.theme.spacing(2)}; //10px
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.spacing(4)}; //20px
  font-weight: ${props => props.theme.fontWeights.medium}; //500
`;
