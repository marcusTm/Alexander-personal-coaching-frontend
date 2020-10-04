import * as React from "react";
import './footer.css';

export default class footer extends React.Component {

    render() {
        return (
            <div id="footer">
                <div className="row">
                    <div className="col">
                        <p>&copy; { new Date().getFullYear()} MarcusMathiesen ApS </p> 
                        <span>|</span> 
                        <p> All rights reserved  </p>
                        <span>|</span> 
                        <p>  <a href="../contact">Contact</a> </p>
                    </div>
                </div>
            </div>
        );
    }
}