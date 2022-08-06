import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { gethashfromurl } from "./spotify";
const spotify = new SpotifyWebApi();
function App() {
  const [token, settoken] = useState(null);
  useEffect(() => {
    const hash = gethashfromurl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) settoken(_token);
    console.log("Token is ", _token);
  }, []);
  return <>{token ? <Player /> : <Login />}</>;
}

export default App;
