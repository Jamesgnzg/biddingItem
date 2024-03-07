import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Deposit() {
  const navigate = useNavigate();

  const cancel = () => {
    navigate("/bidding");
  };

  return (
    <>
      <Navbar />
      <form>
        <div className="depositContainer">
          <h3 className="formNameLabel depositFormLabel">
            <b>Deposit</b>
          </h3>
          <div className="mb-3">
            <label htmlFor="amount" className="col-form-label">
              Amount
            </label>
            <input type="number" className="form-control" id="amount" />
          </div>
          <div className="mb-3 row createItembtn">
            <button type="submit" className="col-sm-2 btn confirm-btn">
              Deposit
            </button>
            <br />
            <button
              type="button"
              className="col-sm-3 btn cancel-btn"
              onClick={cancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
