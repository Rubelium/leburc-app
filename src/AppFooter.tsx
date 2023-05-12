// import ToViLogo from './logoToVi.png';
import { JellyfishSpinner } from "react-spinners-kit";

function AppFooter() {
  return (
    <footer className="App-footer">
      <JellyfishSpinner size={60} color="#00ff89" loading={true} />
      {/* <a href="https://www.instagram.com/tovi_ent/">
        <img src={ToViLogo} className="App-tovi-logo" alt="Loading..." />
      </a> */}
    </footer>
  );
}

export default AppFooter;
