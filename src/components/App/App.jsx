import user from 'assets/user.json';
import data from 'assets/data.json';
import friends from 'assets/friends.json';
import transactions from 'assets/transactions.json';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import { getRandomHexColor } from 'helpers/colorGeneration.js';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../Transactions/Transactions';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={getRandomHexColor(data)} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
