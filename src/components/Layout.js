import { styled } from 'styled-components';

export const Layout = styled.div`
  margin: ${props => props.theme.spacing(24)} auto;
  width: ${props => props.theme.sizes[2]}px; //400
  padding: 0 15px;
  text-align: center;
`;
