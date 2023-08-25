import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  text-transform: capitalize;
  padding: 10px 20px 10px 20px;
  border-radius: 8px;
  border: 1px solid #d8d8d8;

  font-weight: 700;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: navy;
    color: white;
  }
`;
