import { useEffect, useState } from "react";
import "./App.css";
import BodyContainer from "./Components/BodyContainer/BodyContainer";
import NavBar from "./NavBar";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <>
      <NavBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <BodyContainer selectedMenu={selectedMenu} />
    </>
  );
}

export default App;
