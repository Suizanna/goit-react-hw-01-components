import Profile from "./components/Profile/Profile";

import Statistics from "./components/Statistics/Statistics";

import Container from './components/Container/Container';

import FriendList from './components/FriendList/FriendList';

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from './data/friends.json';
import transactions from "./data/transactions.json";


//в App компонент рендерится и данные импортируем с user.json сюда
//передаем данные которые рендерить нужно
//главный компонент. один файл, один компонент. пропсы

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />
    </Container>
  );
}


//это модуль и из него нужно экспорт компонент
export default App;



