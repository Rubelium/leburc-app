import logoBorder from '../images/leburcLogoBorder.png';
import logoLettering from '../images/leburcLogoLettering.png';

function AppHeader() {
  return (
    <header className="App-header">
      <div className="flex absolute overflow-hidden">
        <img src={logoBorder} className="App-leburc-logo-border max-h-[450px] bg-[#0f0f0f] relative" alt="Loading..." />
      </div>
      <img src={logoLettering} className="max-h-[35px] z-10" alt="Loading..." />
    </header>
  );
}

export default AppHeader;