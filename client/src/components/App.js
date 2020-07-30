import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "bulma/css/bulma.css";
import "typeface-montserrat";
import "styles/App.scss";

import Table from "components/Table.js";

function App() {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchPriceData = async () => {
      const result = await axios(
        "https://api.coinranking.com/v1/public/coin/1/history/30d"
      );

      // Sort prices by date, oldest to newest
      result.data.data.history.sort((a, b) => b - a);

      const formattedPriceData = result.data.data.history.map(
        (currentPriceData, index, array) => {
          const momentDate = moment(currentPriceData.timestamp),
            previousPriceData = array[index - 1],
            // TODO: Does this need to be rounded to a decimal place?
            priceChange = previousPriceData
              ? currentPriceData.price - previousPriceData.price
              : null;

          let priceDirection;

          if (previousPriceData) {
            if (priceChange > 0) priceDirection = "up";
            if (priceChange < 0) priceDirection = "down";
            if (priceChange === 0) priceDirection = "same";
          }

          return {
            date: momentDate.format(),
            price: currentPriceData.price,
            direction: previousPriceData ? priceDirection : "na",
            change: previousPriceData ? priceChange : "na",
            // TODO: Should the change value be absolute? Should it show a negative symbol?
            dayOfWeek: momentDate.format("dddd"),
          };
        }
      );

      setPriceData(formattedPriceData);
    };

    fetchPriceData();
  }, []);

  return (
    <div className="container">
      <div className="box">
        <Table priceData={priceData}></Table>
      </div>
    </div>
  );
}

export default App;
