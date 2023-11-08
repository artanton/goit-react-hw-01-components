import { Transaction } from '../Transaction/Transaction';
import { THead, Table } from './TransactionHistoryStyled';

export const TransactionHistory = ({ items }) => {
  return (
    <section>
      <Table>
        <thead>
          <tr>
            <THead>Type</THead>
            <THead>Amount</THead>
            <THead>Currency</THead>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <Transaction key={item.id} transaction={item} index={index} />
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};
