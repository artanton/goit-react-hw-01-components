import styled from 'styled-components';

export const TransactionCell = styled.td`
  font-size: 16px;
  padding: 8px 20px;

  border: 1px solid ${p => p.theme.colors.borderGray};
`;

const getRowColor = props => ({
  color:
    props.index % 2 === 0
      ? props.theme.colors.lightGray
      : props.theme.colors.darkGray,
});

export const TransactionRow = styled.tr.attrs(getRowColor)`
  background-color: ${props => props.color};
`;
