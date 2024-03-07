import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function NewItem() {
  const navigate = useNavigate();

  const cancel = () => {
    navigate("/bidding");
  };

  return (
    <>
      <Navbar />
      <form>
        <div className="createItemContainer">
          <h3 className="formNameLabel">
            <b>Create Item</b>
          </h3>
          <div className="mb-3 row">
            <label htmlFor="itemName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="itemName" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="startPrice" className="col-sm-2 form-label">
              Start Price
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="startPrice" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="timeWindow" className="col-sm-2 form-label">
              Time Window
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="timeWindow" />
            </div>
          </div>
          <div className="mb-3 row createItembtn">
            <button type="submit" className="col-sm-2 btn confirm-btn">
              Create
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
