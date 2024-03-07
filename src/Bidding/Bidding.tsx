import BiddingItems from "./BiddingItems";
import Navbar from "../Navbar/Navbar";
export default function Bidding() {
  return (
    <>
      <Navbar />
      <div className="mainBody">
        <div className="container filterButtons">
          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn ongoing-btn">
                Ongoing
              </button>
              <button type="button" className="btn btn-success">
                Completed
              </button>
            </div>
          </div>
        </div>
        <BiddingItems />
      </div>
    </>
  );
}
