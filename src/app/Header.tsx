import logoBorder from '../images/leburcLogoBorder.png';
import logoLettering from '../images/leburcLogoLettering.png';

export default function AppHeader() {
  return (
    <header className="App-header pt-5">
      <div className="flex absolute">
        <img src={logoBorder} className="App-leburc-logo-border max-h-[475px]" alt="Loading..." />
      </div>
      <img src={logoLettering} className="App-leburc-logo-lettering max-h-[40px]" alt="Loading..." />
    </header>
  );
}
