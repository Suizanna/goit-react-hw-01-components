import Profile from "./components/Profile/Profile";
import user from './components/Profile/user.json';
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";



//главный компонент. один файл, один компонент. пропсы
const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />;
    <Statistics stats={statisticalData} />;
  </>
);

//это модуль и из него нужно экспорт компонент
//и всегда это экспорт по умолчанию
export default App;



