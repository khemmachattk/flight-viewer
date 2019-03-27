import { isUndefined } from "util";

const dataFlights = require("../datasources/flights.json").flights;

export const FlightService = {
  searchFlight
};

function searchFlight(searchOptions, completion) {
  console.log(searchOptions);
  let results = dataFlights.filter(value => {
    return value.flight_type === searchOptions.flightType;
  });

  if (
    !isUndefined(searchOptions.dateFrom) &&
    searchOptions.dateFrom !== "" &&
    !isUndefined(searchOptions.dateTo) &&
    searchOptions.dateTo !== ""
  ) {
    const dateFrom = new Date(searchOptions.dateFrom);
    const dateTo = new Date(searchOptions.dateTo);
    results = results.filter(value => {
      const flightDate = new Date(value.schedule_date);
      return flightDate >= dateFrom && flightDate <= dateTo;
    });
  }

  if (!isUndefined(searchOptions.carrier) && searchOptions.carrier !== "") {
    results = results.filter(value => {
      if (value.carrier == null) return false;
      return (
        value.carrier.toUpperCase() === searchOptions.carrier.toUpperCase()
      );
    });
  }

  if (!isUndefined(searchOptions.flightNo) && searchOptions.flightNo !== "") {
    results = results.filter(value => {
      if (value.flight_no == null) return false;
      return (
        value.flight_no.toUpperCase() === searchOptions.flightNo.toUpperCase()
      );
    });
  }

  if (
    !isUndefined(searchOptions.aircraftType) &&
    searchOptions.aircraftType !== ""
  ) {
    results = results.filter(value => {
      if (value.aircraft_type == null) return false;
      return (
        value.aircraft_type.toUpperCase() ===
        searchOptions.aircraftType.toUpperCase()
      );
    });
  }

  console.log(results);
  completion(results);
}
