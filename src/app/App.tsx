import '../css/app.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Navbar from './Navbar';

export default function App() {
  return (
    <div className="App dark" data-testid="app-main">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
