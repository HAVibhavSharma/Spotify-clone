import React from "react";
import { useDataValue } from "./DataLayer";
import styles from "./Sidebar.module.css";
import { HomeOutline,SearchOutline,LibraryOutline } from 'react-ionicons'
import SpotifyWebApi from "spotify-web-api-js";
// import HomeIcon from '@mui/icons-material/Home';
// import SideBarOptions from "./SideBarOptions";
const Sidebar = () => {
  const [info, dispatch] = useDataValue();
  const spotify=new SpotifyWebApi();
  spotify.setAccessToken(info.token);
  spotify.getUserPlaylists().then((playlist)=>{
    console.log(playlist);
  })
  return (
    <>
      <div className={styles.sidebar}>
      <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <div className={styles.options}>
        <div className={styles.option}>
        <HomeOutline
        color={'#00000'} 
        title={"Home"}
        height="20px"
        width="20px"
        />
        <h4>Home</h4>
        </div>
        <div className={styles.option}>
        <SearchOutline
       color={'#00000'} 
       title={"search"}
       height="20px"
       width="20px"
/>
        
        <h4>Search</h4>

        </div>
        <div className={styles.option}>
        <LibraryOutline
        color={'#00000'} 
        title={"Library"}
        height="20px"
        width="20px"
/>
        <h4>Library</h4>
        </div>
        <br/>
        <h3 className={styles.header}>Playlists</h3>
        <div className={styles.hr}/>
        <div className={styles.playlists}>
          {}
        </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
