import React, { Component } from "react";
import moment from 'moment';

export default class FlightInfoAircraft extends Component {
  render() {
    const aircraftTypeGroups = this.props.flights.reduce((result, next) => {
      const indexOfGroup = result.findIndex(value => {
        return value.aircraftType === next.aircraft_type;
      });
      let newResult = [...result];
      if (indexOfGroup === -1) {
        let group = { aircraftType: next.aircraft_type, weekdays: [0, 0, 0, 0, 0, 0, 0] };
        let date = moment(next.schedule_date, 'YYYY-MM-DD HH:mm');
        group.weekdays[date.day()] += 1;
        newResult.push(group);
      } else {
        let date = moment(next.schedule_date, 'YYYY-MM-DD HH:mm');
        newResult[indexOfGroup].weekdays[date.day()] += 1;
      }
      return newResult;
    }, [])
    .sort((prev, next) => { 
      if (prev.aircraftType == null || next.aircraftType == null) return 1
      return prev.aircraftType.localeCompare(next.aircraftType); 
    })
    return (
      <div className="table-responsive">
        <table className="table table-sm text-center table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Total Flights</th>
              <th scope="col" colSpan="7">
                Weekday
              </th>
            </tr>
            <tr>
              <th scope="col">Aircraft Type</th>
              <th scope="col">Mon</th>
              <th scope="col">Tue</th>
              <th scope="col">Wed</th>
              <th scope="col">Thu</th>
              <th scope="col">Fri</th>
              <th scope="col">Sat</th>
              <th scope="col">Sun</th>
            </tr>
          </thead>
          <tbody>
          {aircraftTypeGroups.map((value, index) => {
              return (
                <tr key={`${index}`}>
                  <th scope="row">{value.aircraftType || '-'}</th>
                  <td>{value.weekdays[1]}</td>
                  <td>{value.weekdays[2]}</td>
                  <td>{value.weekdays[3]}</td>
                  <td>{value.weekdays[4]}</td>
                  <td>{value.weekdays[5]}</td>
                  <td>{value.weekdays[6]}</td>
                  <td>{value.weekdays[0]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
