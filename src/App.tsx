import { Routes, Route } from "react-router-dom";
import Bidding from "./Bidding/Bidding";
import Login from "./Login/Login";
import NewItem from "./NewItem/NewItem";
import Deposit from "./Deposit/Deposit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/newItem" element={<NewItem />} />
        <Route path="/deposit" element={<Deposit />} />
      </Routes>
    </>
  );
}

export default App;
