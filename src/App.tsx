import './App.css';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

function App() {
  return (
    <div className="App" data-testid="app-main">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
