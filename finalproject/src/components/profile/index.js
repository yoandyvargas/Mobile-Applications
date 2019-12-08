import React from "react";
import "./index.css"


function Profile(props) {
    return (
        <div class="profile">
            <center><h1 class="profiletitle">Profile</h1></center>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{props.profile.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{props.profile.count}</h6>
                    </div>
                </div>
        </div>
    )
};

export default Profile;
