import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { gethashfromurl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataValue } from "./DataLayer";
const spotify = new SpotifyWebApi();
function App() {
  const [token, settoken] = useState(null);
  const [{ user }, dispatch] = useDataValue();

  useEffect(() => {
    const hash = gethashfromurl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) settoken(_token);
    spotify.setAccessToken(_token);
    spotify.getMe().then((user) => {
      dispatch({ type: "SET_USER", user: user });
    });

    // console.log("Token is ", _token);
  }, []);
  console.log("user is ", user);
  return <>{token ? <Player /> : <Login />}</>;
}

export default App;
