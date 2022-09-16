import React, { useEffect, useState } from "react";
import axios from "axios";

const ExchangeRate = () => {
  var axios = require("axios");
  var qs = require("qs");
  var data = qs.stringify({});
  var config = {
    method: "get",
    url: "https://gateway.cept.gov.in/currency/getexchangerates/0",
    headers: {
      "x-request-id": "123e4567-e89b-12d3-a456-426614174000",
      "request-date": "2022-01-25T15:52:.667+00:00",
    },
    data: data,
  };
  const [currencyRates, setCurrencyRates] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCurrencyRates(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // return () => {
    //   second;
    // };
  }, []);

  return (
    <h1>
      <div> DataFetching</div>
      <ul>
        {currencyRates.map((post) => (
          <li key={post.id}>
            {post.currency}-{post.exchangerate}
          </li>
        ))}
      </ul>
    </h1>
  );
};

export default ExchangeRate;
