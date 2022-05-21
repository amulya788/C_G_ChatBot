import { List, ListItem } from "@mui/material";
import React from "react";
import Keyboard from "./Keyboard";

function Chat(){
    return(
        <>
         <div className="chat">
            <div className="flex-box-chat">
                <h4>Contact Name</h4>
                <div className="flex-box-chat1">
                     <button>Close Chat</button>
                     <select name="cntct" id="cntct" style={{marginLeft: 5}}>
                <option value="Contact 1">Contact 1</option>
                <option value="Contact 2">Contact 2</option>
                </select>
                
               
                </div>
               

            </div>
 <hr></hr>
 
        </div>
       
        </>
       
        

    );
}
export default Chat;