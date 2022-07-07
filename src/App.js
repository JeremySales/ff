import './App.css';
import Header from './components/header';
import WatchList from './components/watchlist';
import WatchedList from './components/watchedlist';
import UserInputs from './components/inputs';

function App() {

  return (
    <div className="App">
      <Header />
      <WatchList />
      <UserInputs />
      <WatchedList />
    </div>
  );
}

export default App;
