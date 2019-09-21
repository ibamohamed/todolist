import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';
class Header extends Component {
    render(){
        return(
            <div id="myDIV" className="header">
            <h2>My To Do List</h2>
  
            <Link className="flexed" to="addtask">
              <span className="addBtn">Add</span>
            </Link>
          </div>
        )
    }
}

export default Header;
