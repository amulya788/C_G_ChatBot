import React from "react";
import ViewListIcon from '@mui/icons-material/ViewList';
import { style } from "@mui/system";
import { TextField } from "@mui/material";
import { Block } from "@material-ui/icons";
import { BlockRounded } from "@material-ui/icons";

function UserDetails(){
    return(
        <div className="userDetails">
            <div className="flex-userDetails">
                <div className="ud" ><ViewListIcon style={{paddingLeft: 40}} /></div>
                 <div className="ud" style={{fontSize: 20}}>User Details</div>
            </div>
            <div className="contactDetails">
                <div style={{margin: 10}}>
                    <p>Contact Name</p>
                <p>Edit</p>
                <hr></hr>
                <p>Email: </p>
                <p>Whatsapp Opted: </p>
                <hr></hr>
                <p>Show More</p> 
                </div>
               
            </div>
            <div className="addTags">
                <div style={{margin: 10}}>
                  <p>Tags</p>
                <p>Edit</p>
                <hr></hr>  
                </div>
                
            </div>
            <div className="notes">
                <div style={{margin: 10}}>
                    <p>Notes</p>
                <hr></hr>
                <TextField style={{padding: 10}}></TextField>

                </div>
                
            </div>

        </div>

    );
}

export default UserDetails;