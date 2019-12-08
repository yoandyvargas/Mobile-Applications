import React from "react";
import "./index.css";

class AddContact extends React.Component {



    render() {

    return(
            <div id="form" class="formstyle">
                <h3 class="addtitle">new contact:</h3>
                <form method="POST">
                    <div>
                        <input id="addName" placeholder="Name"required="required"/>
                    </div>
                    <div><br></br>
                        <input id="addNumber" type="text" placeholder="Number" equired="required"
                        />
                    </div><br></br>
                    <button class ="button" type="submit" onClick={this.props.Add}>Add</button>
                </form>
            </div>
    );
    }
}

export default AddContact;