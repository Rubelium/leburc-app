// import ToViLogo from './logoToVi.png';
import { BarsSpinner, MagicSpinner, SphereSpinner } from "react-spinners-kit";

function AppFooter() {
  return (
    <footer className="App-footer">
      <SphereSpinner size={30} color="#00ff89" loading={true} />
      {/* <a href="https://www.instagram.com/tovi_ent/">
        <img src={ToViLogo} className="App-tovi-logo" alt="Loading..." />
      </a> */}
    </footer>
  );
}

export default AppFooter;
