import logoBorder from '../images/leburcLogoBorder.avif';
import logoLettering from '../images/leburcLogoLettering.avif';

function AppHeader() {
  return (
    <header className="App-header flex flex-col items-center justify-center pt-[20px] min-h-[50vh] bg-[#0f0f0f]">
      <div className="flex overflow-hidden">
        <img
          src={logoBorder}
          width={450}
          height={450}
          className="App-leburc-logo-border relative max-h-[450px] bg-[#0f0f0f]"
          alt="Loading..."
        />
      </div>
      <img
        src={logoLettering}
        width={213}
        height={45}
        className="max-h-[35px] z-10 absolute"
        alt="Loading..."
      />
    </header>
  );
}

export default AppHeader;