import '../css/app.css';
import Header from './AppHeader';
import Body from './AppBody';
import Footer from './AppFooter';
import Navbar from './AppNavigationBar';
import Particles from './AppParticles';

function App() {
  return (
    <div className="App dark" data-testid="app-main">
      <Particles />
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;