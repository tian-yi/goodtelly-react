import React, { useEffect } from "react";

const MyList = ({ authToken }) => {
  useEffect(() => {
    fetch("http://api.goodtelly.com/list/favourite/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
    fetch("http://api.goodtelly.com/list/watch-later/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
    fetch("http://api.goodtelly.com/list/meh/", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }, [authToken]);
  return <h1>hello</h1>;
};

export default MyList;
