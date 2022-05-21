import React from "react";
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

function Menu(){
    return(

        <div className="main-div">
  
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
     </div>

    );
}

export default Menu;