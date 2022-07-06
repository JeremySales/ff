import './App.css';
import Header from './components/header';
import WatchList from './components/watchlist';
import WatchedList from './components/watchedlist';

function App() {

  return (
    <div className="App">
      <Header />
      <WatchList />
      <WatchedList />
    </div>
  );
}

export default App;
