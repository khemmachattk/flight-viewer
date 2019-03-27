import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

export default class AppSearchForm extends Component {
  state = {
    flightType: "Arrival",
    dateFrom: "",
    dateTo: "",
    carrier: "",
    flightNo: "",
    aircraftType: ""
  };

  _onFlightTypeChange(event) {
    this.setState({ flightType: event.target.id });
  }

  _onDateFromChange(event) {
    this.setState({ dateFrom: event.target.value });
  }

  _onDateToChange(event) {
    this.setState({ dateTo: event.target.value });
  }

  _onCarrierChange(event) {
    this.setState({ carrier: event.target.value });
  }

  _onFlightNoChange(event) {
    this.setState({ flightNo: event.target.value });
  }

  _onAircraftTypeChange(event) {
    this.setState({ aircraftType: event.target.value });
  }

  _onSearch() {
    this.props.onSearch(this.state)
  }

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} xs="12">
            <Form.Label className="mr-3 font-weight-bold">
              Flight Type:
            </Form.Label>
            <Form.Check
              id="Arrival"
              className="font-weight-bold"
              inline
              type="radio"
              label="Arrival"
              name="flightType"
              checked={this.state.flightType === "Arrival"}
              onChange={this._onFlightTypeChange.bind(this)}
            />
            <Form.Check
              id="Departure"
              className="font-weight-bold"
              inline
              type="radio"
              label="Departure"
              name="flightType"
              checked={this.state.flightType === "Departure"}
              onChange={this._onFlightTypeChange.bind(this)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm="6" xs="12">
            <Form.Label className="font-weight-bold">Schedule Date:</Form.Label>
            <Form.Control
              type="datetime-local"
              name="scheduleDateFrom"
              value={this.state.dateFrom}
              onChange={this._onDateFromChange.bind(this)}
            />
          </Form.Group>
          <Form.Group as={Col} sm="6" xs="12">
            <Form.Label className="font-weight-bold">To:</Form.Label>
            <Form.Control
              type="datetime-local"
              name="scheduleDateTo"
              value={this.state.dateTo}
              onChange={this._onDateToChange.bind(this)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs="4">
            <Form.Label className="font-weight-bold">Carrier:</Form.Label>
            <Form.Control
              type="text"
              name="carrier"
              placeholder="Carrier"
              value={this.state.carrier}
              onChange={this._onCarrierChange.bind(this)}
            />
          </Form.Group>
          <Form.Group as={Col} xs="4">
            <Form.Label className="font-weight-bold">Flight No:</Form.Label>
            <Form.Control
              type="text"
              name="flightNo"
              placeholder="Flight No"
              value={this.state.flightNo}
              onChange={this._onFlightNoChange.bind(this)}
            />
          </Form.Group>
          <Form.Group as={Col} xs="4">
            <Form.Label className="font-weight-bold">Aircraft Type:</Form.Label>
            <Form.Control
              type="text"
              name="aircraftType"
              placeholder="Aircraft Type"
              value={this.state.aircraftType}
              onChange={this._onAircraftTypeChange.bind(this)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="justify-content-end">
          <Form.Group as={Col} md="2" xs="12">
            <Button className="btn-block" onClick={this._onSearch.bind(this)}>
              Search
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}
