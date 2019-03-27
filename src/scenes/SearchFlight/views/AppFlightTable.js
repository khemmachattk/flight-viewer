import React, { Component } from "react";
import {} from "react-bootstrap";

export default class AppFlightTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-sm table-hover table-cursor table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Schedule Date and Time</th>
              <th scope="col">Carrier</th>
              <th scope="col">Flight No</th>
              <th scope="col">Aircraft Type</th>
              <th scope="col">Gate</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            {this.props.flights.map((value, index) => {
              return (
                <tr
                  key={`${index}`}
                  onClick={() => {
                    this.props.onClickRow(value);
                  }}
                >
                  <td>{value.schedule_date}</td>
                  <td>{value.carrier || '-'}</td>
                  <td>{value.flight_no || '-'}</td>
                  <td>{value.aircraft_type || '-'}</td>
                  <td>{value.gate || '-'}</td>
                  <td>{value.pos || '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
