import '../css/app.css';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';
import AppNavbar from './AppNavbar';

export default function App() {
  return (
    <div className="App dark" data-testid="app-main">
      <AppNavbar />
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}
