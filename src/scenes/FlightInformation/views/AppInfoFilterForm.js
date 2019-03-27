import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

export default class AppInfoFilterForm extends Component {
  _changeFlightTypeHandler(event) {
    this.props.onFlightTypeChange(event.target.id)
  }

  _changeFilterHandler(event) {
    this.props.onFilterByChange(event.target.id)
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
              onChange={this._changeFlightTypeHandler.bind(this)}
              checked={this.props.flightType === 'Arrival'}
            />
            <Form.Check
              id="Departure"
              className="font-weight-bold"
              inline
              type="radio"
              label="Departure"
              name="flightType"
              onChange={this._changeFlightTypeHandler.bind(this)}
              checked={this.props.flightType === 'Departure'}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} xs="12">
            <Form.Label className="mr-3 font-weight-bold">
              Filter by:
            </Form.Label>
            <Form.Check
              id="carrier"
              className="font-weight-bold"
              inline
              type="radio"
              label="Carrier"
              name="filterType"
              onChange={this._changeFilterHandler.bind(this)}
              checked={this.props.filterBy === 'carrier'}
            />
            <Form.Check
              id="aircraftType"
              className="font-weight-bold"
              inline
              type="radio"
              label="Aircraft Type"
              name="filterType"
              onChange={this._changeFilterHandler.bind(this)}
              checked={this.props.filterBy === 'aircraftType'}
            />
            <Form.Check
              id="carrierAircraftType"
              className="font-weight-bold"
              inline
              type="radio"
              label="Carrier and Aircraft Type"
              name="filterType"
              onChange={this._changeFilterHandler.bind(this)}
              checked={this.props.filterBy === 'carrierAircraftType'}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}
