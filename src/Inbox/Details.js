import React from "react";
import InboxIcon from '@mui/icons-material/Inbox';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserDetails from "./UserDetails";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AttachmentIcon from '@mui/icons-material/Attachment';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Menu from "./Menu";

function Details(){
    return (
<>
<div className="details-div">
    <Menu/>
    <div className="details-div-first">
        <div className="details-div-all">
        <select  style={{fontSize: 20}} id="div-all">
                <option value="All" style={{fontSize: 20}}>All</option>
                <option value="You">You</option>
                <option value="Assigned">Assigned</option>
                
        </select>
        </div>
       <div className="details-div-search-filter">
           <SearchIcon/>
           <FilterAltIcon style={{marginLeft: 15}}/>
       </div>
       <div className="open-new-div">
           <InboxIcon/>
       <select id="open-div">
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
        </select>
        <select id="new-div">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
        </select>

       </div>

    </div>
</div>
<div>
            
             <div className="keyboard">
<div className="flex-container-keyboard">
<InsertEmoticonIcon className="kb"/>
<AutoAwesomeMosaicIcon className="kb"/>
<AttachmentIcon className="kb"/>
<QuickreplyIcon className="kb"/>
<FormatListBulletedIcon className="kb"/>
<AddBusinessIcon className="kb"/>
</div>
<button className="btnSend">Send</button>
  </div>
 
        </div>
</>
    );
}

export default Details;