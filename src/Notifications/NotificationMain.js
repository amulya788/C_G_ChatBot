import React from "react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Menu from "../Inbox/Menu";
import NewCampaignBtn from "./NewCampaignBtn";
import CampaignIcon from '@mui/icons-material/Campaign';
import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';


function NotificationMain(){
    return(
        <>

          <div className="notify-main-div">
           <Menu/>
            <div className="icon-div">
                <NotificationsActiveIcon/>
            </div>
            <div className="title-div">
                <h2>Notifications</h2>
            </div>
            <NewCampaignBtn/>
            <div className="para-div">
                <p>Set up your first notifications campaign and engage with your users.
Don't know how? Click on <a href="#">learn more</a></p>
            </div>
            <div className="sub-para-div">
                <h5 className="sub-para">Account Status</h5>
                <h5 className="sub-para">Healthy</h5>
                <h5 className="sub-para">Messaging Limit</h5>
                <h5 className="sub-para">1k Customers/24 hours</h5>

            </div>
            <div className="conversation-div">
                <p className="conversation">One Time</p>
                <p className="conversation">Ongoing</p>
            </div>
           
          <div className="n-btn">
             
                  <div className="campaigns-btn-div">
               <button id="campaigns-btn"><CampaignIcon/><strong>Campaigns</strong></button>

           </div>
           <div className="name-btn-div">
               <button id="name-btn"><PersonIcon/><strong>Name</strong></button>

           </div>
           <div className="state-btn-div">
               <button id="state-btn"><TimelineIcon/><strong>State is Any</strong></button>


              </div>
 
          </div>
          
          
 
            

        </div>

        </>
      

    );
}
export default NotificationMain;