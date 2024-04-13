import logoLettering from '../images/leburcLogoLettering.png';

function AppHeader() {
  return (
    <header className="App-header flex flex-col items-center justify-center p-[20px] bg-[#0f0f0f] pt-[100px]">
      <img
        src={logoLettering}
        width={500}
        height={75}
        alt="Loading..."
      />
    </header>
  );
}

export default AppHeader;