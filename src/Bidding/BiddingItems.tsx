import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function BiddingItems() {
  const [bidFormVisibility, setBidFormVisibility] = useState(false);

  const closeBidForm = () => setBidFormVisibility(false);
  const openBidForm = () => setBidFormVisibility(true);

  return (
    <>
      <Modal className="bidForm" show={bidFormVisibility} onHide={closeBidForm}>
        <Modal.Header closeButton>
          <Modal.Title>BMW M4</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="bidFormContainer">
              <div className="mb-3">
                <label htmlFor="amount" className="col-form-label">
                  Bid Price
                </label>
                <input type="number" className="form-control" id="amount" />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <div className="mb-3 row createItembtn">
            <button
              type="submit"
              className="col-sm-2 btn confirm-btn"
              onClick={closeBidForm}
            >
              Submit
            </button>
            <br />
            <button
              type="button"
              className="col-sm-3 btn cancel-btn"
              onClick={closeBidForm}
            >
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      <div className="container text-center">
        <div className="row rowHeader">
          <div className="col">Name</div>
          <div className="col">Current Price</div>
          <div className="col">Duration</div>
          <div className="col">Bid</div>
        </div>
        <hr />
        <div className="row bidItems">
          <div className="col-3">BMW M4</div>
          <div className="col-3">$ 4,500,000</div>
          <div className="col-3">18 HRS 3MINS 5SECS</div>
          <div className="col-3">
            <button type="button" className="btn bidBtn" onClick={openBidForm}>
              Bid now
            </button>
          </div>
        </div>
        <div className="row bidItems">
          <div className="col-3">FORD EVEREST</div>
          <div className="col-3">$ 2,500,000</div>
          <div className="col-3">21 HRS 10MINS 45SECS</div>
          <div className="col-3">
            <button type="button" className="btn bidBtn" onClick={openBidForm}>
              Bid now
            </button>
          </div>
        </div>
        <div className="row bidItems">
          <div className="col-3">NISSAN GTR</div>
          <div className="col-3">$ 3,500,000</div>
          <div className="col-3">9 HRS 9MINS 33SECS</div>
          <div className="col-3">
            <button type="button" className="btn bidBtn" onClick={openBidForm}>
              Bid now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
