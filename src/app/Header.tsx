import logoBorder from '../images/leburcLogoBorder.png';
import logoLettering from '../images/leburcLogoLettering.png';

export default function AppHeader() {
  return (
    <header className="App-header pt-5">
      <div className="flex absolute overflow-hidden">
        <img src={logoBorder} className="App-leburc-logo-border max-h-[400px]" alt="Loading..." />
      </div>
      <img src={logoLettering} className="max-h-[40px]" alt="Loading..." />
    </header>
  );
}
