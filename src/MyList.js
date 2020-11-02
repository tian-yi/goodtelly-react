import React, { useEffect, useState } from "react";

import axios from "axios";
import { Typography } from "@material-ui/core";

const MyList = () => {
  const [favouriteList, setFavouriteList] = useState([]);
  const [wathLaterList, setWatchLaterList] = useState([]);
  const [mehList, setMehList] = useState([]);
  useEffect(() => {
    axios.get("https://api.goodtelly.com/list/favourite/").then((res) => {
      setFavouriteList(res.data.programs);
    });

    axios.get("https://api.goodtelly.com/list/watch-later/").then((res) => {
      setWatchLaterList(res.data.programs);
    });
    axios.get("https://api.goodtelly.com/list/meh/").then((res) => {
      setMehList(res.data.programs);
    });
  }, []);
  return (
    <>
      <div>
        <Typography variant="h2">Favourite list</Typography>
        {favouriteList.map((item) => (
          <li key={item.program_id}>{item.program_id}</li>
        ))}
      </div>
      <div>
        <Typography variant="h2">Watch later</Typography>
        {wathLaterList.map((item) => (
          <li key={item.program_id}>{item.program_id}</li>
        ))}
      </div>
      <div>
        <Typography variant="h2">Meh list</Typography>
        {mehList.map((item) => (
          <li key={item.program_id}>{item.program_id}</li>
        ))}
      </div>
    </>
  );
};

export default MyList;
