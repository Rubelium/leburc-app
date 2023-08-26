import '../css/app.css';
import Header from './AppHeader';
import Body from './AppBody';
import Footer from './AppFooter';
import Navbar from './AppNavigationBar';

function App() {
  return (
    <div className="App dark" data-testid="app-main">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;