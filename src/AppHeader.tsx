import logoBorder from './LeburcLogoBorder.png';
import logoLettering from './LeburcLogoLettering.png';

function AppHeader() {
  return (
    <header className="App-header">
      <div className="App-logo-wrapper">
        <img src={logoBorder} className="App-logo-border" alt="logo" />
      </div>
      <img src={logoLettering} className="App-logo-lettering" alt="logo" />
    </header>
  );
}

export default AppHeader;
