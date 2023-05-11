import logoBorder from './leburcLogoBorder.png';
import logoLettering from './leburcLogoLettering.png';

function AppHeader() {
  return (
    <header className="App-header">
      <div className="App-leburc-logo-wrapper">
        <img src={logoBorder} className="App-leburc-logo-border" alt="Loading..." />
      </div>
      <img src={logoLettering} className="App-leburc-logo-lettering" alt="Loading..." />
    </header>
  );
}

export default AppHeader;
