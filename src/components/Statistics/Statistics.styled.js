import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
`;

export const Title = styled.h2`
  font-size: 37px;
`;

export const ButtonList = styled.ul`
  gap: 10px;
  display: flex;
  list-style: none;
`;

export const Button = styled.button`
  background-color: #fff;
  font-size: 22px;
  font-weight: 700;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #d8d8d8;

  cursor: pointer;
  :hover {
    color: #fff;
    background-color: darkblue;
  }
`;

export const TextList = styled.ul`
  list-style: none;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
