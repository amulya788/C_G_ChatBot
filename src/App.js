import logo from "./logo.svg";
import "./App.css";
import "./Inbox.css";
import "./Notifications/Notifications.css";
import "./Templates/Templates.css";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InboxIcon from '@mui/icons-material/Inbox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import * as React from 'react';
import Keyboard from "./Keyboard";
import UserDetails from "./Inbox/UserDetails";
import Chat from "./Inbox/Chat";
import Details from "./Inbox/Details";
import Menu from "./Inbox/Menu";
import TempButton from "./Inbox/TempButton";
import NotificationMain from "./Notifications/NotificationMain";
import TemplatesMain from "./Templates/TemplatesMain";
import InboxMain from "./Inbox/InboxMain";

function App() {
  return <>
  
  {/* <Details/>
  <Menu/>
  <Keyboard/>
  <UserDetails/>
  <TempButton/> */}
  {/* <TemplatesMain/> */}
  <Details/>
 
  {/* <div className="main-div">
  
     <ul>
       <li><ManageAccountsIcon fontSize="large"/></li>
      <li><InboxIcon fontSize="large"/></li>
      <li><NotificationsActiveIcon fontSize="large"/></li>
      <li><AutoAwesomeMosaicIcon fontSize="large"/></li>
      <li><GroupAddIcon fontSize="large"/></li>
      <li><AnalyticsIcon fontSize="large"/></li>
      <li><AddBusinessIcon fontSize="large"/></li>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <li><WidgetsIcon fontSize="large"/></li>
      <li><SettingsIcon fontSize="large"/></li>
    </ul>
  </div> */}
  
  
  {/* <Keyboard/>
  <UserDetails/>
  <Chat/> */}
  
  </>;
}

export default App;
