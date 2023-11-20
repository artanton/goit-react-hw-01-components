import user from '../data/user.json';
import { GlobalStyle } from './GlobalStyle';
import { ProfileCard } from './ProfileCard/ProfileCard';
import data from '../data/data.json';
import { StatList } from './Statistics/StatList/StatList';
import friends from '../data/friends.json';
import { FriendsList } from './Friends/FriendsList/FriendsList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <ProfileCard user={user} />
      <StatList  title="Upload stats" data={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
