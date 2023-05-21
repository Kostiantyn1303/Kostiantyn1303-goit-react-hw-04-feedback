import styled from '@emotion/styled';
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #5d845d7c;
  font-size: 14px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover,
  :focus {
    background-color: white;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
