// import ToViLogo from '../images/logoToVi.png';
import { ClapSpinner } from "react-spinners-kit";

function AppFooter() {
  return (
    <footer className="App-footer">
      <ClapSpinner size={30} color="#00ff89" loading={true} />
      <div className="text-xs text-grey mt-8">&copy; LEBURC 2023</div>
    </footer>
  );
}

export default AppFooter;
