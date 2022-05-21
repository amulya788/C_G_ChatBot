import React from "react";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Menu from "../Inbox/Menu";
import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';
import NewTemplateBtn from "../Templates/NewTemplateBtn";
import SyncIcon from '@mui/icons-material/Sync';
import UserDetails from "../Inbox/UserDetails";


function TemplatesMain(){
    return(
        <>

          <div className="notify-main-div">
           <Menu/>
          
            <div className="icon-div">
                <AutoAwesomeMosaicIcon/>
            </div>
            <div className="title-div">
                <h2>Templates</h2>
            </div>
            <NewTemplateBtn/>
            
               
            <div className="status-div">
                <div><p className="status">Active</p></div>
                <div><p className="status">Deleted</p></div>
            </div>
           
          <div className="t-btn">
             
                  <div className="templates-btn-div">
               <button id="templates-btn"><AutoAwesomeMosaicIcon/><strong>Templates</strong></button>

           </div>
           <div className="t-name-btn-div">
               <button id="t-name-btn"><PersonIcon/><strong>Name</strong></button>

           </div>
           <div className="t-state-btn-div">
               <button id="t-state-btn"><TimelineIcon/><strong>Status is Any</strong></button>


              </div>
        <div className="sync-btn-div">
             <button id="sync-btn"><SyncIcon/><strong>Sync</strong></button>
             </div>   

        </div>
        
 </div>
         

        </>
      

    );
}
export default TemplatesMain;