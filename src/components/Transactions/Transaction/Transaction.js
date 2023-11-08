import { TransactionCell, TransactionRow } from './TransactionStyled';

export const Transaction = ({
  transaction: { type, amount, currency },
  index,
}) => {
  return (
    <TransactionRow index={index}>
      <TransactionCell>{type}</TransactionCell>
      <TransactionCell>{amount}</TransactionCell>
      <TransactionCell>{currency}</TransactionCell>
    </TransactionRow>
  );
};
