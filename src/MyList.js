import React, { useEffect, useState } from "react";

import axios from "axios";

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
  return <div>Lists</div>;
};

export default MyList;
