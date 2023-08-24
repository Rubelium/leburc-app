import logoBorder from '../images/leburcLogoBorder.png';
import logoLettering from '../images/leburcLogoLettering.png';

export default function AppHeader() {
  return (
    <header className="App-header">
      <div className="App-leburc-logo-wrapper">
        <img src={logoBorder} className="App-leburc-logo-border" alt="Loading..." />
      </div>
      <img src={logoLettering} className="App-leburc-logo-lettering" alt="Loading..." />
    </header>
  );
}
