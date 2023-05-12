// import ToViLogo from '../images/logoToVi.png';
import { ClapSpinner } from "react-spinners-kit";
import { Text } from "@nextui-org/react";

function AppFooter() {
  return (
    <footer className="App-footer">
      <ClapSpinner size={30} color="#00ff89" loading={true} />
      {/* <a href="https://www.instagram.com/tovi_ent/">
        <img src={ToViLogo} className="App-tovi-logo" alt="Loading..." />
      </a> */}
      <Text
        h6
        size={12.5}
        weight="normal"
        css={{
          color: "#d4d4d4",
          marginTop: "30px"
        }}
      >
        &copy; LEBURC 2023
      </Text>
    </footer>
  );
}

export default AppFooter;
