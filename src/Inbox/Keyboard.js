import React from "react";
import App from "./App";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AttachmentIcon from '@mui/icons-material/Attachment';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Add } from "@material-ui/icons";
import Menu from './Inbox/Menu'

function Keyboard(){
    return(
        <>
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
export default Keyboard;