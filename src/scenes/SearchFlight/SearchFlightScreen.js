import React, { Component } from "react";
import AppSearchForm from "./views/AppSearchForm";
import AppFlightTable from "./views/AppFlightTable";
import FlightDetailPopup from "./views/FlightDetailPopup";
import { FlightService } from "../../services/FlightService";

export default class SearchFlightScreen extends Component {
  state = {
    flight: null,
    flights: []
  };

  _onClickRow(value) {
    this.setState({ flight: value });
  }

  _onCloseDialog() {
    this.setState({ flight: null });
  }

  _onSearch(searchOptions) {
    FlightService.searchFlight(searchOptions, (flights) => {
      this.setState({ flights: flights })
    })
  }

  render() {
    return (
      <div>
        <AppSearchForm onSearch={this._onSearch.bind(this)} />
        <AppFlightTable
          flights={this.state.flights}
          onClickRow={this._onClickRow.bind(this)}
        />
        <FlightDetailPopup
          flight={this.state.flight}
          open={this.state.flight != null}
          onClose={this._onCloseDialog.bind(this)}
        />
      </div>
    );
  }
}
