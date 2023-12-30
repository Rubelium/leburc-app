import logoBorder from '../images/leburcLogoBorder.avif';
import logoLettering from '../images/leburcLogoLettering.avif';

function AppHeader() {
  return (
    <header className="App-header flex flex-col items-center justify-center pt-[20px] min-h-[50vh] bg-[#0f0f0f]">
      <div className="flex overflow-hidden">
        <img
          src={logoBorder}
          width={500}
          height={500}
          className="App-leburc-logo-border relative max-h-[500px] bg-[#0f0f0f]"
          alt="Loading..."
        />
      </div>
      <img
        src={logoLettering}
        width={200}
        height={35}
        className="z-10 absolute w-[150px] max-h-[25px] xs:max-h-[35px] xs:w-[200px]"
        alt="Loading..."
      />
    </header>
  );
}

export default AppHeader;