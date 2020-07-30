import React from "react";

function Table(props) {
  return (
    <table className="table">
      {/* TODO: Datum? Really? */}
      <thead>
        {/* TODO: Maybe this should be rendered from the object keys, so it's programmatic? */}
        <tr>
          <th>Date</th>
          <th>Day of Week</th>
          <th>Price</th>
          <th>Direction</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {props.priceData.map((priceDatum) => (
          <tr>
            <td>{priceDatum.date}</td>
            <td>{priceDatum.dayOfWeek}</td>
            <td>{priceDatum.price}</td>
            <td>{priceDatum.direction}</td>
            <td>{priceDatum.change}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
