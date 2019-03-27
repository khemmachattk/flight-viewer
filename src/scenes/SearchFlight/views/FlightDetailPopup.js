import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-responsive-modal";

export default class FlightDetailPopup extends Component {
  render() {
    if (this.props.flight == null) {
      return null;
    }
    return (
      <div>
        <Modal
          open={this.props.open}
          showCloseIcon={false}
          onClose={this.props.onClose}
          center
        >
          <div className="table-responsive">
            <table className="table table-sm">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Registration</th>
                  <th scope="col">Belt</th>
                  <th scope="col">Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.flight.reg || "-"}</td>
                  <td>{this.props.flight.belt || "-"}</td>
                  <td>{this.props.flight.remark || "-"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button className="btn-block" onClick={this.props.onClose}>
            OK
          </Button>
        </Modal>
      </div>
    );
  }
}
