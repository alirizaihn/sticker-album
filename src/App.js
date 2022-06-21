import React, { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/appRouter";
import Utils from "./utils/utils";
import Api from "./api/api";

const App = () => {
  const usersData = JSON.parse(localStorage.getItem("users"));
  const photosData = JSON.parse(localStorage.getItem("photos"));
  const stickerSets = JSON.parse(localStorage.getItem("stickerSets"));
  const teamDataFromLocal = JSON.parse(localStorage.getItem("teams"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser();
    setPhotos();
    setTeams();
  }, []);

  const fetchTeams = () => {
    Api.fetchData("/data/teams.json").then((data) => {
      localStorage.setItem("teams", JSON.stringify(data || []));
    });
  };
  const fetchUsers = () => {
    Api.fetchData("/data/users.json").then((data) => {
      localStorage.setItem("users", JSON.stringify(data));
    });
  };
  const fetchPhotos = () => {
    Api.fetchData("/data/photos.json").then((data) => {
      localStorage.setItem("photos", JSON.stringify(data));
      setStickerSet(data);
    });
  };
  const setUser = () => {
    if (!usersData) {
      fetchUsers();
    }
  };
  const setTeams = () => {
    if (!teamDataFromLocal) {
      fetchTeams();
    }
  };
  const setPhotos = () => {
    if (!photosData) {
      fetchPhotos();
    } else {
      setStickerSet(photosData);
    }
  };
  const setStickerSet = (photosData) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const pastDate = new Date(JSON.parse(localStorage.getItem("day")));
    const pastDay = pastDate.getDate();
    if (
      currentDay !== pastDay &&
      photosData?.length > 0 &&
      (!stickerSets || stickerSets.length < 1)
    ) {
      getStickerSets(photosData);
    } else {
      setLoading(false);
    }
  };
  const getStickerSets = (photosData) => {
    let randomPhoto = Utils.getRandomPhotos(photosData);
    const firstPart = randomPhoto.slice().splice(0, 6);
    const secondPart = randomPhoto.slice().splice(6, 6);
    const thirdPart = randomPhoto.slice().splice(12, 6);
    localStorage.setItem(
      "stickerSets",
      JSON.stringify(
        [firstPart, secondPart, thirdPart].filter((item) => item.length > 0)
      )
    );
    const date = new Date();
    localStorage.setItem("day", JSON.stringify(date));
    setLoading(false);
  };

  return <div>{!loading ? <AppRouter /> : null}</div>;
};

export default App;
