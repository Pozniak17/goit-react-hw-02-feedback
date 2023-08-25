import { styled } from 'styled-components';

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.l}; //32px

  margin-top: ${props => props.theme.spacing(8)}; //40px
  margin-bottom: ${props => props.theme.spacing(8)}; //40px
`;
