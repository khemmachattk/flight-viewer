import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import AppHeader from "./views/AppHeader";
import { Route, Switch } from "react-router-dom";
import SearchFlightScreen from "./scenes/SearchFlight/SearchFlightScreen";
import FlightInformationScreen from "./scenes/FlightInformation/FlightInformationScreen";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Container className="mt-3">
          <Switch>
            <Route
              exact
              path="/search"
              component={() => <SearchFlightScreen />}
            />
            <Route
              path="/information"
              component={() => <FlightInformationScreen />}
            />
            <Route component={() => <SearchFlightScreen />} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
