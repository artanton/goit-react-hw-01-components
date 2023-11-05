import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  font-size: 20px;
  width: 100%;

  padding: 20px;

  border: 1px solid ${p => p.theme.colors.borderGray};
  margin: 20px 0;

  background-color: ${p => p.theme.colors.darkGray};

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const THead = styled.th`
  padding: 20px;

  border: 1px solid ${p => p.theme.colors.borderGray};

  background-color: teal;
`;
