import React, { Component } from "react";
import AppInfoFilterForm from "./views/AppInfoFilterForm";
import FlightInfoCarrier from "./views/FlightInfoCarrier";
import FlightInfoAircraft from "./views/FlightInfoAircraft";
import FlightInfoCarrierAircraft from "./views/FlightInfoCarrierAircraft";
import { FlightService } from "../../services/FlightService";

export default class FlightInformationScreen extends Component {
  state = {
    flightType: "Arrival",
    filterBy: "carrier",
    flights: []
  };

  componentDidMount() {
    this._fetchData();
  }

  _fetchData(flightType = this.state.flightType) {
    FlightService.searchFlight(
      { flightType: flightType },
      flights => {
        this.setState({ flights: flights });
      }
    );
  }

  _onFlightTypeChange(value) {
    this.setState({ flightType: value });
    this._fetchData(value);
  }

  _onFilterByChange(value) {
    this.setState({ filterBy: value });
  }

  render() {
    return (
      <div>
        <AppInfoFilterForm
          flightType={this.state.flightType}
          filterBy={this.state.filterBy}
          onFlightTypeChange={this._onFlightTypeChange.bind(this)}
          onFilterByChange={this._onFilterByChange.bind(this)}
        />
        {this.state.filterBy === "carrier" ? (
          <FlightInfoCarrier flights={this.state.flights} />
        ) : null}
        {this.state.filterBy === "aircraftType" ? (
          <FlightInfoAircraft flights={this.state.flights} />
        ) : null}
        {this.state.filterBy === "carrierAircraftType" ? (
          <FlightInfoCarrierAircraft flights={this.state.flights} />
        ) : null}
      </div>
    );
  }
}
