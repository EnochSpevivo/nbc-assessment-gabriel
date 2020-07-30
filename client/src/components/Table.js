import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faCircle,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import "styles/Table.scss";

function Table(props) {
  let previousPrice = "na";

  const renderPriceStyles = (direction, priceProperty) => {
    if (priceProperty === "direction") {
      switch (direction) {
        case "up":
          return <FontAwesomeIcon className="icon__up" icon={faArrowUp} />;
        case "down":
          return <FontAwesomeIcon className="icon__down" icon={faArrowDown} />;
        case "same":
          return <FontAwesomeIcon className="icon__same" icon={faCircle} />;
        default:
          return;
      }
    } else if (priceProperty === "change") {
      switch (direction) {
        case "up":
          return <FontAwesomeIcon className="icon__up" icon={faPlus} />;
        case "down":
          return <FontAwesomeIcon className="icon__down" icon={faMinus} />;
        case "same":
          return <FontAwesomeIcon className="icon__same" icon={faCircle} />;
        default:
          return;
      }
    } else if (priceProperty === "tableRow") {
      switch (direction) {
        case "up":
          return "icon__up";
        case "down":
          return "icon__down";
        case "same":
          return "icon__same";
        default:
          return;
      }
    }

    return;
  };

  const handlePriceClick = async (priceDatum) => {
    await axios("/save_hits", {
      params: {
        priceDate: priceDatum.date,
        priceClick: priceDatum.price,
        previousPrice,
      },
    });

    previousPrice = priceDatum.price;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Day of Week</th>
          <th>Price</th>
          <th>Direction</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {props.priceData.map((priceDatum, index) => (
          <tr key={index} onClick={handlePriceClick.bind(this, priceDatum)}>
            <td>{priceDatum.date}</td>
            <td>{priceDatum.dayOfWeek}</td>
            <td>{priceDatum.price}</td>
            <td>
              <span
                className={`table__flex ${renderPriceStyles(
                  priceDatum.direction,
                  "tableRow"
                )}`}
              >
                {priceDatum.direction}
                {renderPriceStyles(priceDatum.direction, "direction")}
              </span>
            </td>
            <td>
              <span
                className={`table__flex ${renderPriceStyles(
                  priceDatum.direction,
                  "tableRow"
                )}`}
              >
                {priceDatum.change}
                {renderPriceStyles(priceDatum.direction, "change")}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
