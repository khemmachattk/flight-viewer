import { isUndefined } from "util";
import moment from 'moment';

const dataFlights = require("../datasources/flights.json").flights;

export const FlightService = {
  searchFlight
};

function searchFlight(searchOptions, completion) {
  let results = dataFlights.filter(value => {
    return value.flight_type === searchOptions.flightType;
  });

  if (
    !isUndefined(searchOptions.dateFrom) &&
    searchOptions.dateFrom !== "" &&
    !isUndefined(searchOptions.dateTo) &&
    searchOptions.dateTo !== ""
  ) {
    const dateFrom = moment(searchOptions.dateFrom, 'YYYY-MM-DD HH:mm');
    const dateTo = moment(searchOptions.dateTo, 'YYYY-MM-DD HH:mm');
    results = results.filter(value => {
      const flightDate = moment(value.schedule_date, 'YYYY-MM-DD HH:mm');
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

  completion(results);
}
